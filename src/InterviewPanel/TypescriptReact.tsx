import React from 'react'
import './style.css';

function TypescriptReact() {
  return (
    <div className='react-qs'>
        <h1>TypeScript</h1>
      <h1>interface vs type</h1>
      <p><strong>interface is mainly used for defining object shapes, while type is more flexible and can represent any type (primitives, unions, tuples, etc.)</strong></p>

      <p><strong>🔵 1️⃣ Interface</strong></p>
      <p>🔹 Used for:<br />

        ✔ Defining object structure<br />

        ✔ Extending other interfaces<br />

        ✔ Class implementation</p>

      <p><strong>✅ Example</strong></p>
      <p>
        <pre><code>{`interface User {
  name: string;
  age: number;
}`}</code></pre>
      </p>

      <p><strong>🔹 Extending Interface</strong></p>
      <p>
        <pre><code>{`interface Employee extends User {
  role: string;
}`}</code></pre>
      </p>

      <p><strong>🔹 Declaration Merging (Important)</strong></p>
      <p>
        <pre><code>{`interface User {
  name: string;
}

interface User {
  age: number;
}`}</code></pre>
      </p>
      <p>👉 Automatically merged:</p>
      <p>
        <pre><code>{`// { name: string; age: number }`}</code></pre>
      </p>

      <p><strong>🟢 2️⃣ Type</strong></p>
      <p>🔹 More flexible:</p>
      <p>Can define:<br />

        ✔ Primitives<br />
        ✔ Unions<br />
        ✔ Tuples<br />
        ✔ Functions<br />
        ✔ Objects</p>

      <p><strong>✅ Examples</strong></p>
      <p>
        <pre><code>{`type User = {
  name: string;
  age: number;
};`}</code></pre>
      </p>

      <p><strong>✅ Union type</strong></p>
      <p>
        <pre><code>{`type Status = "active" | "inactive";`}</code></pre>
      </p>

      <p><strong>✅ Tuple</strong></p>
      <p>
        <pre><code>{`type Point = [number, number];`}</code></pre>
      </p>

      <p><strong>✅ Function type</strong></p>
      <p>
        <pre><code>{`type Add = (a: number, b: number) => number;`}</code></pre>
      </p>

      <p><strong>🔎 Extending Difference</strong></p>
      <p><b>Interface</b></p>
      <p>
        <pre><code>{`interface A {
  name: string;
}

interface B extends A {
  age: number;
}`}</code></pre>
      </p>

      <p>
        <pre><code>{`type A = {
  name: string;
};

type B = A & {
  age: number;
};`}</code></pre>
      </p>

      <h1>Optional props</h1>
      <p><b>Optional props are props that are not required when using a component.

        👉 Defined using ? in TypeScript</b></p>
      <p>Optional props help design flexible components, but it's important to handle undefined values properly using default parameters or optional chaining to avoid runtime errors.</p>

      <p><b>🔵 Basic Example</b></p>
      <p>
        <pre><code>{`interface Props {
  name: string;
  age?: number; // optional
}`}</code></pre>
      </p>

      <p>
        <pre><code>{`<p>{age.toFixed(2)}</p> // ❌ error`}</code></pre>
        <pre><code>{`<p>{age?.toFixed(2)} || {age ? age.toFixed(2) : "N/A"}</p> //✅ Fix`}</code></pre>
      </p>

      <p><strong>✅ Using Default Parameters</strong></p>
      <p>
        <pre><code>{`function User({ name, age = 18 }: Props) {
  return <p>{age}</p>;
}`}</code></pre>
      </p>

      <p><strong>🔥 Optional Props with Functions</strong></p>
      <p>
        <pre><code>{`interface Props {
  onClick?: () => void;
}`}</code></pre>
      </p>

      <p><pre><code>{`onClick(); // might crash ❌ Wrong
onClick?.();✅ Correct`}</code></pre></p>

<h1>Typing event handlers</h1>
      <p><b>In React with TypeScript, event handlers are typed using React’s synthetic event types like React.ChangeEvent, React.MouseEvent, etc.</b></p>
      <p>I usually rely on TypeScript inference by writing inline handlers and then extracting the inferred type, which ensures accuracy and saves time.</p>

      <h3>🔵 1️⃣ Input Change Event</h3>
      <p>
        <pre><code>{`const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};`}</code></pre>
      </p>

      <h3>🔵 2️⃣ Button Click Event</h3>
      <p>
        <pre><code>{`const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked");
};`}</code></pre>
      </p>

      <h3>🔵 3️⃣ Form Submit Event</h3>
      <p>
        <pre><code>{`const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};`}</code></pre>
      </p>

      <h3>🔵 4️⃣ Select Dropdown Event</h3>
      <p>
        <pre><code>{`const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(e.target.value);
};`}</code></pre>
      </p>

      <h3>🔵 5️⃣ Generic Event Handler (Reusable)</h3>
      <p>
        <pre><code>{`const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log(e.target.value);
};`}</code></pre>
      </p>
    </div>
  )
}

export default TypescriptReact