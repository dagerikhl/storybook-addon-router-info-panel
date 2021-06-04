import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { themes, convert } from "@storybook/theming";
import { TabsState, Placeholder } from "@storybook/components";

export const PanelContent = () => {
  const location = useLocation();

  console.log(location);

  return (
    <TabsState
      initial="overview"
      backgroundColor={convert(themes.normal).background.hoverable}
    >
      <div
        id="overview"
        title="Overview"
        color={convert(themes.normal).color.positive}
      >
        <Placeholder>
          <Fragment>
            Shows information about the current state of the in-memory router.
          </Fragment>
          <Fragment>{JSON.stringify(location, undefined, 2)}</Fragment>
        </Placeholder>
      </div>
    </TabsState>
  );
};
