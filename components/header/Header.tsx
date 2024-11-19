import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-20 bg-secondary flex items-center justify-center border-b border-black">
      <div className="container flex justify-between items-center gap-[90px]">
        <h1 className="font-semibold text-[40px]">Drukland.de</h1>
        <div className="flex gap-4 text-md w-full">
          <div className="flex items-center gap-1">
            Business
            <Image
              src="/icons/downarrow.svg"
              alt="arrow"
              height={7}
              width={13}
            />
          </div>
          <div className="flex items-center gap-1">
            Products
            <Image
              src="/icons/downarrow.svg"
              alt="arrow"
              height={7}
              width={13}
            />
          </div>
          <div className="flex items-center gap-1">About Us</div>
          <div className="relative flex-1 ">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 p-2 border-[#292929] border rounded-md w-full text-sm focus:outline-none focus:ring-none focus:border-black"
            />
            <div className="absolute left-2 top-[50%] -translate-y-[50%]">
              <Image
                src="/icons/search.svg"
                alt="search"
                height={16}
                width={16}
              />
            </div>
          </div>
          <Image src="/icons/ship.svg" alt="ship" height={19} width={24} />
          <Image
            src="/icons/profile.svg"
            alt="profile"
            height={19}
            width={26}
          />
          <Image src="/icons/basket.svg" alt="basket" height={26} width={26} />
        </div>
      </div>
    </div>
  );
}
