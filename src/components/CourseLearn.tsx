"use client";
import { useProduct } from "@/app/api/useProduct";
import { Section } from "@/redux/model/publicQueryModel";
import { CheckCheck } from "lucide-react";
import Title from "./shared/Title";
import { Skeleton } from "./ui/skeleton";
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
  const { data, isLoading } = useProduct();

  const sections = data?.sections as ExtendedSection[] | undefined;

  const LearnPointerSection = sections?.find(
    (item) => item.type === "pointers"
  );

  const LearnPointerInformation = LearnPointerSection?.values as
    | Pointer[]
    | undefined;
  return (
    <div>
      {isLoading ? (
        <Skeleton className="h-10 w-[70%]" />
      ) : (
        <Title>{LearnPointerSection?.name}</Title>
      )}

      <div className="mt-5 space-y-2">
        {isLoading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <Skeleton key={idx} className="h-5 w-[90%]" />
            ))
          : LearnPointerInformation?.map((item) => (
              <div
                key={item.id}
                className="flex items-start text-lg font-medium gap-3"
              >
                <CheckCheck className="text-primary text-lg mt-1" />{" "}
                <span className="flex-1">{item.text}</span>
              </div>
            ))}
      </div>
    </div>
  );
}
