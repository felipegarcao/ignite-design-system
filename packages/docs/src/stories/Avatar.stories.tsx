import { Avatar, AvatarProps } from "@upp-presentation/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/felipegarcao_",
    alt: 'Luis Felipe'
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const CustomTag: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};
