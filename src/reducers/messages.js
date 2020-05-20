export function messagesReducer(state = {}, action){
	switch(action.type){
		case 'local_message':
			return Object.assign(state, { local_message: action.data });
		case 'global_message':
			return Object.assign(state, { global_message: action.data });
		case 'broadcast_message':
			return Object.assign(state, { broadcast_message: action.data });
		default:
			return state;
  	}
}