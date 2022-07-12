import React from "react";
import fs from "fs/promises";
import path from "path";
const ProductDetailPage = (props) => {
  const { loadedProduct } = props;
  if (!loadedProduct) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </ul>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy_backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
//   console.log(params);
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy_backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);
   if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathWithParams,
    //  [
    //   { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    // ],
    fallback: true,
  };
}

export default ProductDetailPage;
