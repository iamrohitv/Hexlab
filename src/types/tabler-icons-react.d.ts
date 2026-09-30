declare module "@tabler/icons-react" {
  import type { SVGProps } from "react";
  export type IconProps = SVGProps<SVGSVGElement> & {
    size?: number | string;
    stroke?: number | string;
  };
  export const IconArrowLeft: (props: IconProps) => JSX.Element;
  export const IconArrowRight: (props: IconProps) => JSX.Element;
  const _default: unknown;
  export default _default;
}
