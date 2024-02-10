import LogoImage from "@images/LogoImage.png";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return <Link href="/"  prefetch={false} className="overflow-hidden">
    <div className="flex item-center sm:w-[100px] sm:h-[100px] w-[70px] h-[70px]">
      <AspectRatio 
      ratio={16 / 9} 
      className="">
        <Image
          priority
          src={LogoImage}
          alt="logo"
          className="dark:filter dark:invert"
          ></Image>
      </AspectRatio>
    </div>
  </Link>
}

export default Logo