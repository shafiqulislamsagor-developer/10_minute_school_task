"use client";
import { useProduct } from "@/app/api/useProduct";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Carousels() {
  const { data, isLoading } = useProduct();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent className="">
        {data?.media.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ">
              <Card className="!p-0 rounded-md overflow-hidden">
                <CardContent className="h-[180px] !px-0">
                  <Image
                    src={item.thumbnail_url || item.resource_value}
                    alt={item.resource_type}
                    width={500}
                    height={200}
                    className="w-full rounded-md overflow-hidden h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
