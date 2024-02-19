"use client"
import { api } from "../../convex/_generated/api";
import { SignInButton, SignOutButton, auth, useSession } from "@clerk/nextjs";
import { createThumbnail } from "../../convex/thumbnails";
import { useMutation, useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";
  

export default function Home() {
  const { isSignedIn } = useSession();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const createThumbnail = useMutation(api.thumbnails.createThumbnail)
  const thumbnails = useQuery(api.thumbnails.getThumbnail)
  return (
    <main className="">
    {isAuthenticated && (
      <form action="" onSubmit={async (e) =>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        console.log(formData)
        const title = formData.get("title") as string;
      
        await createThumbnail({
          title
        })
        form.reset();
      }}>
        <label>Title</label>
        <input type="text" name="title" className="text-black" />
        <button>Create</button>
      </form>
    )}
    {thumbnails?.map((thumbnail) =>{
      return <div key={thumbnail._id}>{thumbnail.title}</div>
    })}
    </main>

  );
}
