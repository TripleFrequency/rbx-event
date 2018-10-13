## rbx-event

### Event<[A, B, C]>
```TS
connect(callback: (a: A, b: B, c: C) => void): EventConnection;
fire(a: A, b: B, c: C): void;
```

### EventConnection
```TS
disconnect(): void;
```