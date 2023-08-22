import { Club } from "lucide-react";

import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";

import { Game } from "./Game";

export const metadata = {
  title: "solitaire",
  description: "🆗",
};

export default function SolitairePage() {
  return (
    <WindowWrapper
      title="Solitaire"
      icon={<Club />}
      menu={menuItems.default}
      bottomBar
    >
      <Game />
    </WindowWrapper>
  );
}
