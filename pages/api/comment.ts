// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import clientPromise from "../../lib/mongodb";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const client = await clientPromise;
		const db = client.db("test");
		const session = await unstable_getServerSession(req, res, authOptions);
		const user = session?.user;
		const Comment = db.collection("comments");
		if (req.method === "GET") {
			const comments = await Comment.find({}).sort({ _id: -1 }).toArray();
			res.status(200).json({ success: true, comments, user });
		} else if (req.method === "POST" && user) {
			await Comment.insertOne({
				user,
				comment: req.body.comment,
				createdAt: Date.now(),
			});
			res.status(200).json({
				user,
				comment: req.body.comment,
				createdAt: Date.now(),
			});
		} else if (req.method === "DELETE" && user) {
			const comment = await Comment.findOneAndDelete({ _id: req.body.commentId });
			res.status(200).json({ success: true, commentId: comment._id });
		}
	} catch (error) {
		console.log(error);
	}
}
