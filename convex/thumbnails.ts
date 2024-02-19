import { mutation, query } from "./_generated/server"
import { v } from "convex/values"
export const createThumbnail = mutation({
        args: {
            title: v.string(),
            aImage: v.string(),
            bImage: v.string(),
            aVotes: v.number(),
            bVotes: v.number()
        },
        handler: async (ctx, args) =>{
            const user = await ctx.auth.getUserIdentity();
            console.log(user)

            if(!user){
                throw new Error("you must be logged in!")
            }
            
            
        const id =  await ctx.db.insert("thumbnails",{
                title: args.title,
                userId: user._id,
                aImage: args.aImage,
                bImage: args.bImage,
                aVotes: args.aVotes,
                bVotes: args.bVotes,
                voteIds: []
            })
        }
})
export const getThumbnailById = query({
            args: { thumbnailId: v.id("thumbnails") },
    
            handler: async(ctx,args) =>{

           
            return await ctx.db.get(args.thumbnailId) }
       
})


export const getThumbnail = query({
        args:{

        },
        handler: async (ctx, args) =>{
            const user = await ctx.auth.getUserIdentity();

            if(!user){
                return []
            }
            
            
            return await ctx.db.query("thumbnails").filter(q =>
                q.eq(q.field("userId"),user.subject))
                .collect();
        }
})

export const getThumbnailsForUser = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
      return await ctx.db
        .query("thumbnails")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .collect();
    },
  });


  export const voteOnThumbnail = mutation({
    args: {
            thumnailId: v.id("thumbnails"),
            imageId: v.string()
    },
    handler: async (ctx, args) =>{
        const userId = (await ctx.auth.getUserIdentity())?.subject;
        if(!userId){
            throw new Error("you must be logged in to vote")
        }
        const thumbnail = await ctx.db.get(args.thumnailId);
        if(!thumbnail){
            throw new Error("Invalid thumbnail")
        }
        if(thumbnail.voteIds.includes(userId)){
            throw new Error("you've already voted")
        }
        if(thumbnail.aImage === args.imageId){
            thumbnail.aVotes++
            await ctx.db.patch(thumbnail._id,{
                aVotes: thumbnail.aVotes,
                voteIds: [...thumbnail.voteIds, userId]
            })
        }
        else{
            thumbnail.bVotes++
            await ctx.db.patch(thumbnail._id,{
                bVotes: thumbnail.bVotes,
                voteIds: [...thumbnail.voteIds, userId]
            })
        }
    }
})

