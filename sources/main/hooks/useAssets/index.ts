import HelpIcon from "./../../assets/icons/help_icon.svg";
import A4A from "./../../assets/boards/regulamentation/a_4a.svg";
import A14 from "./../../assets/boards/regulamentation/a_14.svg";
import A27 from "./../../assets/boards/regulamentation/a_27.svg";
import A36 from "./../../assets/boards/regulamentation/a_36.svg";
import A44 from "./../../assets/boards/regulamentation/a_44.svg";

const useAssets = () => {
  const icons = {
    HelpIcon,
  };

  const boards = {
    regulamentation: {
      A4A,
      A14,
      A27,
      A36,
      A44,
    },
  };

  return {
    icons,
    boards,
  };
};

export default useAssets;
