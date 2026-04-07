import type { FieldBaseProps } from "../model";
import { Caption } from "@/shared/Typography";

export function FieldLabel({ children, className }: FieldBaseProps) {
    return (
        <Caption muted={false} className={className}>
            {children}
        </Caption>
    );
}
