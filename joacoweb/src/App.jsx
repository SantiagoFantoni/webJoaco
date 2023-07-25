import Banner from "./components/Banner";
import AudioPlayer from "./components/AudioPlayer";
import Nav from "./components/Nav";
import Chat from "./components/Chat";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<Nav></Nav>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Banner path={"../images/peñarol.png"} />

							<AudioPlayer />
						</>
					}></Route>
				<Route path='/chat' element={<Chat />}></Route>
			</Routes>
		</>
	);
}

export default App;
