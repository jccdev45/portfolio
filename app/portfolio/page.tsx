import { Briefcase } from "lucide-react";

import { Portfolio } from "@/components/portfolio/Portfolio";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";

export const metadata = {
  title: "portfolio",
  description: "🆗",
};

export default function PortfolioPage() {
  return (
    <WindowWrapper
      icon={<Briefcase />}
      title="My Work"
      menu={menuItems.default}
      bottomBar
    >
      <Portfolio />
    </WindowWrapper>
  );
}
