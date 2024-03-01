'use client'
import { api } from "../../../convex/_generated/api";
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
    return (
    <div>
       {thumbnails?.map((thumbnail:any) =>{
        return(
      <Card key={thumbnail._id}>
        <CardHeader>
          <CardTitle>{thumbnail.title}</CardTitle>

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
