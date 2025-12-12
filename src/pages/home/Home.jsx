import React from "react";
import Main from "../../components/main/Main";
import Consulting from "../../components/consulting/Consulting";
import ChooseUs from "../../components/chooseus/ChooseUs";
import Member from "../../components/member/Member";

function Home() {
  return (
    <>
      <Main />
      <Consulting />
      <ChooseUs />
      <Member />
    </>
  );
}

export default Home;
