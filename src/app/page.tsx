import CourseFeature from "@/components/CourseFeature";
import CourseHeader from "@/components/CourseHeader";
import CourseLaidOut from "@/components/CourseLaidOut";
import CourseLearn from "@/components/CourseLearn";

export default function Home() {
  return (
    <div className="w-[67%] space-y-8">
      <CourseHeader />
      <CourseLaidOut />
      <CourseLearn />
      <CourseFeature />
    </div>
  );
}
