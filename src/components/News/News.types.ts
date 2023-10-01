export interface NewsItem {
    id: number;
    title: string;
    category: string[];
    date: string;
    imageSrc: string;
  }
  
export interface NewsProps {
    newsData: NewsItem[];
  }