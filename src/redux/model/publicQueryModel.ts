export interface PublicQueryModel {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

interface Medium {
  name: "preview_gallery" | "sqr_img" | "thumbnail" | "book_preview";
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
}

interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface Seo {
  title: string;
  description: string;
  keywords: string[];
  defaultMeta: MetaTag[];
  schema: SchemaItem[];
}

interface MetaTag {
  content: string;
  type: "name" | "property";
  value: string;
}

interface SchemaItem {
  meta_name: string;
  meta_value: string;
  type: string;
}

interface CtaText {
  text: string;
  visibility: boolean;
  link: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  type: "text" | "checklist" | "step";
  checklist_items?: string[];
  step_items?: StepItem[];
}

interface StepItem {
  title: string;
  description: string;
}
