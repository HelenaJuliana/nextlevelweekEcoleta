import {Request,Response} from 'express';

import knex from '../database/connection';

class ItemsControllers {

     async index  (requesst:Request,response:Response)  {
        const items = await knex ('items').select('*');
        
        const serializedItems = items.map(item => {
            return{
                id:item.id,
                title:  item.title,
                image_url: `http://10.0.0.6:3333/uploads/${item.image}`
            };
        });
        
        return response.json(serializedItems);
     }

}
 export default  ItemsControllers;