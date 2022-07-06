import React from "react";
import Link from "next/link";

const clients = () => {
  const client = () => [
    {
      id: 1,
      name: "Client 1",
    },
    {
      id: 2,
      name: "Client 2",
    },
  ];
  return (
    <>
      <div>The clients list.</div>
      <ul>
        {client().map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>
              <a>{client.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default clients;
