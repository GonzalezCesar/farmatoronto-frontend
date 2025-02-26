import Image from "next/image"
import LogoHeader from "@/Image/LogoHeader.png"
import Link from "next/link"

export default function Header() {
    return (
      <header className="w-full" style={{ backgroundColor: "#005452" }}>
        <div className="container mx-auto px-2 py-2">
          <div className="flex items-center gap-8">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={LogoHeader} 
                alt="FarmaToronto Logo"
                width={50}
                height={50}
                className="h-auto w-auto rounded-full"
                priority
              />
            </Link>
            <span className="text-3xl font-bold text-white font-bebas-neue">FARMATORONTO</span>
          </div>
        </div>
      </header>
    )
  }