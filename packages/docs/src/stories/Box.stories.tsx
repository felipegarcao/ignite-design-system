import { Box, BoxProps } from "@upp-presentation/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    )
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {

};
