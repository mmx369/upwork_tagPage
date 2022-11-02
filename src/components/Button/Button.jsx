import React from 'react'

export const Button = ({
  className,
  children,
  typeButton,
  onClick,
  isDisabled,
  ...props
}) => {
  return (
    <button
      className={className}
      disabled={isDisabled}
      type={typeButton}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}
