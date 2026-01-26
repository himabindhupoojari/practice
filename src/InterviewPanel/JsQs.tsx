import './style.css';

function JsQs() {
    return (
        <div style={{ padding: "2rem" }} className='js-qs'>
            <h2>Js Interview Questions</h2>

            <h1>1. Explain the JavaScript Event Loop (Call Stack,
                Web APIs, Microtasks, Macrotasks).</h1>
            <p>
                The JavaScript Event Loop allows JavaScript to handle asynchronous tasks
                like API calls, timers, and events even though it is single-threaded.
                It works with five components:
            </p>

            <ul>
                <li>📌 Call Stack – Executes code line by line</li>
                <li>🌐 Web APIs – Browser features (setTimeout, fetch, events)</li>
                <li>⚡ Microtask Queue – Promises, async/await (highest priority)</li>
                <li>⏳ Macrotask Queue – setTimeout, events (lower priority)</li>
                <li>🔁 Event Loop – Moves tasks to the Call Stack when it's free</li>
            </ul>

            <h4>👉 Call Stack Example</h4>
            <pre>
                <code>{`function a() { 
  console.log("A"); 
}
function b() {
  a();
  console.log("B");
}
b();`}</code>
            </pre>
            <p><strong>Output:</strong> A → B</p>

            <h4>👉 Web API Example (Browser Handles Async)</h4>
            <pre>
                <code>{`console.log("Start");

setTimeout(() => {
  console.log("Timer Finished");
}, 2000);

console.log("End");`}</code>
            </pre>
            <p><strong>Output:</strong> Start → End → Timer Finished</p>

            <h4>⚡ Microtask Queue (High Priority)</h4>
            <pre>
                <code>{`console.log("1");
Promise.resolve().then(()=> console.log("Microtask"));
console.log("2");`}</code>
            </pre>
            <p><strong>Output:</strong> 1 → 2 → Microtask</p>

            <h4>⏳ Macrotask Queue (Lower Priority)</h4>
            <pre>
                <code>{`console.log("Start");
setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("End");`}</code>
            </pre>

            <p><strong>Output Order:</strong></p>
            <ul>
                <li>Start</li>
                <li>End</li>
                <li>Microtask (Promise)</li>
                <li>Macrotask (setTimeout)</li>
            </ul>

            <h3>🔥 Real-Life Understanding</h3>
            <p>Think of microtasks as VIP guests and macrotasks as normal customers.</p>
            <p>VIPs (Promises) are always served before normal customers (setTimeout).</p>

            <h3>📝 Example to Show in an Interview:</h3>

            <pre>
                <code>{`console.log("A");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask"));

console.log("B");
`}</code>
            </pre>

            <p><strong>Output:</strong></p>
            <p>A<br />
                B<br />
                Microtask<br />
                Macrotask
            </p>

            <h1>2. Difference between Promise.then(), async/await, and when to use each</h1>

            <p>Yes — Promises and async/await work together, and they are not separate technologies.
                In fact, async/await is just a cleaner syntax built on top of Promises.
                So yes, you can use promises inside async/await, and you can use async/await inside promise callbacks.</p>

            <h3>.🎯 How Promises Work</h3>
            <p>A Promise represents a value that will be available now, later, or never.</p>

            <pre>
                <code>{`const data = fetch("api/url")   // returns a Promise
  .then(res => console.log("resolved"))
  .catch(err => console.log("rejected"));
`}</code>
            </pre>

            <p><strong>It uses .then(), .catch(), and .finally() to handle results.</strong></p>

            <h3>🚀 How async/await Works</h3>
            <p>async/await allows you to write asynchronous code that looks synchronous.</p>

            <pre>
                <code>
                    {`async function getData() {
  try {
    const response = await fetch("api/url"); // waiting for promise to resolve
    console.log("resolved");
  } catch (error) {
    console.log("rejected");
  }
}
`}
                </code>
            </pre>
            <p><strong>📌 async makes the function return a Promise</strong></p>
            <p><strong>📌 await pauses the execution inside the function until the promise settles</strong></p>

            <h3>🧩 Can we combine them?</h3>

            <p><strong>✔️ 1. Use Promises inside async/await</strong></p>

            <p>Yes — this is common and recommended.</p>

            <pre>
                <code>{`async function fetchUser() {
  const response = await fetch("https://api.com/user"); // Promise
  const data = await response.json(); // Promise
  console.log(data);
}
fetchUser();
`}</code>
            </pre>
            <p><strong>Here, await is just waiting for the promise to resolve.</strong></p>

            <h3>✔️ 2. Use async/await inside Promise .then()</h3>
            <p>Yes--this also works</p>
            <pre>
                <code>{`fetch("https://api.com/user")
  .then(async res => {
    const data = await res.json();
    console.log(data);
  })
  .catch(err => console.log(err));
`}</code>
            </pre>

            <p><strong>However, mixing both too much can become hard to read — but it is valid.</strong></p>

            <h3>⚠️ Avoid This Mistake</h3>
            <p>Don’t use both await and .then() on the same call — it defeats the purpose. </p>

            <p><strong>❌ Bad:</strong></p>
            <pre>
                <code>{`await fetch("url").then(res => res.json());
`}</code>
            </pre>
            <p><strong>✔️ Better:</strong></p>

            <pre>
                <code>
                    {`const res = await fetch("url");
const data = await res.json();
`}
                </code>
            </pre>

            <h3>🧨 Why async/await is just syntactic sugar?</h3>

            <p>These two are the SAME under the hood:</p>

            <p><strong>Promise Version</strong></p>
            <pre>
                <code>{`fetch("url")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
`}</code>
            </pre>
            <p><strong>Async/Await Version</strong></p>
            <pre>
                <code>{`async function getData() {
  try {
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();
`}</code>
            </pre>
            <p><strong>Async/await just makes it look cleaner.</strong></p>

            <h1>3. What are memory leaks in JavaScript? How do they happen in React apps</h1>
            <p>A memory leak in JavaScript happens when your program keeps holding onto memory that it no longer needs, preventing the garbage collector from removing unused data. As a result, memory usage keeps growing over time, which can lead to slow performance, lag, crashes, or “out-of-memory” errors.</p>

            <h3>🧠 What Causes Memory Leaks in JavaScript?</h3>
            <p>Memory leaks usually happen when references to objects remain even after they are no longer needed.</p>
            <p>Common causes:</p>
            <h3>Uncleared Timers / Intervals:</h3>
            <pre>
                <code>
                    {`setInterval(() => {
  console.log("Running...");
}, 1000); 
// No clearInterval() used -> Memory leak
`}                </code>
            </pre>

            <h3>Unused Event Listeners:</h3>
            <pre>
                <code>
                    {`window.addEventListener("resize", handleResize);
// If not removed -> reference stays forever
`}
                </code>
            </pre>

            <h3>Global Variables Growing Uncontrolled:</h3>
            <pre>
                <code>
                    {`window.cache = []; // keeps growing → memory leak`}
                </code>
            </pre>

            <h3>Closures Keeping Data Alive:</h3>
            <pre>
                <code>
                    {`function outer() {
  const bigData = new Array(100000).fill("data"); // stays referenced
  return () => console.log(bigData);
}
`}
                </code>
            </pre>

            <h3>💥 Example of Memory Leak in React?</h3>
            <pre>
                <code>
                    {`useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
}, []); // ❌ No cleanup!
`}
                </code>
            </pre>

            <p><strong>Fix (Clean Up):</strong></p>
            <pre>
                <code>
                    {`useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(id); // ✅ cleanup
}, []);
`}
                </code>
            </pre>

            <h3>🌐 API Call Example That Causes a Leak:</h3>

            <pre>
                <code>
                    {`useEffect(() => {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => setState(data)); // ❌ may run after unmount
}, []);
`}
                </code>
            </pre>

            <h3>Fix using AbortController:</h3>
            <pre>
                <code>
                    {`useEffect(() => {
  const controller = new AbortController();

  fetch("/api/data", { signal: controller.signal })
    .then(res => res.json())
    .then(data => setState(data))
    .catch(err => {
      if (err.name !== "AbortError") console.error(err);
    });

  return () => controller.abort(); // 🧹 cleanup
}, []);
`}
                </code>
            </pre>

            <h3>🛡 How to Prevent Memory Leaks in React (Checklist)</h3>

            <ul>
                <ol>✔ Always clean up useEffect:

                    <li>clearInterval, clearTimeout</li>

                    <li>remove event listeners</li>

                    <li>unsubscribe from WebSockets, Observables, etc.</li>
                </ol>

                <li>✔ Cancel async requests when component unmounts</li>
                <li>✔ Avoid storing huge objects in state unnecessarily</li>
                <li>✔ Use React DevTools & Chrome Memory Profiler to detect leaks</li>
                <li>✔ Use AbortController for fetch cleanup</li>
            </ul>

            <h1>4. Explain me the var let and const.</h1>
            <h3>🔥 Key Differences (Interview Table)</h3>
            <pre>
              <code>{`| Feature   | var           | let     | const     |
| --------- | --------------- | --------- | ----------- |
| Scope     | Function        | Block     | Block       |
| Hoisting  | Yes (undefined) | Yes (TDZ) | Yes (TDZ)   |
| Redeclare | ✅ Yes           | ❌ No      | ❌ No        |
| Reassign  | ✅ Yes           | ✅ Yes     | ❌ No        |
| Use Today | ❌ Avoid         | ✅ Yes     | ✅ Preferred |
`}</code>
            </pre>
        </div>
    );
}

export default JsQs;
