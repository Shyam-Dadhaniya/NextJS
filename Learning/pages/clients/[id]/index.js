import React from "react";
import { useRouter } from "next/router";
const ClientName = () => {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/max/projecta");
  }
  return (
    <>
      <div>The specific ClientName.</div>
      <button onClick={loadProjectHandler}>Project A</button>
    </>
  );
};

export default ClientName;
