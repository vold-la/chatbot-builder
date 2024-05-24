"use client";

import Link from "next/link";
import { Button } from "./button";
import { Icon } from "@iconify/react";
import Logo from "@/app/util/icons/logo";

export const Header = () => {

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <div className="flex h-navigation-height mx-5 md:mx-[16rem]">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Chatbot Flow Builder
        </Link>

        <div className="ml-auto flex h-full items-center">
          <Button href="https://github.com/vold-la/chatbot-builder">
            <Icon width={25} className="text-white" icon="mdi:github" />
          </Button>
        </div>
      </div>
    </header>
  );
};
