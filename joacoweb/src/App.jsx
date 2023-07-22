import Banner from "./components/Banner";
import AudioPlayer from "./components/AudioPlayer";
import Pictures from "./components/Pictures";
import "./App.css";

function App() {
	return (
		<>
			<Banner path={"../images/peñarol.png"}></Banner>
			<AudioPlayer></AudioPlayer>
			<Pictures></Pictures>
		</>
	);
}

export default App;
