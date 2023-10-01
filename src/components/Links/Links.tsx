import React from "react";
import TypeImage from "../TypeImage/TypeImage";
import NewsImage from "../../images/autarquia.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Wrapper } from "./Links.syles";

const Links: React.FC = () => {
  return (
    <>
      <SectionTitle
        title={"LINKS ÚTEIS"}
        button={<PrimaryButton children={''}></PrimaryButton>}
      />
      <Wrapper>
        <TypeImage src={NewsImage} width={147} height={31} />
        <TypeImage src={NewsImage} width={147} height={31} />
        <TypeImage src={NewsImage} width={147} height={31} />
        <TypeImage src={NewsImage} width={147} height={31} />
        <TypeImage src={NewsImage} width={147} height={31} />
      </Wrapper>
    </>
  );
};

export default Links;
