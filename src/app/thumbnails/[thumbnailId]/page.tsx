"use client";
import _, { divide } from "lodash";
import { api } from "../../../../convex/_generated/api";
import { v } from "convex/values";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Id } from "../../../../convex/_generated/dataModel";
import { getImageUrl } from "@/lib/utils";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { useSession } from "@clerk/nextjs";
const ThumbnailPage = () => {
  const params = useParams<{ thumbnailId: Id<"thumbnails"> }>();
  const thumbnailId = params.thumbnailId;
  const session = useSession();
  const voteOnThumbnail = useMutation(api.thumbnails.voteOnThumbnail);
  const thumbnail = useQuery(api.thumbnails.getThumbnailById, {
    thumbnailId,
  });

  if (!thumbnail || !session.session) {
    return <div>Loading...</div>;
  }
  const hasVoted = thumbnail.voteIds.includes(session.session.id);

  const images = _.shuffle([thumbnail.aImage, thumbnail.bImage]);
  function getVotesFor(imageId: string) {
    if(!thumbnail) return 0;
    return thumbnail?.aImage === imageId ? thumbnail.aVotes : thumbnail?.bVotes;
  }
  const votePercent = (imageId: string) => {
    if (!thumbnail) {
      return 0;
    }
    const totalVotes = thumbnail.aVotes + thumbnail.bVotes;
    if (totalVotes === 0) return 0;
    return Math.round((getVotesFor(imageId) / totalVotes) * 100);
  };
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-2xl m-1 font-bold text-center">Test Image A</h2>
          <Image
            width="400"
            height="400"
            alt="image test b"
            src={getImageUrl(images[0])}
          />
          {hasVoted ? (
            <>
              <Progress value={votePercent(images[0])} className="w-full" />
              <div>{getVotesFor(images[0])}</div>
            </>
          ) : (
            <Button
              onClick={() => {
                voteOnThumbnail({ thumbnailId, imageId: images[0] });
              }}
            >
              Vote A
            </Button>
          )}
        </div>
        <div>
          <h2 className="text-2xl m-1 font-bold text-center">Test Image B</h2>
          <Image
            width="400"
            height="400"
            alt="image test b"
            src={getImageUrl(images[1])}
          />
          {hasVoted ? (
            <>
              <Progress value={votePercent(images[1])} className="w-full" />
              <div>{getVotesFor(images[1])}</div>
            </>
          ) : (
            <Button>Vote B</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailPage;
