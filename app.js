import express from 'express'
import userRouter from './modules/users/users.routes.js'
import postRouter from './modules/posts/posts.routes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3006
app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
app.use('/posts', postRouter)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))