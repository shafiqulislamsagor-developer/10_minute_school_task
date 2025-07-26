export interface PublicQueryModel {
  data: {
    slug: string;
    id: number;
    title: string;
    description: string;
    media: Medium[];
    checklist: Checklist[];
    seo: Seo;
    cta_text: CtaText;
    sections: Section[];
  };
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
  name: string;
  value: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  type: string;
  checklist_items?: string[];
  step_items?: StepItem[];
  values?: Array<Record<string, unknown> | string | number | boolean | null>;
}

interface StepItem {
  title: string;
  description: string;
}
