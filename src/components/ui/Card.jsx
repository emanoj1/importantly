import { createElement } from "react";

export default function Card({
  as: Component = "div",
  className = "",
  children,
  ...props
}) {
  const classes = ["service-card", className].filter(Boolean).join(" ");

  return createElement(Component, { className: classes, ...props }, children);
}
