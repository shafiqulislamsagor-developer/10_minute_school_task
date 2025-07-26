"use client";
import { useProduct } from "@/app/api/useProduct";
import Image from "next/image";

interface Instructor {
  image: string;
  slug: string;
  name: string;
  short_description: string;
}

export default function CourseHeader() {
  const { data, isLoading } = useProduct();
  if (isLoading) return <h1>Loading...</h1>;

  const { title, description, sections } = data || {};

  const instructorsSection = sections?.find(
    (item) => item.type === "instructors"
  );

  const instructorInformation = instructorsSection?.values?.[0] as
    | Instructor
    | undefined;

  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p
        className="text-lg mt-2.5"
        dangerouslySetInnerHTML={{ __html: description || "" }}
      />
      {instructorInformation && (
        <div className="flex justify-start mt-3 items-center gap-2">
          <Image
            src={instructorInformation.image}
            alt={instructorInformation.slug}
            width={50}
            height={50}
            className="rounded-full border-primary border-2"
          />
          <div>
            <h5 className="text-xl font-medium">
              {instructorInformation.name}
            </h5>
            <p className="text-sm">{instructorInformation.short_description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
