import React from "react";
import { AddonPanel } from "@storybook/components";
import { PanelContent } from "./components/PanelContent";

export const Panel = (props) => (
  <AddonPanel {...props}>
    <PanelContent />
  </AddonPanel>
);
