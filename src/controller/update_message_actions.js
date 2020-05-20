import { actionTypes } from '.';
import sockets from '../sockets';
const { dispatch, } = sockets;
const {
	LOCAL_MESSAGE,
	GLOBAL_MESSAGE,
	BROADCAST_MESSAGE,
} = actionTypes;

export function updateLocalMessageAction(message) {
	return {
		type: `server/${LOCAL_MESSAGE}`,
		data: message
	};
}
export function updateGlobalMessageAction(message) {
	return {
		type: `server/${GLOBAL_MESSAGE}`,
		data: message
	};
}
export function updateBroadCastMessageAction(message) {
	return {
		type: `server/${BROADCAST_MESSAGE}`,
		data: message
	};
}