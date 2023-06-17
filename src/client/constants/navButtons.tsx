import { GiSurferVan, GiSurfBoard, GiWaveSurfer } from "react-icons/gi";

interface NavButton {
  id: number;
  text: string;
  iconButton: JSX.Element;
}

export const navButtons: NavButton[] = [
  {
    id: 1,
    text: "Главная",
    iconButton: <GiSurferVan size="2em" />,
  },
  {
    id: 2,
    text: "Новости",
    iconButton: <GiSurfBoard size="2em" />,
  },
  {
    id: 3,
    text: "О проекте",
    iconButton: <GiWaveSurfer size="2em" />,
  },
];
