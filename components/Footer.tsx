import { Container, Text, Center } from "@mantine/core";
import React from "react";

const Footer = () => {
	return (
		<Container
			my="lg"
			sx={(theme) => ({
				borderTop: `1px solid ${
					theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
				}`,
			})}
		>
			<Center mt="md">
				<Text color="dimmed">
					©{new Date().getFullYear()} Jim Danielle Encarnacion. All rights reserved.
				</Text>
			</Center>
		</Container>
	);
};

export default Footer;
