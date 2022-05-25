import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../middleware/database_test';


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method == "GET"){
      let { db } = await connectToDatabase();
  
      const planets = await db.collection("planets").find().toArray();
    
      res.status(200).json({ planets });
    } 
 }

