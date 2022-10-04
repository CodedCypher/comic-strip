import { Container, Text, Center, Box } from "@mantine/core";
import React from "react";

const Footer = () => {
	return (
		<Box
			my="lg"
			sx={(theme) => ({
				borderTop: `1px solid ${
					theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
				}`,
			})}
		>
			<Container>
				<Center mt="md">
					<Text color="dimmed">
						©{new Date().getFullYear()} Jim Danielle Encarnacion. All rights reserved.
					</Text>
				</Center>
			</Container>
		</Box>
	);
};

export default Footer;
