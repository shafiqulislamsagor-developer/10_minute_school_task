"use client";

import { Section } from "@/redux/model/publicQueryModel";
import { useGetIELtsProductQuery } from "@/redux/query/PublicQuery";
import Image from "next/image";
import Title from "./shared/Title";

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

interface ExtendedSection extends Section {
  name: string;
}

export default function CourseLaidOut() {
  const { data, isLoading } = useGetIELtsProductQuery();

  if (isLoading) return <h1>Loading...</h1>;

  const sections = data?.data?.sections as ExtendedSection[] | undefined;

  const featuresSection = sections?.find((item) => item.type === "features");

  const features = featuresSection?.values as FeatureItem[] | undefined;

  return (
    <div>
      <Title>{featuresSection?.name}</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-5">
        {features?.map((item) => (
          <div
            key={item.id}
            className="border border-primary/80 rounded-md px-3 py-5 text-center"
          >
            <Image
              src={item.icon}
              alt={item.id}
              width={56}
              height={56}
              className="rounded-full border-primary size-10 mx-auto mb-3"
            />
            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
