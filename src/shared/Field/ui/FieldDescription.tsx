import type { FieldBaseProps } from "../model";
import { Caption } from "@/shared/Typography";

export function FieldDescription({ children, className }: FieldBaseProps) {
    return <Caption className={className}>{children}</Caption>;
}
