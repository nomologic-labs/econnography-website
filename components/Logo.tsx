import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-0.5 rounded-md outline-none ring-brandPurple/0 transition hover:ring-2 focus-visible:ring-2 focus-visible:ring-brandPurple/40 dark:focus-visible:ring-brandPurpleLight/50"
    >
      <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/logo/light/standard.jpg"
          alt="Econography"
          fill
          sizes="48px"
          className="scale-[1.32] object-cover object-center dark:hidden"
          priority
        />
        <Image
          src="/logo/dark/standard.jpg"
          alt="Econography"
          fill
          sizes="48px"
          className="hidden scale-[1.32] object-cover object-center dark:block"
          priority
        />
      </span>
      <span className="font-serif text-2xl font-semibold leading-none tracking-tight text-brandPurple transition group-hover:text-brandPurple dark:text-brandPurpleLight dark:group-hover:text-brandPurpleLight">
        Econography
      </span>
    </Link>
  );
}
