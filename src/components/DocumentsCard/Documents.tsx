import Test from '../../images/Test';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ButtonContainer, CardContainer, CardImage, CardTitle, DocumentsContainer} from './Documents.styles';
import { RectangleCardProps } from "./Documents.types";
import atas from '../../images/Atas.png'
import documentos from '../../images/Documentos.png'
import editais from '../../images/Editais.png'
import fomularios from '../../images/Formularios.png'
import inscricoes from '../../images/Inscricoes.png'


const Documents: React.FC<RectangleCardProps> = ({
    title,
    imageUrl,
    backgroundColor,
  }) => {
    return (
      <CardContainer backgroundColor={backgroundColor}>
        <CardImage src={imageUrl} alt={title} />
        <ButtonContainer>
        <CardTitle>{title}</CardTitle>
        <PrimaryButton icon={<Test width={'10'} height={'10'} />} children={undefined}/>
        </ButtonContainer>
      </CardContainer>
    );
  };
  
  const RenderizedDocuments = () => {
    return (
      <div>
        <SectionTitle title={"Documentos Institucionais"}/>
        <DocumentsContainer>
        <Documents title="Atas" imageUrl={atas} backgroundColor="#246970" />
        <Documents title="Editais" imageUrl={documentos} backgroundColor="#69A391" />
        <Documents title="Formulários" imageUrl={editais} backgroundColor="#21878F" />
        <Documents title="Documentos" imageUrl={fomularios} backgroundColor="#64AE87" />
        <Documents title="Inscrições" imageUrl={inscricoes} backgroundColor="#FDAC1D" />
        </DocumentsContainer>
      </div>
    );
  };
  
  export default RenderizedDocuments;