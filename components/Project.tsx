import { ReactNode } from "react";

type FeatureProps = {
  title: string;
  description: ReactNode;
  icon: ReactNode;
};

export function Project({ title, description, icon }: FeatureProps) {
  return (
    <li>
      <strong>
        {icon} {title}
      </strong>{" "}
      {description}
    </li>
  );
}
