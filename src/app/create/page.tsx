"use client";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createThumbnail } from "../../../convex/thumbnails";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
import { useSession } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";
const defaultErrorState = {
  title: "",
  imageA: "",
  imageB: "",
};

export default function CreatePage() {
  


  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const createThumbnail = useMutation(api.thumbnails.createThumbnail);
  const [imageA, setImageA] = useState("");
  const [imageB, setImageB] = useState("");
  const [errors, setErrors] = useState(defaultErrorState);
  const { toast } = useToast();
  const router = useRouter();

  return (
    <div className="mt-16 ml-4 ">
      <h1 className="text-4xl font-bold mb-6  ">Create a Thumbnail Test</h1>

      <p className="text-xl max-w-md  mb-10 ml-2 ">
        Create your test so that other people can vote on their favorite
        thumbnail and help you redesign or pick the best options.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const title = formData.get("title") as string;
          let newErrors = {
            ...defaultErrorState,
          };

          if (!title) {
            newErrors = {
              ...newErrors,
              title: "please fill in this required field",
            };
          }

          if (!imageA) {
            newErrors = {
              ...newErrors,
              imageA: "please fill in this required field",
            };
          }

          if (!imageB) {
            newErrors = {
              ...newErrors,
              imageB: "please fill in this required field",
            };
          }

          setErrors(newErrors);
          const hasErrors = Object.values(newErrors).some(Boolean);

          if (hasErrors) {
            toast({
              title: "Form Errors",
              description: "Please fill fields on the page",
              variant: "destructive",
            });
            return;
          }

          const thumbnailId = await createThumbnail({
            aImage: imageA,
            bImage: imageB,
            title,
          });

          router.push(`/thumbnails/${thumbnailId}`);
        }}
      >
        <div className="flex flex-col gap-2 mb-16 w-6/12 md:w-6/12 ">
          <Label className="text-lg" htmlFor="title">Your Test Title</Label>
          <Input 
            id="title"
            type="text"
            name="title"
            placeholder="Label your test to make it easier to manage later"
            
          />
          {errors.title && <div className="text-red-500">{errors.title}</div>}
        </div>

        <div className="grid grid-cols-1 gap-12 mb-10">
          <div
          
          >
            <h2 className="text-2xl font-bold mb-6">Test Image A</h2>

            {imageA && (
              <Image 
                width="200"
                height="200"
                alt="image test a"
                src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${imageA}`}
              />
            )}

            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={["image/*"]}
              onUploadComplete={async (uploaded: UploadFileResponse[]) => {
                setImageA((uploaded[0].response as any).storageId);
              }}
              onUploadError={(error: unknown) => {
                alert(`ERROR! ${error}`);
              }}
            />

            {errors.imageA && (
              <div className="text-red-500">{errors.imageA}</div>
            )}
          </div>
          <div className="flex flex-col gap-12 mb-10">
            <div
            
            >
              <h2 className="text-2xl font-bold mb-6">Test Image B</h2>

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
                fileTypes={["image/*"]}
                onUploadComplete={async (uploaded: UploadFileResponse[]) => {
                  setImageB((uploaded[0].response as any).storageId);
                }}
                onUploadError={(error: unknown) => {
                  alert(`ERROR! ${error}`);
                }}
              />

              {errors.imageB && (
                <div className="text-red-500">{errors.imageB}</div>
              )}
            </div>
          </div>
        </div>

        <Button className="font-bold ml-2 mb-20 ">Create Thumbnail Test</Button>
      </form>
    </div>
  );
}


