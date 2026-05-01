import RFA from '../assets/images/react-fiber-archetecture.jpeg';
import UseCallBackRule from '../assets/images/usecallback-rule.jpeg';
import UnnecessaryRenders from '../assets/images/unnecessary-renders.jpeg';

function ReactJsQs() {
  return (
    <div style={{ padding: "2rem" }} className='react-qs'>
      <h2>ReactJs Interview Questions</h2>
      <h1>1.How does React reconciliation work under the hood?</h1>

      <p>React reconciliation is the process that React uses to decide what actually needs to change in the DOM when a component’s state or props update. Since updating the real DOM is expensive, React uses a virtual representation to update only what’s necessary — not the whole page.</p>

      <h3>🧠 Under the Hood: How Reconciliation Works:</h3>
      <p><strong>1️⃣ State or Props Change → Re-render is Triggered</strong></p>
      <p>When a component updates:</p>
      <ul>
        <li>A new Virtual DOM tree is created.</li>
        <li>React compares it with the previous Virtual DOM.</li>
      </ul>

      <p><strong>2️⃣ Virtual DOM Diffing Algorithm</strong></p>
      <p>React compares nodes:</p>
      <ul>
        <li>If the type of element is the same <strong>{`(e.g., both are <div>)`}</strong>, React updates existing DOM properties.</li>
        <li>If the type is different <strong>{`(e.g., <div> → <span>)`}</strong>, React removes the old node and creates a new one.</li>
      </ul>

      <p><strong>3️⃣ Keys for Lists (Important for Interview)</strong></p>
      <p>For lists, React uses keys to track items.
        <br />Keys help React understand:</p>

      <ul>
        <li>Which items are added</li>
        <li>Which items moved</li>
        <li>Which items were removed</li>

        <p>This prevents unnecessary re-renders.<br />
          <strong>Bad (causes mismatches & re-renders):</strong></p>
        <pre>
          <code>
            {`{users.map((u, i) => <li key={i}>{u.name}</li>)}`}
          </code>
        </pre>

        <p><strong>Good (stable identity):</strong></p>
        <pre>
          <code>
            {`{users.map(u => <li key={u.id}>{u.name}</li>)}`}
          </code>
        </pre>
      </ul>

      <img src={RFA} alt="react-fiber-architecture" />

      <h3>🔁 Reconciliation Flow Diagram</h3>
      <pre>
        <code>
          {`State/Props Change
        ↓
New Virtual DOM Created
        ↓
Diffing with Old Virtual DOM
        ↓
Fiber decides what to update (priority-based)
        ↓
Minimal updates applied to Real DOM`}
        </code>
      </pre>

      <h3>📌 Example That Shows Reconciliation</h3>
      <pre>
        <code>
          {`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>   // only this re-renders
      <p>Hello</p>       // this doesn't change
    </div>
  );
}`}
        </code>
      </pre>

      <p>Even though the component re-renders, React sees that:</p>
      <ul>
        <li>h1 needs updating</li>
        <li>p is untouched → left as is</li>
      </ul>
      <p>Only the {`<h1>`} in the real DOM updates.</p>

      <h3>🗝️ One-Line Pitch (Memorize This)</h3>
      <p><strong>Reconciliation = Virtual DOM comparison + Fiber scheduling → minimal DOM updates.</strong></p>

      <h1>2.What problems does useCallback solve-and when does it NOT help?</h1>
      <p>useCallback is a React hook that helps you memoize (remember) a function so that it isn’t re-created on every render. It’s mainly a performance optimization tool — but it’s not always useful and can even hurt performance if misused.</p>
      <h3>🚀 What Problems useCallback Solves</h3>
      <p><strong>1. Prevents Unnecessary Re-renders in Child Components</strong></p>
      <p>When you pass a function as a prop to a child, React creates a new function reference every render → causing the child to re-render.</p>
      <pre>
        <code>{`const handleClick = () => console.log("clicked");`}</code>
      </pre>
      <p>Every render, handleClick is new. With useCallback, it isn’t.</p>
      <pre>
        <code>
          {`const handleClick = useCallback(() => {
  console.log("clicked");
}, []);`}
        </code>
      </pre>
      <p>📌 Benefit: Child components wrapped in React.memo won’t re-render for no reason.</p>
      <p><strong>2. Helps with Heavy or Expensive Functions</strong></p>
      <p>If a callback does heavy work, recreating it on every render costs time.</p>
      <pre>
        <code>
          {`const calculate = useCallback(() => heavyMath(data), [data]);`}
        </code>
      </pre>

      <p><strong>3. Stabilizes Function Identity in Dependencies</strong></p>
      <p>Useful in hooks like <b>useEffect, useMemo, or custom hooks</b>.</p>
      <p><strong>Without useCallback:</strong></p>
      <pre>
        <code>{`useEffect(() => {
  // runs every time because fn is new every render
}, [someFn]);`}</code>
      </pre>

      <p><strong>With useCallback:</strong></p>
      <pre><code>{`const someFn = useCallback(() => {}, []);
useEffect(() => {
  // runs only when needed
}, [someFn]);
`}</code></pre>

      <h3>❌ When useCallback Does NOT Help (or Makes Things Worse)</h3>
      <p><strong>1. When the Function Is Not Passed to Children</strong></p>
      <p>If a function is used only inside the component, memoizing it brings no benefit.</p>
      <pre>
        <code>{`// ❌ no benefit — just remove useCallback
const handleClick = useCallback(() => setCount(c => c+1), []);
`}</code>
      </pre>

      <p><strong>2. When There’s No Performance Issue</strong></p>
      <p>Using useCallback blindly adds overhead — you’re storing references that may never matter.</p>
      <p><b>Rule: Don’t optimize until you identify a re-render problem.</b></p>

      <p><strong>3. On Simple or Lightweight Functions</strong></p>
      <p>Wrapping tiny inline functions adds mental + memory overhead without gain.</p>
      <pre>
        <code>{`// ❌ Wasteful
useCallback(() => console.log("Hi"), []);
`}</code>
      </pre>

      <p><strong>4. When Dependencies Change Often</strong></p>
      <p>If dependencies frequently change, useCallback re-creates the function anyway → defeating the purpose.</p>
      <pre>
        <code>
          {`const fn = useCallback(() => doSomething(value), [value]); 
// if value updates a lot -> fn is recreated anyway`}
        </code>
      </pre>

      <img src={UseCallBackRule} alt="UseCallBackRule" style={{ marginBottom: 10 }} />

      <h1>3.How do you prevent unnecessary re-renders in React?</h1>
      <p>To prevent unnecessary re-renders in React, we use optimization techniques like React.memo, useCallback, and useMemo to stabilize references and avoid re-creating functions, objects, or expensive values. We also manage state placement carefully, use proper keys, and reduce context overuse to ensure only the necessary components update. The goal is to minimize renders without breaking UI consistency.</p>

      <h3>🚀 Core Ways to Prevent Unnecessary Re-renders</h3>
      <p><strong>1️⃣ React.memo for Functional Components</strong></p>
      <p><b>React.memo</b> prevents a component from re-rendering unless its props actually change.</p>
      <pre>
        <code>
          {`const Child = React.memo(function Child({ value }) {
  console.log("Rendered");
  return <p>{value}</p>;
});`}
        </code>
      </pre>
      <p><strong>✔ Use when:</strong></p>
      <ul>
        <li>Component receives props</li>
        <li>You want to skip renders if props are unchanged</li>
      </ul>
      <p><strong>❌ Not helpful if:</strong></p>
      <ul>
        <li>Props change every render (objects, arrays, new functions)</li>
      </ul>

      <h3>2️⃣ useCallback to Memoize Functions</h3>
      <p>Prevents new function references on every render → stops child re-rendering.</p>
      <pre>
        <code>{`const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
`}</code>
      </pre>
      <p>✔ Best used when passing a function to a memoized child.</p>

      <h3>3️⃣ useMemo to Memoize Expensive Values</h3>
      <p>Avoids recalculating heavy logic on every render.</p>
      <pre>
        <code>{`const expensiveValue = useMemo(() => heavyCalculation(data), [data]);`}</code>
      </pre>
      <p>✔ Good for large lists, calculations, filtering, sorting.</p>

      <h3>4️⃣ Avoid Recreating Objects/Arrays Inline</h3>
      <p>Inline objects/arrays create new references → triggers re-renders.</p>
      <p><strong>❌ Causes re-render:</strong></p>
      <pre>
        <code>{`<Child config={{ theme: "dark" }} />`}</code>
      </pre>
      <p><strong>✔ Fix:</strong></p>
      <pre>
        <code>{`const config = useMemo(() => ({ theme: "dark" }), []);
<Child config={config} />`}</code>
      </pre>

      <h3>5️⃣ Lift State Carefully – Don’t Store Everything at Top</h3>
      <p>More state at parent = more children re-render.</p>
      <p><strong>❌ Bad:</strong></p>
      <pre>
        <code>{`// parent holds state that child doesn't need
const [filter, setFilter] = useState("");`}</code>
      </pre>
      <p><strong>✔ Better:</strong></p>
      <ul>
        <li>Keep state where it is used</li>
        <li>Split large components into smaller ones</li>
        <li>Co-locate state</li>
      </ul>

      <h3>6️⃣ Use Keyed Rendering Properly</h3>
      <p>Keys help React track items in lists so it doesn’t re-render all items.</p>
      <p><strong>✔ Good:</strong></p>
      <pre>
        <code>{`items.map(item => <Item key={item.id} {...item} />)`}</code>
      </pre>
      <p><strong>❌ Bad (causes remount + re-render):</strong></p>
      <pre>
        <code>{`items.map((item, index) => <Item key={index} {...item} />)`}</code>
      </pre>

      <h3>7️⃣ Avoid Unnecessary Context Overuse</h3>
      <p>Context triggers re-renders for all consumers.</p>
      <p>If the value updates frequently → consider Zustand / Redux / Jotai or split contexts.</p>
      <p>❌ Heavy context → unnecessary updates</p>
      <p>✔ Split context or use state selectors in stores</p>
      <img src={UnnecessaryRenders} alt="UnnecessaryRenders" style={{ marginBottom: 10 }} />

      <h1>4. Explain immutability and why it is critical in React state management?</h1>
      <p>Immutability in React means not modifying existing state directly. Instead, you create a new copy of the data when making changes.</p>
      <p><b>Immutability = treating data as unchangeable and creating a new version when updates are needed.</b></p>
      <p><strong>❌ Mutable (wrong)</strong></p>
      <pre>
        <code>{`state.count = 5; // modifying existing value`}</code>
      </pre>
      <p><strong>✔️ Immutable (correct)</strong></p>
      <pre>
        <code>{`setState(prev => ({ ...prev, count: prev.count + 1 }));`}</code>
      </pre>

      <h3>🚀 Why Immutability is Critical in React</h3>
      <p><strong>1️⃣ It Allows React to Detect Changes (Re-render Triggering)</strong></p>
      <p>React decides whether to re-render UI by comparing the old state with the new state.</p>
      <ul>
        <li>If the reference changes → React knows something updated</li>
        <li>If you mutate state directly, the reference stays the same → React doesn’t detect change → UI won’t update</li>
      </ul>


      <p><strong>✔ Correct:</strong></p>
      <pre>
        <code>{`setItems([...items, newItem]); // new array reference`}</code>
      </pre>


      <p><strong>❌ Wrong:</strong></p>
      <pre>
        <code>{`items.push(newItem);
setItems(items); // same reference → React won’t re-render`}</code>
      </pre>

      <p><strong>2️⃣ Makes Reconciliation & Virtual DOM Diffing Efficient</strong></p>
      <p>React does a shallow comparison of objects to check differences.</p>
      <ul>
        <li>With immutable updates → cheap, fast comparison</li>
        <li>With mutations → deep comparison needed (slow), might miss changes</li>
      </ul>

      <p><strong>3️⃣ Prevents Unexpected Side Effects</strong></p>
      <p>Mutable state can lead to bugs where:</p>
      <ul>
        <li>Components update unintentionally</li>
        <li>Old references still point to changed data</li>
        <li>Debugging becomes painful</li>
      </ul>
      <p>Immutability guarantees predictable data flow.</p>

      <p><strong>4️⃣ Time Travel Debugging / Undo-Redo Features Become Easy</strong></p>
      <p>In Redux or state libraries, immutability allows:</p>
      <ul>
        <li>Going back to previous state snapshots</li>
        <li>Undo/redo history</li>
        <li>Debugging timeline</li>
      </ul>
      <p>Because each state is a separate, preserved version.</p>

      <h3>🧩 Practical Examples in React</h3>
      <p><strong>Updating Objects</strong></p>
      <p>❌ Wrong (mutating):</p>
      <pre>
        <code>{`user.name = "Alex"; 
setUser(user);`}</code>
      </pre>
      <p>✔ Correct (immutable):</p>
      <pre>
        <code>{`setUser(prev => ({ ...prev, name: "Alex" }));`}</code>
      </pre>

      <p><strong>Updating Arrays</strong></p>
      <p>❌ Wrong</p>
      <pre>
        <code>{`tasks.push(newTask);
setTasks(tasks);
`}</code>
      </pre>
      <p>✔ Correct</p>
      <pre>
        <code>{`setTasks(prev => [...prev, newTask]);
`}</code>
      </pre>

      <p><strong>Nested Structures</strong></p>
      <p>❌ Wrong</p>
      <pre>
        <code>{`state.profile.address.city = "Delhi";`}</code>
      </pre>
      <p>✔ Correct</p>
      <pre>
        <code>{`setState(prev => ({
  ...prev,
  profile: {
    ...prev.profile,
    address: {
      ...prev.profile.address,
      city: "Delhi"
    }
  }
}));
`}</code>
      </pre>

      <h1>5.  How does key prop impact rendering? What goes wrong with index as key?</h1>
      <p>The key prop in React helps identify list items for efficient re-rendering. Using a stable unique ID ensures correct mapping of components. Using the index as a key can cause bugs with reordering, insertions, deletions, and component state because React may reuse DOM nodes incorrectly.</p>

      <p><strong>Example:</strong></p>
      <pre>
        <code>{`const items = ['A', 'B', 'C'];
// initial render with index keys: 0, 1, 2

// remove 'A'
const newItems = ['B', 'C'];
`}</code>
      </pre>
      <ul>
        <li>If keys are indices, React thinks 'B' is still key 0, so it reuses 'A'’s DOM node.</li>
        <li>The content is correct, but any internal state (like inputs) will be wrong.</li>
        <li>If keys are unique IDs, React correctly matches 'B' to 'B'’s previous DOM node.</li>
      </ul>

      <h3>✅ Best Practice</h3>
      <ul>
        <li>Always use a stable, unique identifier from your data (like id).</li>
        <li>Only use index as a last resort, and only if:
          <ol>
            <li>The list is static and never reordered</li>
            <li>Components inside the list don’t hold state</li>
          </ol>
        </li>
      </ul>

      <h1>6.What are Higher Order Components vs Custom Hooks? When would you use each?</h1>
      <p>Higher-Order Components (HOCs) and Custom Hooks are both ways to reuse logic in React, but they work differently and are used in different scenarios.</p>
      <h3>🔼 Higher-Order Components (HOCs)</h3>
      <p><strong>Definition</strong></p>
      <p>A Higher-Order Component is a function that takes a component and returns a new component with added functionality.</p>
      <pre>
        <code>
          {`const withLogger = (WrappedComponent) => {
  return function Enhanced(props) {
    console.log("Rendered with props:", props);
    return <WrappedComponent {...props} />;
  };
};
`}
        </code>
      </pre>

      <p><strong>Usage:</strong></p>
      <pre>
        <code>
          {`const UserWithLogger = withLogger(User);
`}
        </code>
      </pre>

      <p><strong>When to Use HOCs</strong></p>
      <ul>
        <li>You need to enhance or wrap UI components with extra features.</li>
        <li>Adding props or injecting data into components.</li>
        <li>Cross-component concerns like:
          <ul>
            <li>Authentication wrappers (e.g., ProtectedRoute)</li>
            <li>Theming or layout wrappers</li>
            <li>Feature toggles</li>
            <li>Conditional rendering based on user roles</li>
          </ul>
        </li>
      </ul>


      <p><strong>Pros</strong></p>\
      <ul>
        <li>Can inject or modify props</li>
        <li>Good for UI wrapping</li>
      </ul>
      <p><strong>Cons</strong></p>
      <ul>
        <li>Can lead to wrapper hell (nested HOCs)</li>
        <li>Harder to debug</li>
        <li>Not as clean as hooks for pure logic sharing</li>
      </ul>

      <h3>sharing🪝 Custom Hooks</h3>
      <p><strong>Definition</strong></p>
      <p>A custom hook is a reusable function starting with use that contains stateful or side-effect logic, and can be shared across components.</p>
      <pre>
        <code>
          {`function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);

  return data;
}`}
        </code>
      </pre>

      <p><strong>Usage:</strong></p>
      <pre>
        <code>{`const data = useFetch("/api/users");`}</code>
      </pre>

      <p><strong>When to Use Custom Hooks</strong></p>
      <ul>
        <li>Sharing logic, not UI</li>
        <li>Reusing stateful logic: fetching, forms, timers, auth state</li>
        <li>Avoiding duplication across components</li>
        <li>Logic that doesn't require UI wrapping</li>
      </ul>

      <p><strong>Pros</strong></p>
      <ul>
        <li>Clean & readable</li>
        <li>No render wrappers</li>
        <li>Best for logic reuse</li>
        <li>Replaced many HOC use cases in modern React</li>
      </ul>
      <p><strong>Cons</strong></p>
      <ul>
        <li>Can't wrap or modify UI</li>
        <li>Can't force props, only return values or handlers</li>
      </ul>

      <h1>7.How would you design a scalable frontend architecture for a large application?</h1>
      <p>I would design a scalable frontend by using a feature-based architecture, separating UI, state, and services. Reusable UI components live in a shared library, business logic goes into custom hooks or domain layers, and network requests are centralized. I would apply code-splitting, global state tools like Redux Toolkit/React Query, automated testing, and CI/CD to ensure scalability as the project grows.</p>
      <h3>🚀 Core Principles of Scalable Frontend Architecture</h3>
      <p><strong>1.Separation of Concerns</strong></p>
      <ul>
        <li>UI, state, network logic, and routing should be clearly separated.</li>
      </ul>

      <p><strong>2.Feature-based or domain-based structure</strong></p>
      <ul>
        <li>Group files by features, not file type to avoid a massive /components folder mess.</li>
      </ul>

      <p><strong>3.Reusability & DRY</strong></p>
      <ul>
        <li>Shared logic via custom hooks, utilities, services, and design system components.</li>
      </ul>

      <p><strong>4.Performance & Code Splitting</strong></p>
      <ul>
        <li>Load only what users need; lazy load routes, optimize bundle.</li>
      </ul>

      <h3>🏗️ Recommended Folder Structure (Industry Standard)</h3>
      <p>Feature-Based Architecture</p>
      <pre>
        <code>{`src/
  app/                   # App-wide setup (router, store, providers)
  components/            # Truly shared UI components (buttons, modals, inputs)
  features/
    auth/
      pages/
      components/
      hooks/
      services/
      auth.slice.ts
    dashboard/
    users/
    products/
  hooks/                 # Reusable logic (useFetch, useBreakpoints, etc.)
  services/              # API calls, axios instance, caching, interceptors
  store/                 # Redux/Zustand/Recoil setup
  utils/                 # Formatters, validators, helpers
  styles/                # Global styles, themes, variables
`}</code>
      </pre>

      <p>✔ Each feature maintains its own pages, API, state, and components.</p>
      <p>✔ Reduces coupling, easy for team scaling.</p>
      <p>✔ Developers work without stepping on each other's code.</p>

      <h3>🧱 Layered Architecture</h3>
      <pre>
        <code>{`| Layer                 | Responsibility                            |
| --------------------- | ----------------------------------------- |
| **Presentation (UI)** | Components, pages, layout, styling        |
| **State / Data**      | Redux, Zustand, Recoil, or RTK Query      |
| **Services**          | API calls, caching, axios, error handling |
| **Domain Logic**      | Feature-specific business rules           |
| **Utilities**         | Helpers, constants, config                |
`}</code>
      </pre>

      <p>This ensures the UI isn’t tied to direct API calls or deeply nested logic.</p>

      <h3>🔌 API & Network Layer</h3>
      <p>Create a centralized axios instance or fetch wrapper:</p>
      <pre>
        <code>{`// services/http.ts
import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

http.interceptors.response.use(
  res => res,
  err => {
    // Global error handling (401 logout, 500 toast)
    return Promise.reject(err);
  }
);

export default http;
`}</code>
      </pre>
      <p>Each feature calls its own API module:</p>
      <pre>
        <code>{`// features/users/services/users.api.ts
export const getUsers = () => http.get("/users");
`}</code>
      </pre>

      <h3>🌐 Routing Strategy</h3>
      <p>Use route-based code splitting for performance:</p>
      <pre>
        <code>{`const Dashboard = React.lazy(() => import("../features/dashboard/pages/Dashboard"));

<Routes>
  <Route path="/dashboard" element={
    <Suspense fallback={<Loader />}>
      <Dashboard />
    </Suspense>
  }/>
</Routes>
`}</code>
      </pre>

      <h3>📦 State Management Strategy</h3>
      <p>Use the right tool for the job:</p>
      <pre>
        <code>{`| Use Case           | Best Choice             |
| ------------------ | ----------------------- |
| Local UI state     | useState / useReducer   |
| Global app state   | Redux Toolkit / Zustand |
| Server cache & API | RTK Query / React Query |
| Form Handling      | React Hook Form         |
`}</code>
      </pre>
      <p>Don't dump all state into Redux — that's how apps become unscalable.</p>

      <h3>🎨 Design System / UI Consistency</h3>
      <ul>
        <li>Create reusable components: Button, Input, Modal, Table</li>
        <li>Prefer a design system or a component library (MUI, Chakra, Tailwind + custom kit)</li>
        <li>Use a theme provider for light/dark mode & brand tokens</li>
      </ul>

      <pre>
        <code>{`styles/
  theme.ts
  variables.css
  mixins.scss
`}</code>
      </pre>

      <h3>⚡ Performance + Scalability Optimizations</h3>
      <p>✔ Lazy load heavy features</p>
      <p>✔ Memoize expensive components (React.memo, useMemo, useCallback)</p>
      <p>✔ Virtualize large lists (react-window)</p>
      <p>✔ Avoid prop drilling → context or state libs</p>

      <h3>🧪 Testing Strategy</h3>
      <pre>
        <code>{`| Layer         | Tests                 |
| ------------- | --------------------- |
| UI Components | React Testing Library |
| Logic / hooks | Jest                  |
| API Layer     | Mock service worker   |
| E2E           | Cypress               |
`}</code>
      </pre>

      <h3>🛠️ DevOps + CI/CD Considerations</h3>
      <ul>
        <li>Linting: ESLint + Prettier</li>
        <li>Formatting: Pre-commit Husky hooks</li>
        <li>Git branching strategy for teamwork (feature → dev → main)</li>
        <li>ENV config based on environment</li>
      </ul>

      <h1>Real world example for useCallback and usememo.</h1>
      <pre>
        <code>{`
import React, { useState, useMemo, useCallback } from "react";

const UserRow = React.memo(({ user, onEdit }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={() => onEdit(user)}>Edit</button>
      </td>
    </tr>
  );
});

export default function UserDashboard({ users }) {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const handleEdit = useCallback((user) => {
    alert("Editing " + user.name);
  }, []);

  return (
    <>
      <input
        placeholder="Search users..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <table>
        <tbody>
          {filteredUsers.map(user => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
`}</code>
      </pre>
      <p><strong>I use useMemo to prevent expensive operations like filtering and sorting large datasets from running on every render, and useCallback to memoize event handlers so memoized child components don’t re-render unnecessarily.</strong></p>

      <h1>React.memo.</h1>
      <p>React.memo is used to prevent unnecessary re-renders of a component.</p>
      <p>Only re-render this component if its props change.</p>

      <pre>
        <code>{`const Button = React.memo(({ label }) => {
  console.log("Rendered");
  return <button>{label}</button>;
});
`}</code>
      </pre>
      <p><strong>If the parent re-renders but label stays the same → Button will NOT re-render ✅</strong></p>
      <h3>When to Use:</h3>

      <ul>
        <li>✔ Large lists</li>
        <li>✔ Pure UI components</li>
        <li>✔ Dashboard rows / cards / tables</li>
        <li>✔ Performance-critical screens</li>
      </ul>

      <p><strong>🔥 Real-World Example (Your Use Case)</strong></p>
      <p>For a reusable table component:</p>
      <p><pre><code>{`interface TableProps {
  data: any[];
  loading?: boolean;
  onRowClick?: (row: any) => void;
}`}</code></pre></p>

      <p><strong>🔥 Bonus: Partial Utility Type</strong></p>
      <p><pre><code>{`type Props = {
  name: string;
  age: number;
};

type OptionalProps = Partial<Props>;`}</code></pre>👉 Makes all fields optional</p>
      <p><b><q><pre><code>{`Partial<Props>`}</code></pre> automatically makes all properties optional, which means TypeScript treats them as T | undefined.
        You do NOT need to manually add undefined.</q></b></p>

      <h1>Real-world</h1>
      <h1>How do you handle API errors?</h1>
      <p><strong>I use try-catch blocks to handle API failures, maintain error and loading states, display user-friendly messages, and handle different HTTP status codes. For larger applications, I prefer centralized error handling using Axios interceptors or libraries like React Query.</strong></p>
      <p><q>For server state, I prefer React Query due to built-in caching and syncing, but for complex global state and business logic, Redux Toolkit is more suitable.</q></p>

      <h3>🔥 1️⃣ Basic Error Handling (try-catch)</h3>
      <p>
        <pre><code>{`const fetchData = async () => {
  try {
    const res = await fetch("/api/data");

    if (!res.ok) {
      throw new Error("API error");
    }

    const data = await res.json();
    setData(data);

  } catch (error) {
    setError(error.message);
  }
};`}</code></pre>
      </p>

      <h3>🔥 2️⃣ Maintain Error State</h3>
      <p>
        <pre><code>{`const [data, setData] = useState([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);`}</code></pre>
      </p>

      <h3>🔥 3️⃣ Show User-Friendly UI</h3>
      <p>
        <pre><code>{`if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;`}</code></pre>
      </p>

      <h3>🔥 4️⃣ Handle HTTP Status Codes</h3>
      <p>
        <pre><code>{`if (res.status === 404) {
  throw new Error("Data not found");
}

if (res.status === 500) {
  throw new Error("Server error");
}`}</code></pre>
      </p>

      <h3>🔥 5️⃣ Axios Example (Very Common)</h3>
      <p>
        <pre><code>{`try {
  const res = await axios.get("/api/data");
  setData(res.data);
} catch (error) {
  if (error.response) {
    // Server responded with error
    setError(error.response.data.message);
  } else if (error.request) {
    // No response
    setError("Network error");
  } else {
    setError("Unexpected error");
  }
}`}</code></pre>
      </p>

      <h3>🔥 6️⃣ Centralized Error Handling (Best Practice)</h3>
      <p>Create a reusable API utility:</p>
      <p>
        <pre><code>{`export const fetchApi = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("API failed");

    return await res.json();
  } catch (error) {
    throw error;
  }
};`}</code></pre>
      </p>

      <h3>🔥 7️⃣ Global Error Handling</h3>
      <p>Use: <ul>
        <li>Axios interceptors</li>
        <li>React Error Boundaries (for UI errors)</li>
      </ul></p>

      <p>
        <pre><code>{`axios.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);`}</code></pre>
      </p>

      <h3>🔥 8️⃣ Retry & Fallback (Advanced)</h3>
      <p>
        <pre><code>{`const fetchWithRetry = async (retry = 3) => {
  try {
    return await fetchData();
  } catch (err) {
    if (retry > 0) {
      return fetchWithRetry(retry - 1);
    }
    throw err;
  }
};`}</code></pre>
      </p>

      <h3>🔥 9️⃣ Real-World Enhancements</h3>
      <p>
        <pre><code>{`✔ Show toast notifications
✔ Log errors (Sentry, LogRocket)
✔ Retry failed requests
✔ Graceful fallback UI`}</code></pre>
      </p>

      <h1>How do you structure a large React app?</h1>
      <p>In large React applications, I prefer a feature-based folder structure where each module contains its components, hooks, API logic, and state. I separate UI, business logic, and data layers, use reusable components for shared UI, and manage state using tools like Redux Toolkit or React Query depending on the complexity. This approach improves scalability, maintainability, and team collaboration.</p>

      <h3>🔹 1️⃣ Recommended Folder Structure (Feature-Based)</h3>
      <p>Instead of grouping by type (components, hooks, etc.), group by feature/module.</p>
      <p>
        <pre><code>{`src/
 ├── app/                # App setup (store, providers)
 ├── features/           # Business logic (core modules)
 │    ├── users/
 │    │    ├── components/
 │    │    ├── userSlice.ts
 │    │    ├── userAPI.ts
 │    │    ├── types.ts
 │    │
 │    ├── auth/
 │    ├── dashboard/
 │
 ├── components/         # Reusable UI (Button, Modal)
 ├── hooks/              # Custom hooks
 ├── services/           # API layer
 ├── utils/              # Helpers
 ├── types/              # Global types
 ├── routes/             # Routing config
 ├── assets/             # Images, icons
 ├── styles/             # Global styles
 └── App.tsx`}</code></pre>
      </p>

      <h3>🔥 Why Feature-Based?</h3>
      <p>
        <pre><code>{`✔ Better scalability
✔ Easier to maintain
✔ Clear separation of concerns
✔ Teams can work independently`}</code></pre>
      </p>

      <h3>🔹 2️⃣ Inside a Feature (Example: Users)</h3>
      <p>
        <pre><code>{`features/users/
 ├── components/
 │    ├── UserTable.tsx
 │    ├── UserFilter.tsx
 │
 ├── hooks/
 │    ├── useUsers.ts
 │
 ├── userAPI.ts
 ├── userSlice.ts
 ├── types.ts`}</code></pre>
        👉 Everything related to "users" stays together
      </p>

      <h3>🔹 3️⃣ Separation of Concerns</h3>
      <p>
        <pre><code>{`🧩 UI Layer
. Components
. Presentational logic
⚙️ Logic Layer
. Hooks (useUsers)
. State (Redux / Context)
🌐 Data Layer
. API calls (userAPI.ts)`}</code></pre>
      </p>

      <h3>🔹 4️⃣ API Layer Structure</h3>
      <p>
        <pre><code>{`// services/api.ts
export const api = axios.create({
  baseURL: "/api",
});`}</code></pre>
      </p>

      <p>
        <pre><code>{`// features/users/userAPI.ts
export const getUsers = () => api.get("/users");`}</code></pre>
      </p>

      <h3>🔹 5️⃣ State Management Strategy</h3>
      <p>
        <pre><code>{`. Local state → useState
. Shared state → Context
. Complex/global → Redux Toolkit / Zustand
. Server state → React Query`}</code></pre>
      </p>

      <h3>🔹 6️⃣ Reusable Components</h3>
      <p>
        <pre><code>{`components/
 ├── Button/
 ├── Input/
 ├── Modal/`}</code></pre>
        👉 Pure UI (no business logic)
      </p>

      <h3>🔹 7️⃣ Custom Hooks</h3>
      <p>
        <pre><code>{`hooks/
 ├── useDebounce.ts
 ├── useAuth.ts`}</code></pre>👉 Reusable logic
      </p>

      <h3>🔹 8️⃣ Routing Structure</h3>
      <p>
        <pre><code>{`routes/
 ├── AppRoutes.tsx
 ├── PrivateRoute.tsx`}</code></pre>
      </p>

      <h3>🔹 9️⃣ Environment & Config</h3>
      <p>
        <pre><code>{`config/
 ├── env.ts
 ├── constants.ts`}</code></pre>
      </p>

      <h3>🔥 🔟 Performance & Scaling Considerations</h3>
      <p>
        <pre><code>{`✔ Code splitting (React.lazy)
✔ Lazy loading routes
✔ Memoization
✔ API caching (React Query)
✔ Modular architecture`}</code></pre>
      </p>

      <p><pre><code>{`
/src
  ├── /assets/           # Static assets (images, fonts, etc.)
  ├── /components/       # Reusable components
  ├── /features/         # Feature-specific logic and components (could be feature folders)
  ├── /hooks/            # Custom React hooks
  ├── /layouts/          # Layout components (e.g., Header, Footer, Sidebar)
  ├── /pages/            # Page components (routes)
  ├── /services/         # API requests, utilities, external service integrations
  ├── /store/            # State management (Redux, Zustand, Context API)
  ├── /styles/           # Global styles (CSS, SASS, Styled Components)
  ├── /types/            # TypeScript types (if using TS)
  ├── /utils/            # Utility functions, helpers, and constants
  ├── /app.tsx           # App component (entry point)
  ├── /index.tsx         # Main entry point for React
  ├── /router.tsx        # Routing (React Router setup)
  └── /config/           # Environment variables and configuration files
`}</code></pre></p>

      <h1>How do you handle role-based UI?</h1>
      <p>I handle role-based UI by storing the user role (from auth) and conditionally rendering components, routes, and actions based on permissions.</p>
      <p>I implement role-based UI by storing the user's role or permissions and conditionally rendering components, routes, and actions. I prefer a permission-based approach for flexibility, and I centralize role logic using hooks or config files. I also ensure backend validation for security.</p>
      <p>I avoid scattering role checks across components and instead centralize permission logic using hooks or utility functions for maintainability and scalability.</p>

      <h3>🔹 1️⃣ Basic Idea</h3>
      <p>You get user data from:</p>
      <p>
        <pre><code>{`Login API
WT token
Global state (Redux / Context)`}</code><br /><br />

          <code>{`const user = {
  name: "Hima",
  role: "admin", // or 'user', 'manager'
};`}</code></pre>
      </p>

      <h3>🔥 2️⃣ Conditional Rendering (Basic)</h3>
      <p>
        <pre><code>{`{user.role === "admin" && <AdminPanel />}`}</code></pre>
      </p>

      <h3>🔹 3️⃣ Role-Based Button Access</h3>
      <p>
        <pre><code>{`<button disabled={user.role !== "admin"}>
  Delete User
</button>`}</code></pre>
      </p>

      <h3>🔥 4️⃣ Centralized Role Config (Best Practice)</h3>
      <p>
        Avoid hardcoding roles everywhere ❌ <br />
        <pre><code>{`const roles = {
  ADMIN: "admin",
  USER: "user",
};`}</code></pre>
      </p>

      <h3>🔥 5️⃣ Permission-Based Approach (Better than Roles)</h3>
      <p>
        Instead of roles → use permissions <br /><br />
        <pre><code>{`const permissions = {
  admin: ["read", "write", "delete"],
  user: ["read"],
};`}</code></pre></p>

      <p><pre><code>{`const canDelete = permissions[user.role].includes("delete");
{canDelete && <DeleteButton />}`}</code></pre></p>

      <h3>🔹 6️⃣ Protected Routes</h3>
      <p>
        <pre><code>{`function PrivateRoute({ children, allowedRoles }) {
  const user = useAuth();

  if (!allowedRoles.includes(user.role)) {
    return <p>Access Denied</p>;
  }

  return children;
}`}</code></pre>
      </p>

      <h3>✅ Usage</h3>
      <p>
        <pre><code>{`<PrivateRoute allowedRoles={["admin"]}>
  <AdminPage />
</PrivateRoute>`}</code></pre>
      </p>

      <h3>🔥 7️⃣ Reusable Hook (Clean Approach)</h3>
      <p>
        <pre><code>{`const usePermission = () => {
  const user = useAuth();

  const hasPermission = (action: string) => {
    return permissions[user.role]?.includes(action);
  };

  return { hasPermission };
};`}</code></pre>
      </p>

      <h3>✅ Usage</h3>
      <p>
        <pre><code>{`const { hasPermission } = usePermission();

{hasPermission("delete") && <DeleteButton />}`}</code></pre>
      </p>

      <h3>🔥 8️⃣ UI + API Security (Important)</h3>
      <p>
        👉 UI restriction is NOT enough ❌<br />Always:
        <pre><code>{`.Validate roles on backend
.Secure APIs`}</code></pre>
      </p>

      <h3>🔥 9️⃣ Real-World Example (Your Case)</h3>
      <p>For a table:</p>
      <p>
        <pre><code>{`{hasPermission("edit") && <EditButton />}
{hasPermission("delete") && <DeleteButton />}`}</code></pre>
      </p>
      <p>👉 Different users see different actions</p>

      <h3>🔥 🔟 Menu / Sidebar Control</h3>
      <p>
        <pre><code>{`const menuItems = [
  { label: "Dashboard", roles: ["admin", "user"] },
  { label: "Admin Panel", roles: ["admin"] },
];`}</code></pre>
      </p>

      <p>
        <pre><code>{`menuItems
  .filter(item => item.roles.includes("user"))
  .map(item => <MenuItem key={item.label} {...item} />);`}</code></pre>
      </p>

      <h3>🧠 Advanced (Senior-Level)</h3>
      <p>
        <ul>
          <li>Use RBAC (Role-Based Access Control)</li>
          <li>Prefer Permission-Based (PBAC) for flexibility</li>
          <li>Store auth in:
            <ul>
              <li>Context</li>
              <li>Redux</li>
            </ul>
          </li>
          <li>Cache user role (avoid repeated API calls)</li>
        </ul>
      </p>
    </div>
  );
}

export default ReactJsQs;
