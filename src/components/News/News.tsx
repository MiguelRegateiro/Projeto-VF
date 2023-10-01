import React from "react";
import Card from "../Card/Card";
import { NewsContainer } from "./News.styles";
import SectionTitle from "../SectionTitle/SectionTitle";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { NewsProps } from "./News.types";

const News: React.FC<NewsProps> = ({ newsData }) => {
  return (
    <>
      <SectionTitle title={"NOTICIAS"} button={<PrimaryButton children={"VER TODAS"}></PrimaryButton>}/>
      <NewsContainer>
        {newsData.map((item) => (
          <Card
            key={item.id}
            categories={item.category}
            title={item.title}
            date={item.date}
            imageSrc={item.imageSrc}
          />
        ))}
      </NewsContainer>
    </>
  );
};

export default News;
