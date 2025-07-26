"use client";

import { Section } from "@/redux/model/publicQueryModel";
import { useGetIELtsProductQuery } from "@/redux/query/PublicQuery";
import { CheckCheck } from "lucide-react";
import Title from "./shared/Title";
interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface ExtendedSection extends Section {
  name: string;
}
export default function CourseLearn() {
  const { data, isLoading } = useGetIELtsProductQuery();
  if (isLoading) return <h1>Loading...</h1>;

  const sections = data?.data?.sections as ExtendedSection[] | undefined;

  const LearnPointerSection = sections?.find(
    (item) => item.type === "pointers"
  );

  const LearnPointerInformation = LearnPointerSection?.values as
    | Pointer[]
    | undefined;
  return (
    <div>
      <Title>{LearnPointerSection?.name}</Title>
      <div className="mt-5 space-y-2">
        {LearnPointerInformation?.map((item) => (
          <div
            key={item.id}
            className="flex items-start text-lg font-medium gap-3"
          >
            <CheckCheck className="text-primary text-lg mt-1" /> {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
