import { type Meta, type StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import Avatar from "./Avatar";

const sizeOptions: Array<"sm" | "md" | "lg" | "xl"> = ["sm", "md", "lg", "xl"];

const meta = {
  title: "Design Systems/Atoms/Avatar",
  component: Avatar,
  args: {
    size: "md",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: sizeOptions,
    },
    isOnline: {
        control: "boolean"
    },
    src: {
        control: "text"
    },
    alt: {
        control: "text"
    }
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story= StoryObj<typeof Avatar>;

export const DefaultAvatar = {} satisfies Story;

export const SmallAvatar = {
    args: {
        size: "sm"
    }
} satisfies Story;

export const MediumAvatar = {
    args: {
        size: "md"
    }
} satisfies Story;

export const LargeAvatar = {
    args: {
        size: "lg"
    }
} satisfies Story;

export const ExtraLargeAvatar = {
    args: {
        size: "xl"
    }
} satisfies Story;

export const OnlineUserAvatar = {
    args: {
        size: "md",
        isOnline: true
    }
} satisfies Story;

export const CustomImageAvatar = {
  args: {
    src: "https://cdn.pixabay.com/photo/2023/12/06/14/39/snow-8433815_1280.jpg",
    alt: "Snowy landscape"
  },
} satisfies Story;

export const ClickableAvatar = {
    args: {
        onClick: fn()
    }
} satisfies Story;