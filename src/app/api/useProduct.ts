"use client";

import { useEffect, useState } from "react";

interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface SeoMeta {
  content: string;
  type: string;
  value: string;
}

interface SeoSchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

interface Seo {
  defaultMeta: SeoMeta[];
  description: string;
  keywords: string[];
  schema: SeoSchema[];
  title: string;
}

interface CtaText {
  name: string;
  value: string;
}

interface Offer {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface Feature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface GroupJoinEngagement {
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

interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface AboutItem {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface FeatureExplanation {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

interface FaqItem {
  answer: string;
  id: string;
  question: string;
}

interface Section {
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

interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

interface ProductData {
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
  secondary_cta_group: any[]; // Adjust if you have more specific data
  delivery_method: string;
}

interface ApiResponse {
  code: number;
  data: ProductData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

interface UseProductResult {
  data: ProductData | null;
  isLoading: boolean;
  error: Error | null;
}

export function useProduct(): UseProductResult {
  const [data, setData] = useState<ProductData | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  function isEqual(a: any, b: any) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchProduct(showLoading: boolean) {
      if (showLoading) setLoading(true);
      try {
        const res = await fetch("/api/product", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch product");
        const json: ApiResponse = await res.json();

        const hasChanged = !isEqual(json.data, data);

        if (isMounted && hasChanged) {
          if (!showLoading) setLoading(true);
          setData(json.data);
        }
      } catch (err) {
        if (isMounted) setError(err as Error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProduct(true);

    const timeoutId = setTimeout(() => {
      fetchProduct(false);
    }, 60 * 60 * 1000);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return { data, isLoading, error };
}
