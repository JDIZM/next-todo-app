type Size = "small" | "medium" | "large";

export type IconProps = {
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
};

export const calcIconSize = (size: Size) => {
  switch (size) {
    case "small":
      return "scale(0.5)";
    case "medium":
      return "scale(0.75)";
    case "large":
      return "scale(1)";
    default:
      return "scale(1)";
  }
};
