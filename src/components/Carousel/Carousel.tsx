import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../images/1200px-Castelo_da_Vidigueira_-_Portugal_(3654902030).png'
import img2 from '../../images/7212563.png'
import img3 from '../../images/Vidigueira.png'
import img4 from '../../images/Vidigueira_Vila_de_Frades_-_Vidigueira.png'
import img5 from '../../images/dscf3581_172.png'
import img6 from '../../images/naom_57c6d202a8f08.png'
import { CarouselContainer, CarouselImage, Legend } from './Carousel.styles';
import PrimaryButton from '../PrimaryButton/PrimaryButton';


function ImagesCarousel() {
  return (
    <CarouselContainer>
      <Carousel>
        <div>
          <CarouselImage src={img4} alt="Image 1" />
          <Legend>Apoio extraordinário à Associação Humanitária dos Bombeiros <PrimaryButton children={'Saber Mais'}></PrimaryButton></Legend>
        </div>
        <div>
          <CarouselImage src={img1} alt="Image 2" />
          <Legend>Legend 2</Legend>
        </div>
        <div>
          <CarouselImage src={img2} alt="Image 3" />
          <Legend>Legend 3</Legend>
        </div>
        <div>
          <CarouselImage src={img3} alt="Image 4" />
          <Legend>Legend 4</Legend>
        </div>
        <div>
          <CarouselImage src={img5} alt="Image 5" />
          <Legend>Legend 5</Legend>
        </div>
        <div>
          <CarouselImage src={img6} alt="Image 6" />
          <Legend>Legend 6</Legend>
        </div>
      </Carousel>
    </CarouselContainer>
  );
}

export default ImagesCarousel;