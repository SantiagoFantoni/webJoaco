import { useState, useEffect } from "react";

function AudioPlayer() {
	const playList = [
		{ audio: new Audio("/music/Mozthaza - Sad.mp3"), title: "Mozthaza" },
		{
			audio: new Audio("/music/pibes_chorros_que_calor.mp3"),
			title: "Que calor",
		},
		{
			audio: new Audio("/music/Comadre_Compadre.mp3"),
			title: "Compadre comadre",
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
		const index = songs.findIndex((x) => x.title == currentSong.title);
		if (index == 0) {
			setCurrentSong(songs[songs.length - 1]);
		} else {
			setCurrentSong(songs[index - 1]);
		}
	}
	function handlePlayPause() {
		setPlaying(!playing);
	}
	function handleNext() {
		const index = songs.findIndex((x) => x.title == currentSong.title);
		if (index == songs.length - 1) {
			setCurrentSong(songs[0]);
		} else {
			setCurrentSong(songs[index + 1]);
		}
	}
	return (
		<>
			<audio src={currentSong.audio} />
			<div className='music-container'>
				<span onClick={handlePrev}>atras</span>
				<span onClick={handlePlayPause}>{currentSong.title}</span>
				<span onClick={handleNext}>prox</span>
			</div>
		</>
	);
}

export default AudioPlayer;
