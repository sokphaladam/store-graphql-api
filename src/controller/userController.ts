import database from '../config/database';
import uuid from 'uuid/v5';

export const userCreate = (args: any) => {
    return database
        .query(`
            insert into users(first_name, last_name, email, password, token)
            values('${args.data.first_name}', '${args.data.last_name}', '${args.data.email}', '${args.data.password}', '${uuid(args.data.email, uuid.URL)}')
        `)
        .then(() => true )
        .catch(() => false)
}

export const userUpdate = (args: any) => {

}

export const me = (args: any, req: any) => {
    if(req.query.token != undefined){
        return database
            .query(`select first_name, last_name, email from users where token='${req.query.token}'`)
            .then(res => res.rows[0])
            .catch(err => err)
    }
    else {
        return false
    }
}