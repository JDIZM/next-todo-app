type Size = "small" | "medium" | "large";

export type IconProps = {
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
};

export const calcIconSize = (size: Size) => {
  switch (size) {
    case "small":
      return 24;
    case "medium":
      return 36;
    case "large":
      return 48;
    default:
      return 24;
  }
};
