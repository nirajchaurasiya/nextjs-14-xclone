import React from "react";
import { fetchRevenue } from "../ui/data";

export default function page() {
  const revenue = fetchRevenue();
  console.log(revenue);
  return (
    <div>
      <>Contact</>
    </div>
  );
}
