"use client";

import { notFound } from "next/navigation";

export default function ReviewDetailsPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) < 1000) {
    notFound();
  }

  // if (parseInt(params.reviewId) > 10000) {
  //   throw new Error("Review ID is too high");
  // }

  return (
    <div>
      Review Details Page {params.reviewId} for product {params.productId}
    </div>
  );
}
