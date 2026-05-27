"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";

// —— site easter egg (About): hold W+A+S+D together ——
const EGG_KEYS = new Set(["w", "a", "s", "d"]);
const RIDDLE =
  "I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I?";
const DEV_MESSAGE =
  "You found the hidden terminal. Thanks for poking around — Econography is built by Nomologic Labs.";
const SOCIAL = [
  { label: "GitHub", href: "https://github.com/nomologic-labs" },
  { label: "YouTube", href: "https://www.youtube.com/@nomologic_labs" },
  { label: "Instagram", href: "https://www.instagram.com/nomologic_labs/" },
] as const;

function isCorrectAnswer(raw: string): boolean {
  const a = raw.trim().toLowerCase();
  return a === "keyboard" || a === "a keyboard";
}

function AboutEasterEggTerminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const heldKeysRef = useRef<Set<string>>(new Set());
  const eggArmedRef = useRef(true);

  const close = useCallback(() => {
    setOpen(false);
    setLines([]);
    setSolved(false);
  }, []);

  const openTerminal = useCallback(() => {
    setOpen(true);
    setSolved(false);
    setLines([RIDDLE, ""]);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (EGG_KEYS.has(key)) {
        heldKeysRef.current.add(key);
        if (heldKeysRef.current.size === EGG_KEYS.size && eggArmedRef.current) {
          eggArmedRef.current = false;
          e.preventDefault();
          if (open) close();
          else openTerminal();
        }
      }
      if (open && e.key === "Escape") close();
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (EGG_KEYS.has(key)) {
        heldKeysRef.current.delete(key);
        if (heldKeysRef.current.size < EGG_KEYS.size) eggArmedRef.current = true;
      }
    };

    const onBlur = () => {
      heldKeysRef.current.clear();
      eggArmedRef.current = true;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, [open, close, openTerminal]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, solved]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = new FormData(e.currentTarget).get("answer");
    const value = typeof raw === "string" ? raw : "";
    const normalized = value.trim().toLowerCase();

    if (normalized === "fuck you") {
      setLines((prev) => [...prev, value, "fuck you too", ""]);
      e.currentTarget.reset();
      return;
    }

    if (isCorrectAnswer(value)) {
      setSolved(true);
      setLines([DEV_MESSAGE, ""]);
      return;
    }

    close();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-label="Developer terminal"
    >
      <div className="flex max-h-[min(80vh,28rem)] w-full max-w-lg flex-col rounded border border-zinc-700 bg-zinc-950 p-3 font-mono text-sm text-green-400 shadow-lg">
        <pre className="flex-1 overflow-y-auto whitespace-pre-wrap break-words">
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {"\n"}
            </span>
          ))}
          {solved
            ? SOCIAL.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-green-300 underline"
                >
                  {s.label}
                </a>
              ))
            : null}
        </pre>
        {!solved ? (
          <form onSubmit={handleSubmit} className="mt-2 flex gap-2 border-t border-zinc-800 pt-2">
            <span className="shrink-0 text-green-400">&gt;</span>
            <input
              ref={inputRef}
              name="answer"
              type="text"
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent text-green-400 outline-none placeholder:text-zinc-600"
              placeholder="your answer"
            />
          </form>
        ) : (
          <button
            type="button"
            onClick={close}
            className="mt-2 border-t border-zinc-800 pt-2 text-left text-zinc-500 hover:text-zinc-300"
          >
            [close]
          </button>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <InternalPageChrome breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}>
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 flex justify-center sm:justify-start">
          <Image
            src="/logo/light/with-typography.jpg"
            alt="Econography"
            width={320}
            height={120}
            className="h-auto w-full max-w-xs object-contain dark:hidden sm:max-w-sm"
            priority
          />
          <Image
            src="/logo/dark/with-typography.jpg"
            alt="Econography"
            width={320}
            height={120}
            className="hidden h-auto w-full max-w-xs object-contain dark:block sm:max-w-sm"
            priority
          />
        </div>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-950 dark:text-editorial-ink">
          About Econography
        </h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-zinc-600 dark:text-editorial-muted">
          Econography publishes careful, editorial-style analysis across economics and finance. Our reporting is built
          around clarity, evidence, and a calm, premium reading experience—on any device, in light or dark mode.
        </p>
        <p className="mt-4 font-sans leading-relaxed text-zinc-600 dark:text-editorial-muted">
          Articles are authored as Markdown in versioned content folders, so updates stay structured, reviewable, and
          easy to extend.
        </p>
      </article>
      <AboutEasterEggTerminal />
    </InternalPageChrome>
  );
}
