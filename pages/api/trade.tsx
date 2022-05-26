import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../middleware/database';
// import Trade from '../../models/Trade'


export default async function handler(req: NextApiRequest,res: NextApiResponse) {

    switch (req.method){
        case "POST":{
            try{
                let { db } = await connectToDatabase();
                const tradeObj =   await  {"trend":
                {  
                    "fourHourTrend":req.body.fourHourTrend,
                    "oneDayTrend":req.body.oneDayTrend
                }}
                const trade = await db.collection('checklist').insertOne(tradeObj)
                console.log(trade);
                res.status(201).json(trade);
            }catch(err){
                res.status(500).json(err);
            }
        }
        case "GET":{
            try{
                let { db } = await connectToDatabase();
                const trades = await db.collection("checklist").find().toArray();
                res.status(200).json({ trades });
            }catch(err){
                res.status(500).json(err);
            }  
        }

    }
}   
