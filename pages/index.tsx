import type { NextPage } from "next";
import {
	Container,
	Title,
	Image,
	Text,
	Badge,
	Group,
	Stack,
	Grid,
	Button,
	Avatar,
	Center,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Details from "../components/Details";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollLock } from "@mantine/hooks";
import { useEffect } from "react";
// import Comments from "../components/Comments";
import axios from "axios";

const Home: NextPage = () => {
	const [_, setScrollLocked] = useScrollLock();
	const [comments, setComments] = useState([]);
	const genre = ["science fiction", "Mystery", "tragedy"];
	const avatars = [
		{ src: "carlo.jpg", name: "Carlo Meneses", link: "https://www.facebook.com/HindiAkoSiCarlo" },
		{ src: "jim.jpg", name: "Jim Danielle Encarnacion", link: "https://www.facebook.com/J1md3l" },
		{ src: "james.jpg", name: "James Cerdon", link: "https://www.facebook.com/james.cerdon" },
	];
	const detailsRef = useRef(null);

	useEffect(() => {
		setScrollLocked((c) => true);
		setTimeout(() => {
			setScrollLocked((c) => false);
		}, 3500);
	}, []);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const { data } = await axios.get("https://bigdaddycarlomeneses.vercel.app/api/comment");
				setComments(data.comments);
			} catch (error) {
				console.log(error);
			}
		};
		fetchComments();
	}, []);

	return (
		<>
			<Container>
				<Stack spacing="10vh">
					<motion.div
						animate={{
							y: 0,
							opacity: 1,
						}}
						initial={{ y: -300, opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<Carousel
							mx="auto"
							withIndicators
							height={400}
							styles={{
								indicator: {
									width: 12,
									height: 4,
									transition: "width 250ms ease",

									"&[data-active]": {
										width: 40,
									},
								},
							}}
						>
							{Array.from(Array(9).keys()).map((_, i) => (
								<Carousel.Slide key={i}>
									<Image src={`Page ${i + 1}-min.jpg`} height={400} />
								</Carousel.Slide>
							))}
						</Carousel>
					</motion.div>
					<motion.div
						initial={{ y: 300, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.5 }}
					>
						<Grid columns={12} grow sx={{ alignItems: "center" }}>
							<Grid.Col md={6} sm={6} xs={12}>
								<Stack>
									<Title order={1} size="h3">
										One Man’s Utopia is Another Man’s Dystopia
									</Title>
									<Group>
										{genre.map((g, i) => (
											<Badge variant="filled" key={i}>
												{g}
											</Badge>
										))}
									</Group>
									<Stack>
										<Text>
											One’s Utopia is Another’s Dystopia is a sequel to Virtual Center. It is set in
											a futuristic dystopian Philippine setting where everyone can live in a virtual
											world, and it explores how the poor work for the wealthy, creating a terrible
											cycle of poverty and class injustice. As an oppressive government is permitted
											to rule unchecked over the uneducated masses, technology has advanced to the
											point where robots are taking over tasks that should be performed by people,
											and virtual centers are serving as safe havens for those who prefer to exist
											in something that isn't real and tangible rather than reality.
										</Text>
										<Text>
											Following the capture of Nick, the rebels that Nick was a part of heard his
											sacrifice for his sister and brother-in-law’s escape, and this ignited an
											all-out war with the so-oppressive government. Knowing the disadvantage in
											equipment and personnel they resorted to a decisive war against all odds;
											fighting for freedom, equality, and justice. The rebels’ group, Iron Maiden,
											is composed of a ragtag group of misfits with the feat of one goal. We follow
											the new member of the Iron Maiden, Scy, as he joins the group unbeknownst to
											what is to come.
										</Text>
										<Group>
											<Button onClick={() => detailsRef.current.scrollIntoView()}>
												Learn More
											</Button>
											<Button variant="outline" component="a" download href="ComicStrip.pdf">
												Download pdf
											</Button>
										</Group>
									</Stack>
								</Stack>
							</Grid.Col>
							<Grid.Col md={6} sm={6} xs={12}>
								<Link href="/comic">
									<motion.div
										whileHover={{
											scale: 1.05,
											transition: { duration: 0.3 },
										}}
									>
										<Image src={"coverpage.png"} sx={{ cursor: "pointer" }} />
									</motion.div>
								</Link>
							</Grid.Col>
						</Grid>
					</motion.div>
					<Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<motion.div
							initial={{ y: 200, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: "some" }}
							transition={{ duration: 0.7 }}
						>
							<Title mb="md">Creators</Title>
						</motion.div>
						<Group position="apart" sx={{ width: "100%", justifyContent: "center" }}>
							{avatars.map(({ src, name, link }, i) => (
								<motion.div
									initial={{ y: 200, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: (i + 1) * 0.3 }}
									key={i}
								>
									<Stack>
										<a href={link} target="_blank">
											<motion.div
												whileHover={{
													scale: 1.05,
													transition: { duration: 0.3 },
												}}
											>
												<Avatar sx={{ cursor: "pointer" }} size={250} src={src} radius="xl" />
											</motion.div>
										</a>
										<Center>
											<Title order={5}>{name}</Title>
										</Center>
									</Stack>
								</motion.div>
							))}
						</Group>
					</Stack>
					<div ref={detailsRef}>
						<Details />
					</div>
					{/* {process.env.NEXT_PUBLIC_MONGODB_URI && <Comments comments={comments} />} */}
				</Stack>
			</Container>
		</>
	);
};

export default Home;
