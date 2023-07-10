import { NextApiRequest, NextApiResponse } from 'next'
import connect from "@/utils/connectDB";
import StudentModel from '@/models/student.model';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id || "";

    try {
        console.log("connecting to DB");
        await connect();
        console.log("connected to DB");
        
        const data = await StudentModel.findOne({studentID: id});
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

export default handler;