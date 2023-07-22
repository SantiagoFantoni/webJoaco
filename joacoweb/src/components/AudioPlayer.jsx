import { useState, useEffect } from "react";

function AudioPlayer() {
	const playList = [
		{ audio: new Audio("/music/Mozthaza - Sad.mp3"), title: "Mozthaza" },
		{
			audio: new Audio("/music/pibes_chorros_que_calor.mp3"),
			title: "Que calor",
		},
	];
	const [songs, setSongs] = useState(playList);
	const [playing, setPlaying] = useState(false);
	const [currentSong, setCurrentSong] = useState(playList[0]);
	let index = 1;

	useEffect(() => {
		if (playing) {
			currentSong.audio.play();
		} else {
			currentSong.audio.pause();
		}
	}, [playing]);

	function handlePrev() {
		if (index > -1) {
			index--;
			setSong(playList[index]);
		}
	}
	function handlePlayPause() {
		setPlaying(!playing);
	}
	function handleNext() {
		if (index < playList.length - 1) index++;
		setSong(playList[index]);
	}
	return (
		<>
			<audio src={currentSong.audio} />
			<div className='music-container'>
				<span>atras</span>
				<span onClick={handlePlayPause}>{currentSong.title}</span>
				<span>prox</span>
			</div>
		</>
	);
}

export default AudioPlayer;
