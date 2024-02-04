"use client";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createThumbnail } from "../../../convex/thumbnails";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
const CreatePage = () => {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveStorageId = useMutation(api.thumbnails.createThumbnail);
  const [imageA, setImageA] = useState("");
  const [imageB, setImageB] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast()
  const router = useRouter()
  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold mb-8">Create Your Own Thumbnail</h1>
      <p className="text-lg max-w-md mb-8">
        Create your test so that other people can vote on their favorite
        thumbnail and help you redesign or pick the best options.
      </p>
      <form
        
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const title = formData.get("title") as string;
        
        if(!title || !imageA || imageB){
          setError("please fill all of the fields in the page")
          toast({
            variant: "destructive",
            title: "Form Errors",
            description: "please fill all of the fields in the page"
          });
          return
        }

      const thumbnailId = await createThumbnail({
            aImage: imageA,
            bImage: imageB,
            title,
          });
          router.push(`/thumbnails/${thumbnailId}`)
        }}
      >
        <div className="flex  flex-col gap-4 mb-4">
        <Label htmlFor="title">Your Test Title</Label>
        <Input name="title" className="w-full" type="text" id="title" placeholder="Label your test" />
        </div>
      <div className="grid grid-cols-2 gap-8 mb-5">

     
        <div>
          <h2 className="text-2xl m-1 font-bold">Test Image A</h2>
          {imageA && (
            <Image
              width="200"
              height="200"
              alt="image test b"
              src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${imageA}`}
            />
          )}
          <UploadButton
            uploadUrl={generateUploadUrl}
            fileTypes={[".pdf", "image/*"]}
            onUploadComplete={async (uploaded: UploadFileResponse[]) => {
              setImageA((uploaded[0].response as any).storageId);
            }}
            onUploadError={(error: unknown) => {
              // Do something with the error.
              alert(`ERROR! ${error}`);
            }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold m-1">Test Image B</h2>
          {imageB && (
            <Image
              width="200"
              height="200"
              alt="image test b"
              src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${imageB}`}
            />
          )}
          <UploadButton
            uploadUrl={generateUploadUrl}
            fileTypes={[".pdf", "image/*"]}
            onUploadComplete={async (uploaded: UploadFileResponse[]) => {
              setImageB((uploaded[0].response as any).storageId);
            }}
            onUploadError={(error: unknown) => {
              // Do something with the error.
              alert(`ERROR! ${error}`);
            }}
          />
        </div>
        </div>
        <Button>Create Thumbnail For Test</Button>
      </form>
    </div>
  );
};

export default CreatePage;
