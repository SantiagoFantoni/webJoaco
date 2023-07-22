import { useState } from "react";

function Pictures() {
	const imageList = [
		{ url: "/images/pasta.jpg" },
		{ url: "/images/pibes.jpg" },
	];
	const [images, setImages] = useState(imageList);
	const [currentImage, setCurrentImage] = useState(images[0]);
	let index = 0;
	function nextImage() {
		const index = images.findIndex((x) => x.url == currentImage.url);
		if (index == imageList.length - 1) {
			setCurrentImage(images[0]);
		} else {
			setCurrentImage(images[index + 1]);
		}
	}
	return (
		<>
			<img
				src={currentImage.url}
				alt=''
				className='pictures'
				onClick={nextImage}
			/>
		</>
	);
}

export default Pictures;
