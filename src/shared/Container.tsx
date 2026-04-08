import type { CSSProperties, ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Container({ as: Component = "div", children, className, style }: ContainerProps) {
  const styles: CSSProperties = {
    width: `min(1440px, 95%)`,
    margin: "0 auto",
    ...style,
  };

  return (
    <Component style={styles} className={className}>
      {children}
    </Component>
  );
}
