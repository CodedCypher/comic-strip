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
							The literary genre used in the text is science fiction. The literary themes that are
							found in the text are identity, history and memory, technology, and intertextuality:
							Identity shows the social status between the wealthy and the poor, creating a terrible
							cycle of poverty and class injustice. History & Memory in cause and effect; the
							oppressive government is permitted to rule unchecked over the uneducated masses, which
							resulted in rebellion to fight for freedom, equality, and justice. History & Memory
							depiction; Scy doesn’t know he is living in a virtual world and not in reality.
							History & Memory beginning; the comic is a sequel to the virtual center which is
							dependent on the author's life when she experiences marital law. Technology; set in a
							futuristic dystopian Philippine setting where everyone can live in a virtual world.
							Lastly, intertextuality textual relationship; this comic is a sequel to the virtual
							center, textual relationship; our comic has a lot of similarities to other works.
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
							Literary devices used in the comic are dialogue, dramatic irony, exposition and
							symbolism. The dialogue can be seen throughout the whole comic where the characters
							speak to one another. Exposition; provides important background information about
							Scy’s backstory and the situation between the rebels and the government. Symbolism;
							Scy and the rebels portray the common people, and their rebellion symbolizes the
							People Power Revolution.
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
							The literary approaches that are in the text are biographical approach, historical
							approach, and marxist approach. The text has a Marxist approach because it shows the
							class distinctions as well as the system's ramifications and complexities. It also
							shows that the poor work for the wealthy, creating a terrible cycle of poverty and
							class injustice. Historical approach; the comic is a sequel to the virtual center
							where we used a fight between the rebels and the government to portray the martial
							law: the injustice and inequality in society where the rich and the government are
							oppressing the poor.
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
							We have different types of literary elements present in the text. The setting is set
							in a futuristic dystopian Philippines. The tone is serious and objective. The point of
							view is sometimes first person when Scy narrates what is happening around him, or
							third person when the author uses exposition to give background information. The image
							is sight and touch. Characterization: The protagonist is Scy, the antagonist is the
							oppressive government, Scy is dynamic because of his realization, and static is for
							the rest of the characters and the characters are flat. The theme of the text is to
							fight for one’s rights and freedom and conflict, which is man vs society because Scy
							is fighting the oppressive government for freedom and equality and justice in this
							world.
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
