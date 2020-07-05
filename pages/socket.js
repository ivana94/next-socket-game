import * as io from "socket.io-client";

export let socket;

export const initSocket = () => {
	if (!socket) {
		socket = io.connect();
	}
};
