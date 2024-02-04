"use client";

import { SignInButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import  Link  from "next/link";

const Header = () => {
  return (
    <div className="border-b-2">
      <div className="h-16  container flex justify-between items-center">
        <div>ThumbnailCreator</div>
        <div>
          <SignedIn>
            <Link href="/create">Create Test</Link>
          </SignedIn>
          <SignedOut>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
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
