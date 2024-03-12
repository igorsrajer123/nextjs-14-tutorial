import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (+params.reviewId > 100) {
    notFound();
  }

  return (
    <h1>
      REview: {params.reviewId} displayed for product id: {params.productId}{" "}
    </h1>
  );
}
