import { Button, ButtonProps } from "@upp-presentation/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  },
};
