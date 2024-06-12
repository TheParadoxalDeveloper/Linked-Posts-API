import mysql, { createConnection } from "mysql2"


export const dbConnection = () => {
    const conn = createConnection('mysql://uwcgdurkdrnr9r0v:XKY8NgEDiT2qQI1bnhK9@bmxipeiar00k63vhygne-mysql.services.clever-cloud.com:3306/bmxipeiar00k63vhygne')

    conn.connect((err) => {
        if (err) return console.log(err);
        console.log('DATABASE CONNECTED!')
    })

    return conn
}