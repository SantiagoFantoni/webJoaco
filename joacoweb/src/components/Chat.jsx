import io from "socket.io-client";
const socket = io.connect("http://localhost:3002/");
import { useEffect, useState } from "react";

function Chat() {
	useEffect(() => {
		socket.on("recieved", (data) => {
			setRecieveMessage(data.message);
		});
	}, [socket]);
	const [messages, setMessages] = useState([]);
	const [recieveMessage, setRecieveMessage] = useState(null);
	function sendMessage() {
		socket.emit("sendingMessages", {
			message: messages,
		});
	}
	return (
		<>
			<div className='chat-box'>{recieveMessage}</div>
			<input
				type='text'
				placeholder='Mensaje...'
				onChange={(e) => {
					setMessages(e.target.value);
				}}
			/>
			<button onClick={sendMessage}>Enviar</button>
		</>
	);
}

export default Chat;
