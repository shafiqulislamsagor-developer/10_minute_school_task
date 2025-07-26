"use client";
import { Carousel } from "@/components/ui/carousel"; // Import the Carousel component
import { Carousels } from "./shared/Carousels";

export function CourseTrailer() {
  return (
    <div className="overflow-hidden w-[95%] mx-auto">
      <Carousel>
        <Carousels />
      </Carousel>
    </div>
  );
}
