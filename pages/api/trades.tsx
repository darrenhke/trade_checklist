import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../middleware/database';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {

    switch (req.method){
        case 'GET':{
            try{
                let { db } = await connectToDatabase();
                const trades = await db.collection("checklist").find().sort({dateClosed: 1}).toArray();
                console.log("Info retrieved")
                return res.status(200).json({ trades });

            }catch(err){
                res.status(500).json(err);
            }  
        }
    }
} 