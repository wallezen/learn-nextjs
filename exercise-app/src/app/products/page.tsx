import Link from "next/link"

export default function ProductsList() {
  const productId = 1001

  return (
    <>
      <Link href="/">Home</Link>

      <h1>Products List</h1>
      <h2><Link href="/products/1">Product 1</Link></h2>
      <h2><Link href="/products/2">Product 2</Link></h2>
      <h2><Link href="/products/3">Product 3</Link></h2>
      <h2><Link href={`/products/${productId}`} replace>Product {productId}</Link></h2>
    </>
  );
}