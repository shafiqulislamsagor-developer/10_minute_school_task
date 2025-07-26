"use client";

import { useGetIELtsProductQuery } from "@/redux/query/PublicQuery";
import Image from "next/image";
import Button from "./shared/Button";
import Title from "./shared/Title";

export default function CourseCtaPrice() {
  const { data, isLoading } = useGetIELtsProductQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="w-[95%] mx-auto">
      <Title>এই কোর্সে যা থাকছে</Title>
      <div className="mt-5">
        {data?.data.checklist.map((item) => {
          return (
            <p
              key={item.id}
              className="my-2 flex items-center gap-2 font-medium"
            >
              <Image src={item.icon} alt={item.id} width={20} height={20} />
              {item.text}
            </p>
          );
        })}
      </div>
      <h1 className="text-3xl mt-5 font-bold">৳1000</h1>
      <Button className="mt-2 w-full py-2">{data?.data.cta_text.name}</Button>
    </div>
  );
}
