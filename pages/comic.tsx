import { Container, Image } from "@mantine/core";
import { useEffect } from "react";
import { useWindowScroll } from "@mantine/hooks";
const Comic = () => {
	const [_, scrollTo] = useWindowScroll();
	useEffect(() => {
		scrollTo({ y: 0, x: 0 });
	}, []);
	return (
		<Container size="md" sx={{ minHeight: "100vh" }}>
			{Array.from(Array(9).keys()).map((_, i) => (
				<Image src={`/comic/Page ${i + 1}-min.jpg`} key={i} alt={`Page ${i + 1}`} />
			))}
		</Container>
	);
};

export default Comic;
