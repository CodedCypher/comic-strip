import { Container, Image } from "@mantine/core";

const Comic = () => {
	return (
		<Container size="md" sx={{ minHeight: "100vh" }}>
			{Array.from(Array(9).keys()).map((_, i) => (
				<Image src={`/comic/Page ${i + 1}-min.jpg`} key={i} alt={`Page ${i + 1}`} />
			))}
		</Container>
	);
};

export default Comic;
