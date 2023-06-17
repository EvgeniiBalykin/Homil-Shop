import { navButtons } from "../../constants/navButtons";
import { ButtonSurf } from "../ButtonSurf";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      {navButtons.map((button) => (
        <ButtonSurf
          key={button.id}
          text={button.text}
          iconButton={button.iconButton}
        />
      ))}
    </nav>
  );
};
