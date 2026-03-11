import { Button } from "@/components/ui/button";

const ToggleButtons = () => {
  return (
    <div className="mx-auto space-x-4">
      <Button>Zajęcia</Button>
      <Button>Pakiety zajęć</Button>
      <Button>Zajęcia indywidualne</Button>
    </div>
  );
};

export default ToggleButtons;
