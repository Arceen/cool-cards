import Image from "next/image";
import Link from "next/link";
// import {Raleway} from "next/font/google"

export interface SingleIconLinkProps {
  id: number;
  iconPath: string;
  text: string;
  linkLocation: string;
  iconHeight: number;
  iconWidth: number;
  altText: string;
}
export default function SingleIconLink({
  id,
  iconPath,
  text,
  linkLocation,
  iconHeight,
  iconWidth,
}: SingleIconLinkProps) {
  return (
    <Link key={id} href={linkLocation}>
      <div className="flex items-center gap-1 text-xs hover:border-b border-foreground">
        <div className="">{text}</div>
        <Image src={iconPath} height={iconHeight} width={iconWidth} alt="" />
      </div>
    </Link>
  );
}
