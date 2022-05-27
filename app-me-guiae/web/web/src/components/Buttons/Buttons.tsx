import React, { HtmlHTMLAttributes } from "react";

import { Button } from "./styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ContainedButton(props: ButtonProps) {
  return <Button {...props} />;
}

export function TextButton() {
  return <div />;
}

export function OutlinedButton() {
  return <div />;
}

export function ToogleButton() {
  return <div />;
}
