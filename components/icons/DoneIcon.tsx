import { calcIconSize, IconProps } from "../../helpers/styleHelpers";

const DoneIcon: React.FC<IconProps> = ({ size = "small", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={calcIconSize(size)}
      width={calcIconSize(size)}
      {...rest}
    >
      <path
        d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoneIcon;
