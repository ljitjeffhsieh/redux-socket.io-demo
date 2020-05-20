import React, { useState, useEffect, } from 'react';
import { Card, Input, Button, } from 'antd';
import { updateMessageActions, } from './controller'
import { Provider } from "react-redux";
import { connect } from "react-redux";
import sockets from './sockets';
import 'antd/dist/antd.css';
import './App.css';

const {
	updateLocalMessageAction,
	updateBroadCastMessageAction,
	updateGlobalMessageAction,
} = updateMessageActions;

function Home({
	updateLocalMessageAction,
	updateGlobalMessageAction,
	updateBroadCastMessageAction,
}) {
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState({})
	useEffect(() => {
		sockets.subscribe(() => {
			console.log('new client state');
			setMessages({ ...sockets.getState().messagesReducer, })
		});
	}, [message]);
	function _handleClickMessagesButtonLocal() {
		updateLocalMessageAction(message);
		setMessage('');
	}
	function _handleClickMessagesButtonGlobal() {
		updateGlobalMessageAction(message);
		setMessage('');
	}
	function _handleClickMessagesButtonBroadcast() {
		updateBroadCastMessageAction(message);
		setMessage('');
	}
	return (
		<div className="App">
			<header className="App-header">
				<div className="title">Redux Stock.io demo (messages)</div>
				<Card>
					<p>Local: {messages.local_message}</p>
					<p>Global: {messages.global_message}</p>
					<p>Broadcast: {messages.broadcast_message}</p>
				</Card>
				<Input onChange={e => setMessage(e.target.value)} value={message} placeholder="please input"/>
				<div className="buttons">
					<Button onClick={_handleClickMessagesButtonLocal}> Send Local </Button>
					<Button onClick={_handleClickMessagesButtonGlobal}> Send Global </Button>
					<Button onClick={_handleClickMessagesButtonBroadcast}> Send Broadcast </Button>
				</div>
			</header>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		updateLocalMessageAction: (message) => dispatch(updateLocalMessageAction(message)),
		updateBroadCastMessageAction: (message) => dispatch(updateBroadCastMessageAction(message)),
		updateGlobalMessageAction: (message) => dispatch(updateGlobalMessageAction(message)),
	};
}

const App = connect(null, mapDispatchToProps)(Home)

export default () => (<Provider store={sockets}><App /></Provider>)
