import { actionTypes } from '.';
import sockets from '../sockets';
const { dispatch, } = sockets;
const {
	LOCAL_MESSAGE,
	GLOBAL_MESSAGE,
	BROADCAST_MESSAGE,
} = actionTypes;

export function updateLocalMessageAction(message) {
	return dispatch({
		type: `server/${LOCAL_MESSAGE}`,
		data: message
	});
}
export function updateGlobalMessageAction(message) {
	return dispatch({
		type: `server/${GLOBAL_MESSAGE}`,
		data: message
	});
}
export function updateBroadCastMessageAction(message) {
	return dispatch({
		type: `server/${BROADCAST_MESSAGE}`,
		data: message
	});
}