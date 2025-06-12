// Button.jsx
import React from "react"
import "./styles/button.css"

export const Button = React.forwardRef(({ className, ...props }, ref) => {
    return <button className={`button ${className}`} ref={ref} {...props} />
})

Button.displayName = "Button"
