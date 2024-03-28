'use client'
import { api } from "../../../convex/_generated/api";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "convex/react";
export default function DashboardPage() {
    const thumbnails = useQuery(api.thumbnails.getThumbnailsForUser)
    console.log(thumbnails)
    return (
    <div>
       {thumbnails?.map((thumbnail:any) =>{
        return(
      <Card key={thumbnail._id}>
        <CardHeader>
          <CardTitle>{thumbnail.title}</CardTitle>
          <Image width={200} height={200} alt="some Image"  src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${thumbnail.imageA}`} />

        </CardHeader>
        <CardContent>
          <p>{thumbnail.bVotes}</p>
        </CardContent>
        <CardFooter>
          <p>{thumbnail.aVotes}</p>
        </CardFooter>
      </Card>)})
       }
    </div>
  );
}
