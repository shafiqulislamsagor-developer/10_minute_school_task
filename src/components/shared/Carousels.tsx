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
import { CirclePlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Carousels() {
  const { data, isLoading } = useProduct();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {data?.media.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="!p-0 rounded-md overflow-hidden">
              <CardContent className="h-[180px] !px-0">
                {item.resource_type === "video" && item.resource_value ? (
                  playingVideo === item.resource_value ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1&mute=0&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&fs=0`}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-md"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          item.thumbnail_url ||
                          `https://img.youtube.com/vi/${item.resource_value}/0.jpg`
                        }
                        alt="Video thumbnail"
                        width={500}
                        height={200}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button className="absolute inset-0 text-lg flex items-center justify-center bg-black/50 hover:bg-black/50 transition  text-primary font-semibold">
                        <div
                          onClick={() => setPlayingVideo(item.resource_value)}
                          className="bg-white px-2 py-0.5 rounded-md flex cursor-pointer items-center gap-1"
                        >
                          <CirclePlay /> Watch Video
                        </div>
                      </button>
                    </div>
                  )
                ) : (
                  <Image
                    src={item.thumbnail_url || item.resource_value}
                    alt={item.resource_type}
                    width={500}
                    height={200}
                    className="w-full h-full object-cover rounded-md"
                  />
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onClick={() => {
          setPlayingVideo(null);
        }}
      />
      <CarouselNext
        onClick={() => {
          setPlayingVideo(null);
        }}
      />
    </Carousel>
  );
}
