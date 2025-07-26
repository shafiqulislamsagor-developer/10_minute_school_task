// types/product.ts

export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface SeoMeta {
  content: string;
  type: string;
  value: string;
}

export interface SeoSchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface Seo {
  defaultMeta: SeoMeta[];
  description: string;
  keywords: string[];
  schema: SeoSchema[];
  title: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Offer {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

export interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface Feature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface GroupJoinEngagement {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

export interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface AboutItem {
  description: string;
  icon: string;
  id: string;
  title: string;
}

export interface FeatureExplanation {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

export interface FaqItem {
  answer: string;
  id: string;
  question: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: (
    | Offer
    | Instructor[]
    | Feature[]
    | GroupJoinEngagement[]
    | Pointer[]
    | AboutItem[]
    | FeatureExplanation[]
    | Testimonial[]
    | FaqItem[]
    | any[]
  )[];
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: ChecklistItem[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: ProductData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

export interface UseProductResult {
  data: ProductData | null;
  isLoading: boolean;
  error: Error | null;
}
