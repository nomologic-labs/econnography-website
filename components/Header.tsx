import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return (
    <header className="border-b-4 border-brandPurple bg-white/90 backdrop-blur dark:bg-zinc-950/90">
      <div className="mx-auto max-w-7xl px-4 pb-5 pt-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Logo />
          <SocialIcons />
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
