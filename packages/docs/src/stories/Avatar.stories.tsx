import { Avatar, AvatarProps } from "@upp-presentation/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/diego3g.png',
    alt: 'Diego Fernandes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
 