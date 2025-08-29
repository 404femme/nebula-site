import { useState } from "react";

export default function MyReactComponent() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
            <h2>Hello from React!</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}