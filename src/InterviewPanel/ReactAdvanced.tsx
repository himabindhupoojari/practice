import React from 'react'
import './style.css';

function ReactAdvanced() {
  return (
    <div className='react-qs'>
        <h1>Advanced</h1>
      <h1>useMemo vs useCallback</h1>
      <p>useMemo memoizes a value, while useCallback memoizes a function.</p>

      <h1>Keys in lists</h1>
      <p><strong>Keys are special attributes used to identify elements in a list.</strong></p>
      <p>
        <pre>
          <code>{`{items.map((item) => (
  <input key={item.id} defaultValue={item.name} />
))}`}</code>
        </pre>
      </p>
      <p><q>Using stable and unique keys ensures React performs minimal DOM updates and preserves component state correctly across renders.</q></p>

      <h1>Context API vs Redux</h1>
      <p><strong>Context API is ideal for lightweight global state, but for complex applications with frequent updates and debugging needs, Redux provides better performance optimization, structured state management, and tooling support.</strong></p>
      <h3>🔵 1️⃣ Context API</h3>
      <p>🔹 What it is:
        <br />
        A React feature to share data across components without prop drilling.</p>

      <p><strong>

        ✅ Example</strong></p>
      <p>
        <pre>
          <code>{`const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}`}</code>
        </pre>
      </p>

      <p><strong>🔹 Best For:</strong></p>
      <p>
        <ul>
          <li>Theme (dark/light)</li>
          <li>Auth user data</li>
          <li>Language (i18n)</li>
          <li>Small/global state</li>
        </ul>
      </p>
      <p><strong>❗ Limitation:</strong></p>
      <p><ul>
        <li>Causes re-render of all consumers when value changes</li>
        <li>No built-in structure (reducers, middleware, etc.)</li>
        <li>Hard to scale for complex apps</li>
      </ul>
      </p>

      <h3>🔴 2️⃣ Redux</h3>
      <p><strong>🔹 What it is:</strong></p>
      <p>A state management library with a predictable data flow.</p>
      <p><strong>🔹 Core Concepts:</strong></p>
      <p><ul>
        <li>Store</li>
        <li>Actions</li>
        <li>Reducers</li>
        <li>Dispatch</li>
      </ul></p>

      <p><strong>✅ Example (Redux Toolkit style)</strong></p>
      <p>
        <pre><code>{`const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});`}</code></pre>
      </p>

      <p><strong>🔹 Best For:</strong></p>
      <p>
        <ul><li>Large applications</li>
          <li>Complex state logic</li>
          <li>Multiple unrelated global states</li>
          <li>Debugging & tracking changes</li></ul>
      </p>

      <p><strong>🔥 Advantages:</strong></p>

      <p>
        <ul>
          <li>✔ Predictable state updates</li>
          <li>✔ Middleware support (API calls, logging)</li>
          <li>✔ DevTools (time travel debugging)</li>
          <li>✔ Better scalability</li>
        </ul>
      </p>

      <p><strong>🔎 Performance Difference (Important)</strong></p>
      <p><b>Context API:</b></p>
      <p>
        <pre><code>{`value={{ user }}`}</code></pre>
      </p>
      <p>👉 When user changes → ALL consumers re-render</p>
      <p><b>Redux:</b></p>
      <p>👉 Only components using changed state re-render<br />
        👉 Uses selectors for optimization</p>

      <h1>How to optimize performance</h1>
      <p><strong>🎯 Real-World Example (Your Use Case)</strong></p>
      <p>For a large table with filters:</p>
      <p>
        <ul>
          <li>✔ useMemo → filter data</li>
          <li>✔ useCallback → row handlers</li>
          <li>✔ React.memo → row components</li>
          <li>✔ Virtualization → render only visible rows</li>
          <li>✔ Debounce → search input</li>
        </ul>
      </p>
      <p><b>To optimize React performance, I focus on minimizing unnecessary re-renders using React.memo, useMemo, and useCallback, optimizing state structure, using proper keys, debouncing expensive operations like API calls, and applying techniques like code splitting and list virtualization for large datasets.</b></p>
    </div>
  )
}

export default ReactAdvanced