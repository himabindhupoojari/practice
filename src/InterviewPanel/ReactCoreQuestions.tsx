import React from 'react'
import './style.css';

function ReactCoreQuestions() {
    return (
        <div className='react-qs'>
            <h1>Core React</h1>
            <h1>Difference between state and props</h1>
            <p>Props are read-only data passed from parent to child components, while state is mutable data managed within a component that controls its behavior and re-rendering.</p>
            <p>
                <pre>
                    <code>
                        {`| Feature           | Props                        | State                    |
| ----------------- | ---------------------------- | ------------------------ |
| Ownership         | Passed from parent           | Managed inside component |
| Mutability        | Read-only                    | Can be updated           |
| Purpose           | Configuration / Data passing | Dynamic behavior         |
| Who updates it?   | Parent component             | Component itself         |
| Causes re-render? | Yes (if value changes)       | Yes (when updated)       |
`}
                    </code>
                </pre>
            </p>
            <p>👉 Props = Input to a component, immutable</p>
            <p>👉 State = Component’s internal data Is mutable (can be changed)</p>
            <h3>Using props</h3>
            <p>
                <pre>
                    <code>{`function Child(props) {
  return <h1>Hello {props.name}</h1>;
}

function Parent() {
  return <Child name="HimaBindu" />;
}
`}</code>
                </pre>
            </p>

            <h3>Using props</h3>
            <p>
                <pre><code>
                    {`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
`}
                </code></pre>
            </p>
            <h1>What is useEffect?</h1>
            <p>useEffect is a React Hook used to handle side effects in functional components.</p>
            <p>👉 Side effects = things that happen outside normal rendering:</p>
            <p>useEffect is a hook that runs side effects after the component renders, and its execution depends on the dependency array.</p>
            <p>API calls, Subscriptions, Timers, DOM manipulation, Event listeners</p>
            <p><strong>Basic Syntax</strong></p>
            <p>
                <pre>
                    <code>{`useEffect(() => {
  // Side effect logic

  return () => {
    // Cleanup (optional)
  };
}, [dependencies]);
`}</code>
                </pre>
            </p>
            <p><strong>🔹How useEffect Works (Step-by-Step)</strong></p>
            <p>1️⃣ Component renders<br />
                2️⃣ React updates the DOM<br />
                3️⃣ Then useEffect runs<br />
                4️⃣ If dependencies change → effect runs again<br />
                5️⃣ If component unmounts → cleanup runs<br />

                👉 Important: useEffect runs after render</p>

            <p>✔ It replaces lifecycle methods:</p>
            <ul>
                <li>componentDidMount</li>
                <li>componentDidUpdate</li>
                <li>componentWillUnmount</li>
            </ul>

            <h1>Dependency array mistakes.</h1>
            <p>Common mistakes include missing dependencies leading to stale closures, causing infinite loops by updating state inside effects, using objects or functions without memoization, and ignoring ESLint warnings.</p>
            <p>🧠 Senior-Level Insight</p>
            <ol>
                <li>Dependency array uses referential equality (Object.is)</li>
                <li>Functions and objects cause re-renders unless memoized</li>
                <li>Stale closures are the most dangerous bug</li>
                <li>Effects should be used for side effects only — not data derivation</li>
            </ol>

            <h1>Controlled vs uncontrolled components.</h1>
            <p>Controlled components are managed by React state, while uncontrolled components store their own state in the DOM and are accessed using refs.</p>
            <h3>🔵 1️⃣ Controlled Components</h3>
            <p>A controlled component is a form element whose value is controlled by React state.</p>
            <p><strong>✅ Example (Controlled)</strong></p>
            <p>
                <pre>
                    <code>{`import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
`}</code>
                </pre>
            </p>
            <p><strong>🔎 What’s happening?</strong></p>
            <ul>
                <li>Input value comes from name state</li>
                <li>On every change → state updates</li>
                <li>UI always reflects React state</li>
            </ul>
            <p>✔ Predictable<br />
                ✔ Easy validation<br />
                ✔ Better for dynamic forms</p>

            <h3>🔴 2️⃣ Uncontrolled Components</h3>
            <p>An uncontrolled component stores its own state in the DOM.</p>
            <p><strong>✅ Example (Uncontrolled)</strong></p>
            <p>
                <pre>
                    <code>{`import { useRef } from "react";

function Form() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
`}</code>
                </pre>
            </p>
            <p><strong>🔎 What’s happening?</strong></p>
            <ul>
                <li>Input manages its own value</li>
                <li>We read value only when needed</li>
                <li>React does not control it</li>
                <p>✔ Less code<br />
                    ✔ Slightly better performance in large forms<br />
                    ❌ Harder validation</p>
            </ul>

            <h3>🔥 Key Differences (Interview Table)</h3>
            <p>
                <pre>
                    <code>{`| Feature             | Controlled         | Uncontrolled |
| ------------------- | ------------------ | ------------ |
| Data Source         | React state        | DOM          |
| Value Access        | via state          | via ref      |
| Re-render on change | Yes                | No           |
| Validation          | Easy               | Manual       |
| Recommended?        | ✅ Yes (most cases) | Rare cases   |
`}</code>
                </pre>
            </p>

            <h1>Lifting state up.</h1>
            <p>Lifting state up is the process of moving state to the nearest common parent so that multiple components can share and stay synchronized with the same data.</p>
            <p>React follows:<br />

                🔁 Unidirectional Data Flow (Top → Down)<br /><br />

                If two sibling components need the same data:<br />

                <ul>
                    <li>They cannot directly share state</li>
                    <li>So we move state to their parent</li>
                </ul>
                That process is called lifting state up.</p>

            <h3>🔹 Example Without Lifting (Problem)</h3>
            <p>
                <pre>
                    <code>{`function ChildA() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>+</button>;
}

function ChildB() {
  return <p>Count: ???</p>;
}
`}</code>
                </pre>
            </p>
            <p>👉 ChildB cannot access ChildA's state<br />
                👉 No shared data</p>

            <h3>🔹 Example With Lifting State Up (Correct)</h3>
            <p>
                <pre>
                    <code>{`import { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} />
    </>
  );
}

function ChildA({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}

function ChildB({ count }) {
  return <p>Count: {count}</p>;
}
`}</code>
                </pre>
            </p>
            <p><strong>🔎 What Happened?</strong></p>
            <p>
                1️⃣ State moved to Parent<br />
                2️⃣ Passed as props to children<br />
                3️⃣ One child updates<br />
                4️⃣ Other child reflects changes<br />

                ✔ Single source of truth<br />
                ✔ Predictable data flow

            </p>

            <p><strong>🎯 Real Interview Scenario</strong></p>
            <p>
                <b>Interviewer might ask:</b></p>
            <p>
                If two distant components need the same state, would you always lift it up?</p>
            <p><b>Best answer:</b></p>
            <p>
                "If they share a close parent, yes. If not, I would consider Context API or a global state solution to avoid prop drilling."</p>

            <p><strong>❓ What problem does lifting state up solve?</strong></p>
            <p>👉 It prevents duplicated state and inconsistency between components.</p>

            <h3>Real-world example (like filters + table sync)s</h3>
            <p><strong>🧩 Problem Statement</strong><br />

                You have:<br />

                🔍 A Filter Component (search, status dropdown, date range)<br />

                📊 A Table Component (displays filtered data)<br />

                Both need to stay synchronized.</p>

            <p><strong>❌ Wrong Approach (State Inside Filter Only)</strong></p>
            <p>
                <pre>
                    <code>{`function Filter() {
  const [search, setSearch] = useState("");

  return <input onChange={(e) => setSearch(e.target.value)} />;
}

function Table() {
  // No access to search value ❌
}
`}</code>
                </pre>
            </p>
            <p>👉 Table cannot access filter state<br />
                👉 No synchronization<br />
                👉 Duplicate state may appear</p>

            <p><strong>✅ Correct Approach: Lift State to Parent</strong></p>
            <p>
                <pre>
                    <code>{`Parent (Holds State)
   ├── Filter (Updates State)
   └── Table (Reads State)
`}</code>
                </pre>
            </p>

            <p><strong>💻 Example</strong></p>

            <p><strong>Parent component</strong></p>

            <p><pre>
                <code>{`import { useState, useMemo } from "react";

function Parent() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const data = [
    { id: 1, name: "Hima", status: "active" },
    { id: 2, name: "John", status: "inactive" },
  ];

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <>
      <Filter
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />
      <Table data={filteredData} />
    </>
  );
}
`}</code></pre></p>

            <p><strong>Filter component</strong></p>
            <p>
                <pre>
                    <code>{`function Filter({ search, setSearch, status, setStatus }) {
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </>
  );
}
`}</code>
                </pre>
            </p>

            <p><strong>Table component</strong></p>
            <p>
                <pre>
                    <code>{`function Table({ data }) {
  return (
    <table>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
`}</code>
                </pre>
            </p>

            <p><strong>
                🔎 What’s Happening?</strong><br />

                ✔ Parent holds filter state<br />
                ✔ Filter updates state<br />
                ✔ Table reads filtered data<br />
                ✔ useMemo optimizes recalculation</p>

            <p>
                <strong>🔥 Why This Is Important in Interviews</strong><br />

                This demonstrates:

                <ul>
                    <li>Lifting state up</li>
                    <li>Single source of truth</li>
                    <li>Controlled components</li>
                    <li>Performance optimization</li>
                    <li>Proper data flow</li>
                </ul>
            </p>

            <p><strong>🧠 Senior-Level Enhancement</strong><br />

                In real applications:<br />

                <b>🔹 If data comes from API</b><br />

                You might:</p>

            <p>
                <pre>
                    <code>{`useEffect(() => {
  fetchData(search, status);
}, [search, status]);
`}</code>
                </pre>
                Instead of filtering locally.
            </p>

            <p><strong>🔹 If filters become complex</strong><br />

                Consider:
                <ul>
                    <li>Debouncing search</li>
                    <li>Memoizing filter logic</li>
                    <li>Using React Query for server filtering</li>
                    <li>Using Zustand/Redux if filters are global</li>
                </ul>
            </p>

        </div>
    )
}

export default ReactCoreQuestions