"use client"
import { useParams } from "next/navigation"
const ThumbnailPage = () => {
    const params = useParams()
    return( <div>{params.thumbnailId}</div>)
  
}

export default ThumbnailPage