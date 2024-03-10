"use client"
import { api } from "../../convex/_generated/api";
import { SignInButton, SignOutButton, auth, useSession } from "@clerk/nextjs";
import { createThumbnail } from "../../convex/thumbnails";
import { useMutation, useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import i from '@/app/favicon.jpeg'

export default function Home() {
  return (
    <main className="">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
<<<<<<< HEAD
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              The easiest way to get feedback on your thumbnails
            </h1>
            <p className="max-w-2xl ml-0 font-bold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600 ">
=======
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              The easiest way to get feedback on your thumbnails
            </h1>
            <p className="max-w-2xl font-bold text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
>>>>>>> 01566af19f054daa48b6227b415407cd3954440d
              Upload your two thumbnails and send links to your friends to help
              you hone in your best design skills.
            </p>
            <Button asChild>
              <Link href="/create" className="text-cyan-600 ">Get Started</Link>
            </Button>
          </div>
          <div className="col-span-5 ml-10">
            <Image
              priority
              src={i}
              alt="mockup"
              width="300"
              className="sm:max-w-sm lg:max-w-none p-2 mt-2"
              height="300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

