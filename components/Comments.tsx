import React from "react";
import Comment from "./Comment";
import { Stack } from "@mantine/core";

const Comments = ({ comments }) => {
	return (
		<Stack>
			{comments.map((data, i) => (
				<Comment {...data} key={i} />
			))}
		</Stack>
	);
};

export default Comments;
