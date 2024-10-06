import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/companylogo-removebg-preview.png";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      {/* Ribbon at the top */}
      <div className="sticky top-0 z-20">
        <div className="flex justify-center items-center py-4 bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white text-lg font-semibold gap-3 shadow-lg">
          <p className="text-white/90 hidden md:block animate-pulse">
            Unlock AI Superpowers:{" "}
            <span className="font-extrabold text-yellow-300">Lifetime Access</span>{" "}
            at <span className="text-yellow-300">50% Off!</span>
          </p>
          <div className="inline-flex gap-1 items-center animate-bounce">
            <p className="font-semibold">Exclusive Launch Deal</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </div>
        </div>
      </div>

      {/* Header fixed at the bottom with a blurred background */}
      <header className="fixed bottom-0 left-0 w-full z-20 backdrop-blur-md bg-white/70">
        <div className="py-5">
          <div className="container">
            <div className="flex items-center justify-between">
              <Image src={Logo} alt="Saas logo" height={120} width={120} />
              <nav className="flex gap-6 text-black/60 items-center w-full justify-end">
                {/* Button always visible at the right end */}
                <button className="bg-[#0DB97F] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
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
