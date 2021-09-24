import React from "react";
import Table from "./Table";
import Table2 from "./Table2";
import { useMediaQuery } from 'react-responsive';
const Index = () => {
  const isPC = useMediaQuery({
    query: "(max-width: 650px)",
  });
  return (
    <div>
      {isPC ?<Table2/>: <Table />}
    </div>
  );
};

export default Index;
