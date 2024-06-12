import { Router } from "express"
import { UpdatePosts, addpost, deletePosts, getAllposts, getSinglepost, getUserPosts } from "./posts.controller.js"


const postRouter = Router()

postRouter.get('/', getAllposts)
postRouter.get('/:id', getSinglepost)
postRouter.get('/user/:id', getUserPosts)
postRouter.post('/', addpost)
postRouter.put('/:id', UpdatePosts)
postRouter.delete('/:id', deletePosts)


export default postRouter
