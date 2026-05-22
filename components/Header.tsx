import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";
import { HeaderNav } from "./HeaderNav";
import { HeaderSearch } from "./HeaderSearch";

export function Header() {
  return (
    <header className="bg-white dark:bg-[#181B22]">
      <div className="mx-auto max-w-6xl px-4 py-1 sm:px-6 sm:py-1.5 lg:px-8">
        <div className="flex flex-wrap items-center gap-y-2 md:flex-nowrap md:gap-6">
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>
          <div className="order-3 w-full min-w-0 flex-1 md:order-none md:max-w-xl md:px-2 lg:mx-auto lg:max-w-2xl">
            <HeaderSearch />
          </div>
          <div className="ml-auto flex shrink-0 items-center md:ml-0">
            <SocialIcons />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80 dark:border-slate-800/70">
        <div className="mx-auto max-w-6xl px-4 py-3.5 sm:px-6 lg:px-8 lg:py-4">
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
