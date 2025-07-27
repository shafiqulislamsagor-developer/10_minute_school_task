"use client";
import { useProduct } from "@/app/api/useProduct";
import Image from "next/image";
import Button from "./shared/Button";
import Title from "./shared/Title";
import { Skeleton } from "./ui/skeleton";

export default function CourseCtaPrice() {
  const { data, isLoading } = useProduct();

  return (
    <div className="w-[95%] mx-auto">
      {isLoading ? (
        <Skeleton className="h-10 w-[70%]" />
      ) : (
        <Title>এই কোর্সে যা থাকছে</Title>
      )}
      <div className="mt-5">
        {isLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 9 }).map((_, idx) => (
              <Skeleton key={idx} className="h-5 w-full" />
            ))}
          </div>
        ) : (
          data?.checklist.map((item) => {
            return (
              <p
                key={item.id}
                className="my-2 flex items-center gap-2 font-medium"
              >
                <Image src={item.icon} alt={item.id} width={20} height={20} />
                {item.text}
              </p>
            );
          })
        )}
      </div>
      {isLoading ? (
        <Skeleton className="h-10 mt-5 w-[130px]" />
      ) : (
        <h1 className="text-3xl mt-5 font-bold">৳1000</h1>
      )}
      {isLoading ? (
        <Skeleton className="h-10 mt-5 w-full" />
      ) : (
        <Button className="mt-2 w-full py-2">{data?.cta_text.name}</Button>
      )}
    </div>
  );
}
