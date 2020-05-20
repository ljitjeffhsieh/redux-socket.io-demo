import { createStore, applyMiddleware, } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import reducers from '../reducers';
const socket = io('http://localhost:3000');
export default createStore(reducers, applyMiddleware(createSocketIoMiddleware(socket, "server/", { eventName: 'messages', })))
