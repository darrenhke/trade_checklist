import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../middleware/database_test';
import Trade from '../../models/Trade'


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method == "POST"){
        try{
            const trade = await Trade.create(req.body);
            res.status(201).json(trade);
        }catch(err){
            res.status(500).json(err);
        }

    }
    if(req.method == "GET"){
        try{
            let { db } = await connectToDatabase();
            const planets = await db.collection("checklist").find().toArray();
            res.status(200).json({ planets });
        }catch(err){
            res.status(500).json(err);
        }  
 }
}
