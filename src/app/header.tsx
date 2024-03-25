"use client";

import { SignInButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";
import Link from "next/link";
import Bob from "@/app/Bob.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const redirectUrl = useAuth();
  return (
    <div className="border-b-2 border-slate-300 font-sans ">
      <div className="h-16  container font-bold  flex justify-between items-center ">
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Main Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={"/"}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/stripe"}>Pricing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/about"}>About</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <div className="flex">
          <Image src={Bob} height={100} width={40} alt="header" />
            <Link href="/" className="link hidden ml-1 mt-1  sm:block">
              ThumbnailCreator
            </Link>
           
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between  w-[10%]">
          <Link href="/dashboard" className="link hidden sm:block">
            Dashboard
          </Link>
          <Link href="/create" className="link hidden sm:block">
            Create
          </Link>

          <Link href="/stripe" className="link hidden sm:block">
            Pricing
          </Link>
        </div>
        <div className="flex text-slate-300 hover:text-slate-400 items-center gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl={"/"} />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
