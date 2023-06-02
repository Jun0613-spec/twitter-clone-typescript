import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";
const Header = ({ showBackArrow, label }) => {
    const router = useRouter();
    const handleBack = useCallback(() => {
        router.back();
    }, [router]);
    return (<div className="border-b-[1px] border-neutral-200 dark:border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (<BiArrowBack onClick={handleBack} size={20} className="
              cursor-pointer 
              hover:opacity-70 
              transition
              dark:text-white
              text-black
          "/>)}
        <h1 className="text-black dark:text-neutral-200 text-xl font-semibold">
          {label}
        </h1>
        <ThemeToggle />
      </div>
    </div>);
};
export default Header;
