import React from "react";

const variantClasses = {
  h1: "text-[8px]",
  h2: "sm:text-[36px] md:text-[38px] text-[40px]",
  h3: "sm:text-[28px] md:text-[30px] text-[32px]",
  h4: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  h5: "sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "text-[20px]",
  body1: "text-[16px]",
  body2: "text-[15px]",
  body3: "text-[14px]",
  body4: "font-normal text-[12px]",
  body5: "text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
