"use client";
import { useLang } from "@/context/LangContext";
import { ApiResponse, ProductData } from "@/types/productModel";
import { createContext, useContext, useEffect, useState } from "react";

type ProductContextType = {
  data: ProductData | null;
  isLoading: boolean;
  error: Error | null;
};

const ProductContext = createContext<ProductContextType>({
  data: null,
  isLoading: true,
  error: null,
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<ProductData | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { lang } = useLang();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await fetch(`/api/product?lang=${lang}`, {
          cache: "no-cache",
        });
        if (!res.ok) throw new Error("Failed to fetch product");
        const json: ApiResponse = await res.json();
        setData(json.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [lang]);

  return (
    <ProductContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
