import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../middleware/database';


export default async function handler(req: NextApiRequest,res: NextApiResponse) {

    switch (req.method){
        case 'POST':{
            try{
                let { db } = await connectToDatabase();
                const tradeObj =   
            {
                "trend":
                {          
                    "fourHourTrend":req.body.trend.fourHourTrend,
                    "oneDayTrend":req.body.trend.oneDayTrend
                },
                "fibRetracement":req.body.fibRetracement,
                "restSwingPoint":req.body.restSwingPoint,
                "volatility":{
                    "minfifteen":req.body.volatility.minfifteen,
                    "hourone":req.body.volatility.hourone,
                    "hourfour":req.body.volatility.hourfour
                },
                "close":req.body.close,
                "correlation":req.body.correlation,
                "volume":req.body.volume,
                "dateExecuted":  Date.now(),
                "status": "ONGOING", //Should have only states ONGOING/COMPLETED. "ONGOING" trades should be marked orange and green for "COMPLETED"
                

            }
                const trade = await db.collection('checklist').insertOne(tradeObj)
                return res.status(201).json({trade});
                // console.log(trade);
                
            }catch(err){
                res.status(501).json(err);
            }
        }
        case 'GET':{
            try{
                let { db } = await connectToDatabase();
                const trades = await db.collection("checklist").find().toArray();
                console.log("Info retrieved")
                return res.status(200).json({ trades });

            }catch(err){
                res.status(500).json(err);
            }  
        }

        case 'PATCH':{
            try{
                let { db } = await connectToDatabase();
                const trade = await db.collection("checklist").updateOne(
                    { id: req.body._id},
                    {$set:{"status": req.body.status}},
                    // {upsert:true}
                    )
                console.log(`Object ${req.body._id} status has been updated to ${req.body.status}`)
                return res.status(200).json({ trade });
            }
            catch(err){
               return res.status(500).json(err);
            }
        }

    }
}   
