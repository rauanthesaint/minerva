import styles from "./Button.module.scss";
import type { ButtonProps } from "../model";
import clsx from "clsx";

export function Button({
  variant = "primary",
  size = "md",
  isLoading,
  isDestructive,
  isIcon,
  children,
  className,
  disabled,
  type = "button",
  ...defaultProps
}: ButtonProps) {
  const classes = clsx(styles.Button, styles[variant], styles[size], className);

  return (
    <button
      {...defaultProps}
      data-icon={isIcon}
      data-loading={isLoading}
      disabled={disabled}
      className={classes}
      type={type}
    >
      {isLoading && (
        <div className={styles.overlay}>
          <svg
            className={styles.Spinner}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9999 4.00002C13.6265 4.00002 11.3063 4.7039 9.33291 6.02249C7.35959 7.34106 5.82121 9.21558 4.91297 11.4083C4.00492 13.6008 3.76744 16.0134 4.23035 18.3409C4.69338 20.6687 5.83631 22.8072 7.51455 24.4855C9.19278 26.1637 11.3313 27.3066 13.6591 27.7696C15.9866 28.2326 18.3992 27.9951 20.5918 27.087C22.7844 26.1788 24.6589 24.6404 25.9775 22.6671C27.2961 20.6937 28 18.3735 28 16.0001H32C32 19.1644 31.0616 22.2577 29.3037 24.8888C27.5456 27.52 25.0466 29.5713 22.123 30.7824C19.1995 31.9933 15.9824 32.3098 12.8788 31.6925C9.77512 31.0751 6.92406 29.5512 4.68641 27.3136C2.44876 25.0759 0.924852 22.2249 0.307486 19.1212C-0.309799 16.0176 0.00667837 12.8005 1.21765 9.87699C2.42866 6.95338 4.48004 4.4544 7.11123 2.6963C9.74234 0.938364 12.8356 -3.77345e-08 15.9999 0V4.00002Z"
              fill="var(--accent-foreground)"
            />
          </svg>
        </div>
      )}
      {children}
    </button>
  );
}
