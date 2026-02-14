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
    </div>
  );
}

export default ReactJsQs;
