import React from "react";
import PrimaryItems from "../PrimaryItems/PrimaryItems";
import { FooterContainer, FooterWrapper, NewsContainer, TypeImageContainer, TypeContactContainer } from "./Footer.styles";
import NewsletterSignup from "../Newsteller/Newsteller";
import Share from "../Share/Share";
import TypeImage from "../TypeImage/TypeImage";
import Map from "../../pages/mapa.png";
import Contact from "../Contact/Contact";
import { Divider } from "../Divider/Divider.styles";
import FooterLinks from "../Info/Info";

const Footer = () => {
  return (
    <>
          <TypeImageContainer>
      <TypeImage src={Map} width={628} height={388} />
      </TypeImageContainer>
      <TypeContactContainer>
      <Contact
        title={"Contactos"}
        text={"Morada lorem ipsum dolor sit lorem ipsum dolor sit"}
        contactInfo={["+ 000 000 000 000", "+ 000 000 000 000", "+ 000 000 000 000", "exemple@email.com"]}
      />
      </TypeContactContainer>
      <FooterContainer>
      <Divider />
        <FooterWrapper>
          <PrimaryItems
            title="Município"
            paragraphs={[
              "Mensagem do Presidente",
              "Câmara Municipal",
              "Assembleia Municipal",
              "Freguesias",
            ]}
          />
          <PrimaryItems
            title="Autarquia360"
            paragraphs={["Onde Estamos", "Conheça-nos melhor", "Visite-nos"]}
          />
          <PrimaryItems
            title="Atividade Municipal"
            paragraphs={["Ação Social", "CPCJ", "Educação", "Ambiente"]}
          />
          <NewsContainer>
            <NewsletterSignup />
            <Share />
          </NewsContainer>
        </FooterWrapper>
        <Divider />
        <FooterLinks/>
      </FooterContainer>{" "}
    </>
  );
};

export default Footer;
