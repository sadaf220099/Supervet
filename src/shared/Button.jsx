import React from "react";
import { Icon } from "@iconify/react";


const Button = ({
  text,
  onClick,
  disabled = false,
  loading = false,
  className = "",
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt = "",
  icon,
  iconClass = "",
  type = "button",
  ariaLabel,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {loading ? (
        <Icon
          icon="line-md:loading-twotone-loop"
          className={`h-5 w-5 ${iconClass}`}
        />
      ) : (
        <>
          {icon && <Icon icon={icon} className={`h-5 w-5 ${iconClass}`} />}
          
          {text && <span>{text}</span>}
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
              className={`object-contain ${iconClass}`}
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;