import { Accordion, createStyles, Title, Modal, Button, Center, Text, Group } from "@mantine/core";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Plotline from "./Plotline";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
		minHeight: 650,
	},

	title: {
		marginBottom: theme.spacing.md * 1.5,
	},

	item: {
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.lg,

		border: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[5]
		}`,
	},
}));

const Details = () => {
	const { classes } = useStyles();
	const [value, setValue] = useState<string[] | null>(["Literary genre and literary themes"]);
	const [opened, setOpened] = useState(false);
	return (
		<div>
			<motion.div
				initial={{ y: 200, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<Title align="center" className={classes.title}>
					Details
				</Title>
			</motion.div>
			<Accordion multiple variant="separated" value={value} onChange={setValue}>
				<motion.div
					initial={{ y: 200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<Accordion.Item className={classes.item} value="Literary genre and literary themes">
						<Accordion.Control>Literary genre and literary themes</Accordion.Control>
						<Accordion.Panel>
							The Literary Genre used in the text is Science Fiction. The Literary Themes that are
							found in the text are Identity, History and Memory, Technology, and Intertextuality:
							Identity shows the social status between the wealthy and the poor, creating a terrible
							cycle of poverty and class injustice. History & Memory in cause and effect; the
							oppressive government is permitted to rule unchecked over the uneducated masses, which
							resulted in rebellion to fight for freedom, equality, and justice. History & Memory
							beginning; the comic is a sequel to the virtual center which is dependent on the
							author's life when she experiences marital law. Technology; set in a futuristic
							dystopian Philippine setting where everyone can live in a virtual world. Lastly,
							Intertextuality textual relationship; this comic is a sequel to the virtual center.
						</Accordion.Panel>
					</Accordion.Item>
				</motion.div>
				<motion.div
					initial={{ y: 200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<Accordion.Item className={classes.item} value="Literary devices">
						<Accordion.Control>Literary devices</Accordion.Control>
						<Accordion.Panel>
							Literary Devices used in the comic are Dialogue, Exposition, Dramatic Irony and
							Symbolism. The Dialogue can be seen throughout the whole comic where the characters
							speak to one another. Exposition; provides important background information about
							Scy’s backstory and the situation between the rebels and the government. Dramatic
							Irony because we understood and saw that Scy is living in a time loop, in the Virtual
							Center. Symbolism; Scy and the rebels portray the common people, and their rebellion
							symbolizes the People Power Revolution.
						</Accordion.Panel>
					</Accordion.Item>
				</motion.div>
				<motion.div
					initial={{ y: 200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<Accordion.Item className={classes.item} value="Literary approaches">
						<Accordion.Control>Literary approahces</Accordion.Control>
						<Accordion.Panel>
							The Literary Approaches that are in the text are, Historical approach, and Marxist
							approach. The text has a Marxist approach because it shows the class distinctions as
							well as the system's ramifications and complexities. It also shows that the poor work
							for the wealthy, creating a terrible cycle of poverty and class injustice. Our
							Historical approach is that we took inspiration from Virtual Center to make a sequel
							to it. We gathered different experiences, and different events in history that
							happened during the Marcos’ Era: one example being the People Power Revolution.
						</Accordion.Panel>
					</Accordion.Item>
				</motion.div>
				<motion.div
					initial={{ y: 200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<Accordion.Item className={classes.item} value="Literary elements">
						<Accordion.Control>Literary elements</Accordion.Control>
						<Accordion.Panel>
							We have different types of Literary Elements present in the text. Our setting is set
							in the futuristic dystopian of the Philippines, specifically Manila. The tone is
							serious and objective. The point of view is sometimes First person protagonist when
							Scy narrates himself, his life and those happening around him, Third person limited
							when Delia narrates the life of Scy after he dies, and lastly, we used Third person
							objective to describe the last scenes of our comic. The Image is of sight, touch and
							sound. Characterization: The protagonist is Scy, the antagonist is the oppressive
							government, Scy is dynamic because of his realization, and static is for the rest of
							the characters and the characters are flat. The theme of the text is to fight for
							one’s rights and freedom. And lastly, conflict is man vs society because Scy is
							fighting the oppressive government for freedom and equality and justice in this world.
						</Accordion.Panel>
					</Accordion.Item>
				</motion.div>
			</Accordion>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Plot Line" size="xl">
				<Plotline />
			</Modal>
			<motion.div
				initial={{ y: 200, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<Center>
					<Group sx={{ justifyContent: "center" }}>
						<Link href="/comic">
							<Button>Read the Comic Strip</Button>
						</Link>
						<Button onClick={() => setOpened(true)} variant="outline">
							Read the Plot Line
						</Button>
					</Group>
				</Center>
			</motion.div>
		</div>
	);
};

export default Details;
