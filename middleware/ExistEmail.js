import { dbConnection } from "../database/dbConnection.js"


const connection = dbConnection()

export const checkEmailExist = (req, res, next) => {
    connection.execute(`select email from users where email='${req.body.email}'`, (err, data) => {
        if (data.length != 0) return res.status(409).json({ message: "email already exists." })
        next()
    })
}