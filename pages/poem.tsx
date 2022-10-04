import React, { useEffect } from "react";
import { Container, Image, Stack } from "@mantine/core";
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
			</Stack>
		</Container>
	);
};

export default Poems;
