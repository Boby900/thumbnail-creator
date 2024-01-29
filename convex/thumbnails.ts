import { mutation, query } from "./_generated/server"
import { v } from "convex/values"
export const createThumbnail = mutation({
        args: {
            title: v.string()
        },
        handler: async (ctx, args) =>{
            const user = await ctx.auth.getUserIdentity();

            if(!user){
                return []
            }
            
            
            await ctx.db.insert("thumbnails",{
                title: args.title,
                userId: user.subject
            })
        }
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