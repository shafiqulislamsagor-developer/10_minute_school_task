"use client";

import { useGetIELtsProductQuery } from "@/redux/query/PublicQuery";

export default function Test() {
  const { data } = useGetIELtsProductQuery();
  console.log(data);
  return <div>Test</div>;
}
