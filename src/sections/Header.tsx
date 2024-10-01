import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <>
      {/* Ribbon at the top */}
      <div className="sticky top-0 z-20 backdrop-blur-sm">
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block">
          Unlock AI Superpowers: Lifetime Access at 50% Off!
          </p>
          <div className="inline-flex gap-1 items-center">
            <p>Exclusive Launch Deal</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </div>
        </div>
      </div>

      {/* Header fixed at the bottom with a blurred background */}
      <header className="fixed bottom-0 left-0 w-full z-20 backdrop-blur-md bg-white/70">
        <div className="py-5">
          <div className="container">
            <div className="flex items-center justify-between">
              <Image src={Logo} alt="Saas logo" height={40} width={40} />
              <MenuIcon className="h-5 w-5 md:hidden" />
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                  Get for free
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
