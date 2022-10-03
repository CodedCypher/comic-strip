import React from "react";
import { Container, Image, Stack } from "@mantine/core";

const Poems = () => {
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
