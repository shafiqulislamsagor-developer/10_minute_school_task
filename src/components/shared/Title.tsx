import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl uppercase font-bold">{children}</h1>;
}
