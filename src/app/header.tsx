"use client";

import { SignInButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";
import Link from "next/link";
import Image from "next/image";
import Bob from "@/app/Bob.png";
import feedback from "@/app/icons8-popular-48.png";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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

          <HoverCard>
            <HoverCardTrigger asChild>
         
                <Image
                  className="hover:cursor-pointer"
                  src={feedback}
                  height={400}
                  width={320}
                  alt="header"
                />
          
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Feedback</h4>
                  <p className="text-lg">
                    Please provide your valuable feedback.
                  </p>
                  <Button >Submit</Button>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="flex  text-slate-300 hover:text-slate-400 items-center gap-2">
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
