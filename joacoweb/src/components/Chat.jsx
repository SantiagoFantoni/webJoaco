import { useEffect, useState } from "react";

function Chat() {
	return (
		<>
			<div className='chat-box'></div>
			<input type='text' placeholder='Mensaje...' />
			<button>Enviar</button>
		</>
	);
}

export default Chat;
