"use client";
import { useProduct } from "@/app/api/useProduct";
import { Section } from "@/redux/model/publicQueryModel";
import { Accordions } from "./shared/Accordions";
import Title from "./shared/Title";
import { Skeleton } from "./ui/skeleton";

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

  const sections = data?.sections as ExtendedSection[] | undefined;

  const AboutSection = sections?.find((item) => item.type === "about");

  const AboutInformation = AboutSection?.values as AboutSection[] | undefined;
  return (
    <div>
      {isLoading ? (
        <Skeleton className="h-10 w-[70%]" />
      ) : (
        <Title>{AboutSection?.name}</Title>
      )}
      <div className="pb-5 pt-3">
        {isLoading ? (
          <div className="space-y-2 pt-3">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton key={idx} className="h-7 w-[90%]" />
            ))}
          </div>
        ) : (
          <Accordions values={AboutInformation} />
        )}
      </div>
    </div>
  );
}
