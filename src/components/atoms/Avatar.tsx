import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { ComponentProps } from "react";
import {
    AvatarFallback,
    AvatarImage,
    Avatar as DefaultAvatar,
} from "../ui/avatar";

const avatarVariants = cva("block rounded-full overflow-hidden", {
  variants: {
    size: {
      sm: "size-7",
      md: "size-8",
      lg: "size-9",
      xl: "size-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface AvatarProps
  extends VariantProps<typeof avatarVariants>,
    Pick<ComponentProps<typeof AvatarImage>, "src" | "alt"> {
  isOnline: boolean;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ size, isOnline, src, alt, onClick }) => {
  return (
    <div className="relative">
      <DefaultAvatar className={cn(avatarVariants({ size }))} onClick={onClick}>
        <AvatarImage
          className="aspect-square size-full object-cover"
          src={src}
          alt={alt}
          loading="lazy"
        />
        <AvatarFallback>
          <Image
            src="https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg"
            alt="Cat Pet"
            width={40}
            height={40}
            loading="lazy"
          />
        </AvatarFallback>
      </DefaultAvatar>

      {isOnline && (
        <span
          className={cn(
            "absolute bottom-0 border border-white left-6 w-2 h-2 bg-amber-500 rounded-full inline-block",
            size === "sm" && "left-5",
            size === "lg" && "left-7",
            size === "xl" && "left-7 w-2.5 h-2.5"
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
