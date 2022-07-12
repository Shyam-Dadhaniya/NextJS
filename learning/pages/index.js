import React from "react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
export async function getStaticProps() {
  console.log("Re-Generated");
  const filePath = path.join(process.cwd(), "data", "dummy_backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
  if (data.products.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 30,
  };
}
const HomePage = (props) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <Link href={`/products/${product.id}`}>{product.title}</Link>
      ))}
    </ul>
  );
};

export default HomePage;
