import { HTMLAttributes, memo, ReactNode } from "react";

import cls from "./Card.module.scss";
import { classNames } from "../../lib/classNames/classNames";

export type CardVariant = "default" | "outlined" | "light";
export type CardPadding = "0" | "10" | "16" | "24" | "32";
export type CardBorder = "none" | "round" | "normal" | "partial";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  "0": "gap_0",
  "10": "gap_10",
  "16": "gap_16",
  "24": "gap_24",
  "32": "gap_32",
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    padding = "10",
    children,
    max,
    variant = "default",
    border = "partial",
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[border],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
