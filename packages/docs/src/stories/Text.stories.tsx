import { Text, TextProps } from "@upp-presentation/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum doloremque nostrum ipsa praesentium repudiandae fugiat tenetur unde placeat et totam recusandae iusto earum, harum cupiditate nesciunt impedit! Maiores, voluptatum.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
