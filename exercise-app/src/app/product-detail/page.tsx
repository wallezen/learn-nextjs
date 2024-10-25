import { Suspense } from "react";
import { Product } from "@/components/Product";
import { Reviews } from "@/components/Reviews";

export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product Detail Page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Product />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
            </Suspense>
        </div>
    )
}
