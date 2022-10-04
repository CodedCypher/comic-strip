import React, { useEffect } from "react";
import { Container, Image, Stack, Blockquote, Text, Paper } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const Poems = () => {
	const [_, scrollTo] = useWindowScroll();
	useEffect(() => {
		scrollTo({ y: 0, x: 0 });
	}, []);
	return (
		<Container sx={{ minHeight: "100vh" }}>
			<Stack>
				<Image src={"carlo-poem.png"} />
				<Image src={"jim-poem.png"} />
				<Paper withBorder>
					<Blockquote icon={null} cite="– James Cerdon" sx={{ textAlign: "center" }}>
						<Text>Virtual Living</Text>
						<Stack mt="xl" spacing="xl">
							<Stack spacing="xs">
								<Text size="md">
									People having the change to live their lives that they dreamt it.
								</Text>
								<Text size="md">
									It served as an escape from the harsh and bitter truths of reality.
								</Text>
								<Text size="md">
									Rich people who have chosen to live the rest of their lives virtually.
								</Text>
								<Text size="md">
									While poor people care for them until a young anarchist attempts to disrupt the
									system.{" "}
								</Text>
							</Stack>
							<Stack spacing="xs">
								<Text size="md">
									The world is centered on the utilization of technology, that gives life, comfort,
									and efficiency.
								</Text>
								<Text size="md">
									Robots taking over the work of humans. In the era of technological advancement
								</Text>
								<Text size="md">
									And advances of technology can be compared throughout the reign of former
									dictator.
								</Text>
								<Text size="md">Where it brought inequality between the rich and the poor</Text>
							</Stack>
							<Stack spacing="xs">
								<Text size="md">Many people are happy that they control the government.</Text>
								<Text size="md">They made rules before they went out like this.</Text>
								<Text size="md">We like Robots to follow their program.</Text>
								<Text size="md">We’re kept so busy by their demand.</Text>
							</Stack>
							<Stack spacing="xs">
								<Text size="md">
									We’ve stopped noticing what an unhealthy place the real world is becoming.
								</Text>
								<Text size="md">We’ve lost our freedom to choose how we’ll make a living.</Text>
								<Text size="md">
									Our entire lives center around taking care of the rich so their money will take
									care of us.
								</Text>
								<Text size="md">
									Technology going to be dangerous If not treated well, and so are the people in the
									government.
								</Text>
							</Stack>
						</Stack>
					</Blockquote>
				</Paper>
			</Stack>
		</Container>
	);
};

export default Poems;
