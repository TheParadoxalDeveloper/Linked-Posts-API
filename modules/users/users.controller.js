import { dbConnection } from '../../database/dbConnection.js'
import bcrypt from 'bcrypt'
const connection = dbConnection()


const signup = (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 8)
    connection.query('insert into users set ?', req.body)
    res.status(201).json({ message: "successfully added" })

}

const signin = (req, res) => {


    connection.execute(`select id,password,email from users where email='${req.body.email}'`, (err, data) => {
        if (data.length != 0) {
            let match = bcrypt.compareSync(req.body.password, data[0].password)
            if (match) {
                res.json({ message: "login...token", userID: data[0].id })
            } else {
                res.status(401).json({ message: "incorrect password" })

            }
        } else {
            res.json({ message: "account not found" })
        }

    })

}

export {
    signup,
    signin
}  