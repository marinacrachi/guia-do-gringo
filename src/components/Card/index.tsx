import type { CardProps } from "./types";

export const Card = ({ title }: CardProps) => {
  return (
    <li
      style={{
        border: "solid 1px black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h2>{title}</h2>
    </li>
  );
};
