import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          <AccordionTrigger className="group">
            <h1
              className="transition-colors group-data-[state=open]:text-primary group-data-[state=closed]:text-foreground"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
