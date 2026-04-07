import type { CSSProperties, ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({ as: Component = "div", children, className }: ContainerProps) {
  const styles: CSSProperties = {
    width: `min(1440px, 95%)`,
    margin: "0 auto",
  };

  return (
    <Component style={styles} className={className}>
      {children}
    </Component>
  );
}
