"use client";
import { useProduct } from "@/app/api/useProduct";
import { Section } from "@/redux/model/publicQueryModel";
import { Accordions } from "./shared/Accordions";
import Title from "./shared/Title";

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
  const { data, isLoading } = useProduct();
  if (isLoading) return <h1>Loading....</h1>;

  const sections = data?.sections as ExtendedSection[] | undefined;

  const AboutSection = sections?.find((item) => item.type === "about");

  const AboutInformation = AboutSection?.values as AboutSection[] | undefined;
  return (
    <div>
      <Title>{AboutSection?.name}</Title>
      <div className="pb-5 pt-3">
        <Accordions values={AboutInformation} />
      </div>
    </div>
  );
}
