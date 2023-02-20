interface CarouselItem {
    title: string;
    subtitle: string;
    image: string;
    text: string;
  }
  
export interface Props {
    items: CarouselItem[];
}