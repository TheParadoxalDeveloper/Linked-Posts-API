import { dbConnection } from "../../database/dbConnection.js"

const connection = dbConnection()

export const addpost = (req, res) => {
    connection.query('insert into posts set?', req.body)
    res.status(201).json({ message: "successfully added post" })

}

export const getAllposts = (req, res) => {
    connection.execute('select users.id,users.name,posts.id as postId, posts.title,posts.description from users join posts on users.id=posts.user_id', (err, data) => {
        res.status(200).json({ allposts: data })
    })

}

export const getSinglepost = (req, res) => {
    connection.execute(`select users.id,users.name,posts.id as postId, posts.title,posts.description from users join posts on users.id=posts.user_id where posts.id=${req.params.id}`, (err, data) => {
        res.status(200).json({ post: data })
    })

}

export const getUserPosts = (req, res) => {
    connection.execute(`select users.id,users.name,posts.id as postId, posts.title,posts.description from users join posts on users.id=posts.user_id where users.id=${req.params.id}`, (err, data) => {
        res.status(200).json({ userpost: data })
    })

}

export const UpdatePosts = (req, res) => {
    connection.query(`update posts set ? where posts.id=${req.params.id}`, req.body)
    res.status(201).json({ message: "successfully updated post" })
    
}

export const deletePosts = (req, res) => {
    connection.query(`delete from posts where posts.id=${req.params.id}`)
    res.status(201).json({ message: "successfully deleted post" })
    
}

