import React from "react";

import Header from "./assets/Components/Header/Header";
import Button from "./assets/Components/Button/Button";
import Card from "./assets/Components/Card/Card";


const App = () => {
  return (
    <>
      <Header />
      <Button>Sort By date</Button>
      <Button>See More</Button>
      <Card></Card>
    </>
  );
};

export default App;
