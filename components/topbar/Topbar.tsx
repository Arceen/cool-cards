// export interface SingleIconLinkProps {
//     iconPath: string;
//     text: string;
//     linkLocation: string;
//     iconHeight: number;
//     iconWidth: number;
//     altText: string;
//   }

import SingleIconLink, { SingleIconLinkProps } from "../ui/links/IconLink";

const topbarLinkData: SingleIconLinkProps[] = [
  {
    id: 1,
    text: "FAQ",
    iconPath: "/icons/faq.svg",
    iconHeight: 12,
    iconWidth: 12,
    linkLocation: "/",
    altText: "faq",
  },

  {
    id: 2,
    text: "Send Inquiry",
    iconPath: "/icons/message.svg",
    iconHeight: 16,
    iconWidth: 12,
    linkLocation: "/send-inquiry",
    altText: "send-inquiry",
  },
  {
    id: 3,
    text: "Live Support",
    iconPath: "/icons/chat.svg",
    iconHeight: 14,
    iconWidth: 12,
    linkLocation: "/live-support",
    altText: "live-support",
  },
  {
    id: 4,
    text: "Contact",
    iconPath: "/icons/profile2.svg",
    iconHeight: 15,
    iconWidth: 15,
    linkLocation: "/contact",
    altText: "contact",
  },
];
export default function Topbar() {
  return (
    <div className="sticky container h-12 flex flex-row items-center gap-4 w-full justify-end">
      {topbarLinkData.map((singleLink: SingleIconLinkProps) => (
        <SingleIconLink
          key={singleLink.id}
          id={singleLink.id}
          text={singleLink.text}
          iconPath={singleLink.iconPath}
          iconHeight={singleLink.iconHeight}
          iconWidth={singleLink.iconWidth}
          linkLocation={singleLink.linkLocation}
          altText={singleLink.altText}
        />
      ))}
    </div>
  );
}
