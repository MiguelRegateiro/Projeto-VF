import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import News from '../components/News/News';
import imgTest from './news.png'
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import Links from '../components/Links/Links';
import RenderizedDocuments from '../components/DocumentsCard/Documents';
import ImagesCarousel from '../components/Carousel/Carousel';

const HomePage = () => {

  const newsData = [
    {
      id: 1,
      title: 'Autarquia360 ao fresco 2020',
      category: ["Categoria", "Categoria"],
      date: '27 - 07- 2020',
      imageSrc: imgTest,
    },
    {
      id: 2,
      title: 'Exposição de fotografia Still(h)e(a)en',
      category: ["Categoria"],
      date: '27 - 07- 2020',
      imageSrc: imgTest,
    },
    {
      id: 3,
      title: 'Regularizada a situação do fornecimento ...',
      category: ["Categoria", "Categoria", "Categoria"],
      date: '27 - 07- 2020',
      imageSrc: imgTest,
    },
  ];

  const eventsData = [
    {
      id: 1,
      title: 'Concurso de Poesia de Versos Entrelaçados',
      category: ['Categoria', 'Categoria', 'Categoria'],
      local: 'Local do Evento ',
      time: '10h30',
      numberDay: '4',
      dayWeek: 'Sábado',
      monthYear: 'Agosto 2020',
    },
    {
      id: 2,
      title: 'Concurso de Poesia de Versos Entrelaçados',
      category: ['Categoria'],
      local: 'Local do Evento ',
      time: '10h30',
      numberDay: '29',
      dayWeek: 'Domingo',
      monthYear: 'Dezembro 2020',
    },
    {
      id: 3,
      title: 'Concurso de Poesia de Versos Entrelaçados',
      category: ['Categoria'],
      local: 'Local do Evento ',
      time: '10h30',
      numberDay: '12',
      dayWeek: 'Segunda',
      monthYear: 'Agosto 2020',
    },
    {
      id: 4,
      title: 'Concurso de Poesia de Versos Entrelaçados',
      category: ['Categoria'],
      local: 'Local do Evento ',
      time: '10h30',
      numberDay: '23',
      dayWeek: '',
      monthYear: 'Dezembro 2020',
    },
  ];
  


  return (
    <div>
      <SubHeader/>
      <Header/>
      <ImagesCarousel/>
      <News newsData={newsData} /> 
      <Events eventsData={eventsData} />
      <ImagesCarousel/>
      <RenderizedDocuments/>
      <Links />
      <Footer/>
    </div>
  );
};

export default HomePage;
