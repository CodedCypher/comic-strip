import { useState } from "react";
import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	Paper,
	Transition,
	useMantineColorScheme,
	ActionIcon,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useRouter } from "next/router";
const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	root: {
		position: "fixed",
		zIndex: 9999,
	},

	dropdown: {
		position: "absolute",
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: "hidden",

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		},

		[theme.fn.smallerThan("sm")]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
		},
	},
}));

export default function HeaderResponsive() {
	const links = [
		{ link: "/", label: "Home" },
		{ link: "/comic", label: "Comic" },
	];
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const router = useRouter();

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, { [classes.linkActive]: active === link.link })}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
				close();
				router.push(link.link);
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Header height={HEADER_HEIGHT} mb={20} className={classes.root}>
			<Container className={classes.header}>
				<Title order={4} sx={{ cursor: "pointer" }} onClick={() => router.push("/")}>
					Comic Strip
				</Title>
				<Group>
					<ActionIcon onClick={() => toggleColorScheme()}>
						{colorScheme === "dark" ? <BsFillMoonFill /> : <BsFillSunFill />}
					</ActionIcon>
					<Group spacing={5} className={classes.links}>
						{items}
					</Group>
				</Group>
				<Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

				<Transition transition="pop-top-right" duration={200} mounted={opened}>
					{(styles) => (
						<Paper className={classes.dropdown} withBorder style={styles}>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
}
