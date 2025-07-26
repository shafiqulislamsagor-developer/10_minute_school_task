import { NextResponse } from "next/server";

export async function GET() {
  const url =
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en";

  try {
    const res = await fetch(url, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch product data" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
