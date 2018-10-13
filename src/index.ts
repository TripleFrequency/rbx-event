class EventConnection {
	constructor(private onDisconnect: () => void) {}
	public disconnect() {
		this.onDisconnect();
	}
}

export class Event<T extends any[]> {
	private callbacks = new Array<(...args: T) => void>();

	public connect(callback: (...args: T) => void) {
		this.callbacks.push(callback);
		return new EventConnection(() => {
			const idx = this.callbacks.indexOf(callback);
			if (idx !== -1) {
				this.callbacks.splice(idx);
			}
		});
	}

	public fire(...args: T) {
		this.callbacks.forEach(callback => coroutine.wrap(callback)(...args));
	}
}
