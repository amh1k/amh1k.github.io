"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const subscribe = () => () => {};

export function ThemeToggle() {
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window !== "undefined" &&
    window.localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  const Icon = hydrated && theme === "dark" ? Sun : Moon;

  return (
    <button type="button" aria-label="Toggle theme" onClick={toggleTheme}>
      <Icon size={24} />
    </button>
  );
}
