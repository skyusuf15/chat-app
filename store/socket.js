import io from 'socket.io-client';
const socket = io('http://192.168.1.104:3001');
socket.connect();

export default socket;