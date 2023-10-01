import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Test from "../../images/Test";
import { EventsContainer, CardContainer, CardsWrapper, ScrollListWrapper, InfoContainer, DateContainer, Category, Title, Location, Time, DateText } from './Events.styles';
import ScrollList from "../ScrollList/ScrollList";
import { EventsProps } from "./Events.types";

const items = [
  {
    title: 'Aula de Dança',
    dayOfWeek: 'Quinta-feira',
    time: '19:30 AM',
  },
  {
    title: 'Aula de Dança',
    dayOfWeek: 'Quinta-feira',
    time: '19:30 AM',
  },
  {
    title: 'Aula de Dança',
    dayOfWeek: 'Quinta-feira',
    time: '19:30 AM',
  },
  {
    title: 'Aula de Dança',
    dayOfWeek: 'Quinta-feira',
    time: '19:30 AM',
  },
  {
    title: 'Aula de Dança',
    dayOfWeek: 'Quinta-feira',
    time: '19:30 AM',
  },
  {
    title: 'Aula de Dança',
    dayOfWeek: 'Quinta-feira',
    time: '19:30 AM',
  },
  {
    title: 'Aula de Dança',
    dayOfWeek: 'Quinta-feira',
    time: '19:30 AM',
  },
];

const Events: React.FC<EventsProps> = ({ eventsData }) => {
  return (
    <>
      <SectionTitle title={"EVENTOS"} button={<PrimaryButton children={"VER TODOS"}></PrimaryButton>}/>

      <EventsContainer>
        <CardsWrapper>
        {eventsData.map((event: any) => (
          <CardContainer key={event.id}>
            <DateContainer>
              <DateText>{event.numberDay}</DateText>
              <DateText>{event.dayWeek}</DateText>
              <DateText>{event.monthYear}</DateText>
            </DateContainer>
            <InfoContainer>
              <Category>{event.category.join(', ')}</Category>
              <Title>{event.title}</Title>
              <Location>{event.local}</Location>
              <Time>{event.time}</Time>
            </InfoContainer>
          </CardContainer>
        ))}
        </CardsWrapper>
        <ScrollListWrapper>
        <ScrollList title={"Atividades da Semana"} items={items} />
        </ScrollListWrapper>
      </EventsContainer>
    </>
  );
};

export default Events;
