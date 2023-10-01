import { FooterLinksContainer, IconsContainer } from "./Info.styles";
import logo1 from '../../images/Caminho 14.png'
import logo2 from '../../images/Foreground.png'
import logo3 from '../../images/Path 37.png'
import TypeImage from "../TypeImage/TypeImage";

const FooterLinks: React.FC = () => {
    return (
      <FooterLinksContainer>
        <div>
          &copy; 2020 Autarquia360 | Todos os direitos reservados
        </div>
        <div>
          <a>Mapa do site |    </a>
          <a>Política de Privacidade |    </a>
          <a>Ficha Técnica     </a>
        </div>
        <IconsContainer>
          <TypeImage src={logo1}></TypeImage>
          <TypeImage src={logo3}></TypeImage>
          <TypeImage src={logo2}></TypeImage>

        </IconsContainer>
      </FooterLinksContainer>
    );
  };
  
  export default FooterLinks;