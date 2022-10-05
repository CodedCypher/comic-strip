import { createStyles, Text, Avatar, Group, Paper, ActionIcon } from "@mantine/core";
import { format } from "timeago.js";
import { BsFillTrashFill } from "react-icons/bs";
import { useSession } from "next-auth/react";

const useStyles = createStyles((theme) => ({
	body: {
		paddingLeft: 54,
		paddingTop: theme.spacing.sm,
	},
}));

function CommentSimple({ _id, user, createdAt, comment, deleteComment }) {
	const { data } = useSession();
	const { classes } = useStyles();
	return (
		<Paper withBorder p="md">
			<Group position="apart">
				<Group>
					<Avatar src={user.image} alt={user.name} radius="xl" />
					<div>
						<Text size="sm">{user.name}</Text>
						<Text size="xs" color="dimmed">
							{format(createdAt)}
						</Text>
					</div>
				</Group>
				{user.email === data?.user?.email && (
					<ActionIcon color="red" onClick={() => deleteComment(_id)}>
						<BsFillTrashFill size={18} />
					</ActionIcon>
				)}
			</Group>

			<Text className={classes.body} size="sm">
				{comment}
			</Text>
		</Paper>
	);
}

export default CommentSimple;
