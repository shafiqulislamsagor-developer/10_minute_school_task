import CourseCtaPrice from "@/components/CourseCtaPrice";
import { CourseTrailer } from "@/components/CourseTrailer";

export default function page() {
  return (
    <div className="w-[30%] border rounded-md py-3 space-y-5">
      <CourseTrailer />
      <CourseCtaPrice />
    </div>
  );
}
