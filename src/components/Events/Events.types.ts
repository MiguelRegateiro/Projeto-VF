export interface EventsItem {
  id: number;
  title: string;
  category: string[];
  local: string;
  time: string;
  numberDay: string;
  dayWeek: string;
  monthYear: string;
}

export interface EventsProps {
  eventsData: EventsItem[];
}
