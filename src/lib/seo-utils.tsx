import { useProduct } from "@/app/api/useProduct";

const { data, isLoading } = useProduct();

export default function SeoUtils() {
  if (isLoading) return;

  return <head></head>;
}
