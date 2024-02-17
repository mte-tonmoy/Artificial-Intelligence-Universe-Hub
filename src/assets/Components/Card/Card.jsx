import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Card = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  // console.log(singleData);
  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    console.log("hello ");
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
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
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            singleData={singleData}
            key={singleData.id}
            setUniqueId={setUniqueId}
          />
        ))}
      </div>
      {!showAll && (
        <p onClick={handleShowAll}>
          <Button>See More</Button>
        </p>
      )}
      <Modal setData={setData} />
    </>
  );
};

export default Card;
