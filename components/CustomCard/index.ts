export interface CardData {
  image: string;
  tag: string;
  time: number;
  title: string;
  description: string;
  link: string;
}

export interface CardProps {
  card: CardData;
}

export interface CardContainerProps {
  cards: CardData[];
  cardType: "case-study" | "insight-update";
}
