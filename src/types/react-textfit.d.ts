declare module "react-textfit" {
  export const Textfit: import("react").ComponentType<{
    children?: import("react").ReactNode;
    className?: string;
    max?: number;
    mode?: "single" | "multi";
    style?: import("react").CSSProperties;
  }>;
}
