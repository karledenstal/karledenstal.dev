import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-8 left-8 lg:hidden">
      <Menu className="cursor-pointer" onClick={() => setIsOpen((s) => !s)} />
      <div
        className={clsx(
          "fixed top-0 left-0 transition-opacity bg-zinc-950 w-screen h-screen",
          {
            "opacity-100 flex": isOpen,
            "opacity-0 hidden": !isOpen,
          },
        )}
      >
        <div className="flex flex-col w-full">
          <div className="p-6 w-full flex items-center justify-between">
            <a href="/" className="text-amber-400 text-xl">
              karledenstal.dev
            </a>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <ul className="flex flex-col">
            <li className="group border-y border-y-zinc-800">
              <a
                className="p-4 block text-xl font-mono text-center group-hover:bg-zinc-900"
                href="/projects"
              >
                Projects
              </a>
            </li>
            <li className="group border-b border-b-zinc-800">
              <a
                className="p-4 block text-xl font-mono text-center group-hover:bg-zinc-900"
                href="/about"
              >
                About me
              </a>
            </li>
            <li className="group border-b border-b-zinc-800">
              <a
                target="_blank"
                className="p-4 block text-xl font-mono text-center group-hover:bg-zinc-900"
                href="https://github.com/karledenstal?tab=repositories"
              >
                Github
              </a>
            </li>
            <li className="group border-b border-b-zinc-800">
              <a
                target="_blank"
                className="p-4 block text-xl font-mono text-center group-hover:bg-zinc-900"
                href="https://www.linkedin.com/in/karl-edenst%C3%A5l-63ba94180/"
              >
                LinkedIn
              </a>
            </li>
            <li className="group border-b border-b-zinc-800">
              <a
                className="p-4 block text-xl font-mono text-center group-hover:bg-zinc-900"
                href="mailto:jobs@karledenstal.dev"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
