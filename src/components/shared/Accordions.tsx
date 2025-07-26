import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCheck } from "lucide-react";
import { AboutSection } from "../CourseAbout";

export function Accordions({ values }: { values: AboutSection[] | undefined }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={values?.[0]?.id}
    >
      {values?.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="group flex items-center justify-between">
            <div className="group-data-[state=closed]:text-foreground group-data-[state=open]:text-primary flex items-center gap-2">
              <CheckCheck className="size-5" />
              <h1
                className="group-data-[state=open]:text-primary group-data-[state=open]:pb-0.5 group-data-[state=open]:pt-1 group-data-[state=closed]:py-1 transition-all duration-300 group-data-[state=closed]:text-foreground"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
            <span
              className="transition-all group-data-[state=open]:text-primary duration-300 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            >
              <span className="text-2xl group-data-[state=open]:hidden">+</span>
              <span className="text-2xl group-data-[state=closed]:hidden">
                −
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
