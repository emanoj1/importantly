import { createElement } from "react";

export default function Container({
  as: Component = "div",
  className = "",
  children,
  ...props
}) {
  const classes = ["container", className].filter(Boolean).join(" ");

  return createElement(Component, { className: classes, ...props }, children);
}
