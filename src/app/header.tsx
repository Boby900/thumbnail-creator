"use client";

import { SignInButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";
import Link from "next/link";
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
    <div className="border-b-2 border-slate-300 ">
      <div className="h-16  container  flex justify-between items-center ">
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
          <Link href="/" className="link hidden  sm:block">
            ThumbnailCreator
          </Link>
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
        <div className="flex items-center gap-2">
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
