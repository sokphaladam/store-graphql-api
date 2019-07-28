import database from '../config/database';

export const productCreate = (arg: any) => {
    return database
        .query(`
            insert into products(name, description, cost, photo)
            values('${arg.data.name}', '${arg.data.description}', '${arg.data.cost}', '${arg.data.photo}')
        `)
        .then(()=>true)
        .catch(()=>false)
}

export const productList = () => {
    return database
        .query('select *from products')
        .then(res=>res.rows)
        .catch(err=>err)
}

export const product = (arg: any) => {
    return database
        .query(`select *from products where id = '${arg.id}'`)
        .then(res => res.rows[0])
        .catch(err=>err)
}

export const productUpdate = (arg: any) => {
    return database
        .query(`
            update products set name='${arg.data.name}', description='${arg.data.description}', cost='${arg.data.cost}', photo='${arg.data.photo}', updated=now() where id='${arg.data.id}'`)
        .then(()=> true)
        .catch(()=> false)
}