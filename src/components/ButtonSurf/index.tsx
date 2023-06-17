import "./ButtonsSurf.scss";

interface ButtonSurf {
  text: string;
  iconButton: JSX.Element;
}

export const ButtonSurf = ({ text, iconButton }: ButtonSurf) => {
  return (
    <button className="button-surf">
      {text} {iconButton}
    </button>
  );
};
