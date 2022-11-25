import { Heading, HeadingProps } from "@upp-presentation/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children:
      "Lorem ipsum.",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, nas podemos alterar isso com a propriedade `as`'
      }
    }
  }
};
