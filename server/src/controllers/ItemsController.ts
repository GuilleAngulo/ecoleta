import { Request, Response } from 'express';
import knex from '../database/connection';

import baseURL from '../config/global';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return { 
                id: item.id,
                title: item.title,
                image_url: `${baseURL}/uploads/${item.image}`,
            };
        });
        console.log(serializedItems);
        return res.json(serializedItems);
    }
}

export default ItemsController;

