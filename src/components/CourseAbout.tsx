"use client";

import { Section } from "@/redux/model/publicQueryModel";
import { useGetIELtsProductQuery } from "@/redux/query/PublicQuery";
import Title from "./shared/Title";
import { Accordions } from "./shared/Accordions";

export interface AboutSection {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface ExtendedSection extends Section {
  name: string;
}

export default function CourseAbout() {
  const { data, isLoading } = useGetIELtsProductQuery();
  if (isLoading) return <h1>Loading...</h1>;

  const sections = data?.data?.sections as ExtendedSection[] | undefined;

  const AboutSection = sections?.find((item) => item.type === "about");

  const AboutInformation = AboutSection?.values as AboutSection[] | undefined;
  return (
    <div>
      <Title>{AboutSection?.name}</Title>
      <div className="pb-5">
        <Accordions values={AboutInformation} />
      </div>
    </div>
  );
}
