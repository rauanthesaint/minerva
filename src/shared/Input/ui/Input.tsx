import styles from "./Input.module.scss";
import { sortAddons, type InputProps } from "../model";
import clsx from "clsx";

export function Input({ children, className, type, ...defaultProps }: InputProps) {
    const [leading, trailing] = sortAddons(children);

    return (
        <label className={clsx(styles.Input, className)}>
            {leading}
            <input {...defaultProps} type={type} />
            {trailing}
        </label>
    );
}
