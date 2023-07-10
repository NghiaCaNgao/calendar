import { NextApiRequest, NextApiResponse } from 'next'
import connect from "@/utils/connectDB";
import StudentModel from '@/models/student.model';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const queryString = " " + (req.query.q || "") + " ";
    const regStr = (" " + queryString + " ").replace(/\s{2,}/g, " ").split(" ").join(".*")
    console.log(regStr);

    try {
        console.log("connecting to DB");
        await connect();
        console.log("connected to DB");

        const data = await StudentModel.find(
            {
                $or: [
                    { studentID: { $regex: regStr } },
                    { nonAccents: { $regex: regStr } }
                ]
            },
            { studentID: 1, studentName: 1 },
            { limit: 5 });

        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

export default handler;