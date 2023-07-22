import { useState } from "react";

function Pictures() {
	const imageList = [
		{ url: "/images/pasta.jpg" },
		{ url: "/images/peñarol.png" },
	];
	const [images, setImages] = useState(imageList);
	const [currentImage, setCurrentImage] = useState(images[0]);
	let index = 0;
	function nextImage() {
		if (index < images.length) {
			index++;
			setCurrentImage(imageList[index]);
		} else {
			index = 0;
			setCurrentImage(imageList[index]);
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
