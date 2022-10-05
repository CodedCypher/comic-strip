// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import clientPromise from "../../lib/mongodb";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const client = await clientPromise;
	const db = client.db("test");
	const session = await unstable_getServerSession(req, res, authOptions);

	const Comment = db.collection("comments")
	if (req.method === "GET") {
		const comments = await Comment.find({}).toArray();
		res.status(200).json({ success: true, comments });
	} else if (req.method === "POST") {
		const comment = await Comment.create({ session.user, comment: req.body.comment });
		res.status(200).json({ success: true, comment });
	} else if (req.method === "DELETE") {
		const comment = await Comment.findOneAndDelete({_id: req.body.commentId})
		res.status(200).json({success: true, commentId: comment._id})
	}
}
