import io from 'socket.io-client';
const socket = io.caller('http://localhost:3000');
socket.connect();

export default socket;