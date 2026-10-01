import Image, { StaticImageData } from "next/image";
import React from "react";

export type AvatarGroupProps = {
  avatars: (string | StaticImageData)[];
  countText: string;
  badgeBg?: string | StaticImageData;
  badgeClassName?: string;
  avatarClassName?: string;
  containerClassName?: string;
};

export function AvatarGroup({
  avatars,
  countText,
  badgeBg,
  badgeClassName = "",
  avatarClassName = "",
  containerClassName = "",
}: AvatarGroupProps) {
  return (
    <div className={`flex items-center ${containerClassName}`}>
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className={`relative rounded-full overflow-hidden shrink-0 ${avatarClassName}`}
        >
          <Image
            src={avatar}
            fill
            className="object-cover"
            alt={`Avatar ${i + 1}`}
          />
        </div>
      ))}
      <div
        className={`relative rounded-full shrink-0 flex items-center justify-center overflow-hidden ${avatarClassName} ${badgeClassName}`}
      >
        {badgeBg && (
          <Image
            src={badgeBg}
            fill
            className="object-cover -z-10 absolute inset-0"
            alt="Badge Background"
          />
        )}
        <span className="relative z-10">{countText}</span>
      </div>
    </div>
  );
}
