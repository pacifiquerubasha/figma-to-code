import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder5: "rounded-[5px]" };
const variants = {
  OutlinePurple600:
    "border-b-[4px] border-purple_600 border-solid text-purple_600",
  FillPurple600: "bg-purple_600 text-gray_50",
  OutlineWhiteA70033:
    "border-[1px] border-solid border-white_A700_33 text-white_A700",
};
const sizes = { sm: "p-[5px]", md: "pr-[10px] py-[29px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf([
    "OutlinePurple600",
    "FillPurple600",
    "OutlineWhiteA70033",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};

Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlinePurple600",
  size: "md",
};
export { Button };
