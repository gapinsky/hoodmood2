import { Menu, X } from "lucide-react";

interface Props {
  menuHandler: React.Dispatch<React.SetStateAction<boolean>>;
  menuState: boolean;
}

const MenuButton = ({ menuState, menuHandler }: Props) => {
  return (
    <button
      className=" border p-3 hover:cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] lg:hidden"
      onClick={() => menuHandler((prev) => !prev)}
    >
      {menuState ? <X /> : <Menu />}
    </button>
  );
};

export default MenuButton;
