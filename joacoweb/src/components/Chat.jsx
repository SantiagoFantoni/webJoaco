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
			<div className='chat-box'>
				<div className='message-buble'>{recieveMessage}</div>
			</div>
			<form
				className='chat-form'
				onSubmit={(e) => {
					e.preventDefault();
					sendMessage;
				}}>
				<input
					className='chat-input'
					type='text'
					placeholder='Mensaje...'
					onChange={(e) => {
						setMessages(e.target.value);
					}}
				/>
				<button className='chat-button' onClick={sendMessage}>
					Enviar
				</button>
			</form>
		</>
	);
}

export default Chat;
