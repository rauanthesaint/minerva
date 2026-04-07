import type { FieldError, FieldErrors, FieldValues, Resolver, ResolverResult } from "react-hook-form";
import type { ZodType } from "zod";

export function resolver<T extends FieldValues>(schema: ZodType<T>): Resolver<T> {
    return (values, _context, _options): ResolverResult<T> => {
        const { data, success, error } = schema.safeParse(values);

        if (success) {
            return { values: data, errors: {} };
        }

        const errors: Record<string, FieldError> = {};
        for (const issue of error.issues) {
            const path = issue.path.join(".");
            if (!errors[path]) {
                errors[path] = { message: issue.message, type: issue.code };
            }
        }

        return { values: {}, errors: errors as FieldErrors<T> };
    };
}
