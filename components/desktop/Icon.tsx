import React from "react";
import { Button } from "../ui/button";

type Props = {
  // icon: React.ReactNode;
  icon: any;
  label?: string;
};

function Icon({ icon, label }: Props) {
  return (
    <Button
      variant="ghost"
      className="flex flex-col items-center my-3 space-y-2 w-30 h-30 justify-evenly"
    >
      {icon}
      <p className="text-sm bg-windows-green text-windows-white">{label}</p>
    </Button>
  );
}

export default Icon;
