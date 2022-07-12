import React, { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const LastSalePage = () => {
  const [sales, setSales] = useState();
  // const [loading, setLoading] = useState(false);
  const { data, error } = useSWR(
    "https://nextjs-c9c4b-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );
  console.log(data);
  useEffect(() => {
    if (data) {
      const transformedSale = [];
      for (const key in data) {
        transformedSale.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      console.log(transformedSale);
      setSales(transformedSale);
    }
  }, [data]);

  /* useEffect(() => {
    setLoading(true);
    fetch("https://nextjs-c9c4b-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!sales) {
    return <div>No sales</div>;
  } */

  if (error) {
    return <div>Failed to load.</div>;
  }
  if (!data || !sales) {
    return <div>Loading...</div>;
  }
  console.log(sales);
  return (
    <div>
      <h1>Last Sale</h1>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastSalePage;
