import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { user_name, user_id, month_selected, day_selected, branch, shift, comment_type, comment, related_section, receipt_number, description } = req.body;
        const date_of_insert = new Date();
        const time_of_insert = new Date();
        const ordinal_date = new Date(); // calculate ordinal_date accordingly

        const newComment = await prisma.comment.create({
            data: {
                date_of_insert,
                time_of_insert,
                user_name,
                user_id,
                ordinal_date,
                month_selected,
                day_selected,
                branch,
                shift,
                comment_type,
                comment,
                related_section,
                receipt_number,
                description,
            },
        });
        res.status(200).json(newComment);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
