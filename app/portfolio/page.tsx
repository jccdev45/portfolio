import { Briefcase } from "lucide-react";

import WindowWrapper from "@/components/window/window-wrapper";
import Portfolio from "@/components/portfolio/Portfolio";

const BCase = <Briefcase />;

const PortfolioPage = () => {
  return (
    <WindowWrapper icon={BCase} title="My Work">
      <Portfolio />
    </WindowWrapper>
  );
};

export default PortfolioPage;
