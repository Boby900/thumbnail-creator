"use client";

import { SignInButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import  Link  from "next/link";

const Header = () => {
  return (
    <div className="border-b-2">
      <div className="h-16  container flex justify-between items-center">
        <div><Link href="/" className="link">ThumbnailCreator</Link></div>
        <div className="flex gap-6 items-center justify-between  w-[20%]">
          <SignedIn>
            <Link href="/dashboard" className="link">Dashboard</Link>
            <Link href="/create" className="link">Create</Link>
          </SignedIn>
          <SignedOut>
            <Link href="/pricing" className="link">Pricing</Link>
            <Link href="/about" className="link">About</Link>
          </SignedOut>
        </div>
        <div className="flex items-center gap-2">
        <SignedIn><UserButton /></SignedIn>
        <SignedOut><SignInButton /></SignedOut>
        <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
