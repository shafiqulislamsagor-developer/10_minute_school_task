"use client";
import { useProduct } from "@/app/api/useProduct";
import { Section } from "@/redux/model/publicQueryModel";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Title from "./shared/Title";
import { Skeleton } from "./ui/skeleton";

// feature_explanations
interface ChecklistSection {
  checklist: string[];
  file_type: "image" | "video" | string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface ExtendedSection extends Section {
  name: string;
}

export default function CourseFeature() {
  const { data, isLoading } = useProduct();

  const sections = data?.sections as ExtendedSection[] | undefined;

  const FeatureSection = sections?.find(
    (item) => item.type === "feature_explanations"
  );

  const FeatureInformation = FeatureSection?.values as
    | ChecklistSection[]
    | undefined;
  return (
    <div>
      {isLoading ? (
        <Skeleton className="h-10 w-[70%]" />
      ) : (
        <Title>{FeatureSection?.name}</Title>
      )}
      <div className="my-8  space-y-5">
        {isLoading
          ? Array.from({ length: 2 }).map((_, idx) => (
              <Skeleton key={idx} className="h-44 w-full" />
            ))
          : FeatureInformation?.map((item) => (
              <div
                key={item.id}
                className="text-lg flex items-start font-medium gap-3"
              >
                <div className="w-[350px]  h-[200px]">
                  <Image
                    src={item.file_url}
                    alt={item.title}
                    width={450}
                    height={200}
                    className="w-full h-full border-2 border-primary object-cover rounded-md"
                  />
                </div>
                <div className="flex-1  space-y-2">
                  <h4 className="font-semibold text-xl mb-1.5 mt-1">
                    {item.title}{" "}
                    <span className="text-primary font-bold">:-</span>
                  </h4>
                  {item.checklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-start text-lg font-medium gap-3"
                    >
                      <CheckCheck className="text-primary text-lg mt-1" />{" "}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
