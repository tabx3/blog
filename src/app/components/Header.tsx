"use client";
import Logo from "./Icons/Logo";
import { MoonIcon, SunIcon } from "./Icons/icons";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full flex items-center justify-between py-4">
      <Logo />
      <button onClick={ToggleTheme}>
        {theme === "light" ? (
          <MoonIcon className="stroke-[#3f3e44]" />
        ) : (
          <SunIcon className="stroke-[#ffffff]" />
        )}
      </button>
    </header>
  );
}
