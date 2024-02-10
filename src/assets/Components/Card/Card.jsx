import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      console.log(value.data.tools);
      setData(value.data.tools);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 gap-4 my-6 sm:grid-cols-1">
        {/* {data.map((singleData) => {
          return <SingleData singleData={singleData} />;
        })} */}
        {
          data.slice(0, 2).map((singleData)=>(
            <SingleData singleData={singleData} key={singleData.id}/>
          ))}
      </div>
    </>
  );
};

export default Card;
