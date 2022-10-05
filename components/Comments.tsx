import React, { useState } from "react";
import Comment from "./Comment";
import { Stack, Textarea, Group, Title, Button, Divider } from "@mantine/core";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Comments = ({ comments }) => {
	const [commentsList, setCommentsList] = useState(comments);
	const [comment, setComment] = useState("");
	const [loading, setLoading] = useState(false);
	const { data: session } = useSession();

	const createComment = async () => {
		try {
			setLoading(true);
			const res = await axios.post("https://bigdaddycarlomeneses.vercel.app/api/comment", {
				comment,
			});
			console.log(res.data);
			setCommentsList([res.data, ...commentsList]);
			setComment("");
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	const deleteComment = async (commentId) => {
		try {
			await axios.delete("https://bigdaddycarlomeneses.vercel.app/api/comment", {
				data: { commentId },
			});
			setCommentsList(commentsList.filter((c) => c._id !== commentId));
		} catch (error) {
			console.log(error);
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && comment) {
			createComment();
		}
	};

	return (
		<Stack>
			<Group position="apart">
				<Title order={3}>Comment on the comic</Title>
				{!session && (
					<Link href="api/auth/signin">
						<Button variant="subtle">login</Button>
					</Link>
				)}
			</Group>
			<div>
				<Textarea
					autosize
					value={comment}
					onChange={(e) => setComment(e.currentTarget.value)}
					error={comment.length >= 1000 && "Comment must be lesser than 1000 characters"}
					onKeyDown={handleKeyDown}
					disabled={loading || !session}
					minRows={3}
					maxRows={6}
					mb="sm"
				/>
				<Button onClick={() => createComment()} loading={loading}>
					Submit
				</Button>
			</div>
			{comments.length > 0 && (
				<>
					<Divider my="sm" />
					{commentsList.map((data, i) => (
						<Comment {...data} key={i} deleteComment={deleteComment} />
					))}
				</>
			)}
		</Stack>
	);
};

export default Comments;
