import CourseHeader from "@/components/CourseHeader";
import CourseLaidOut from "@/components/CourseLaidOut";

export default function Home() {
  return (
    <div className="w-[67%] space-y-8">
      <CourseHeader />
      <CourseLaidOut />
    </div>
  );
}
