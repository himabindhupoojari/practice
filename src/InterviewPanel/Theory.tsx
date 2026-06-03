import './style.css';
import React from 'react'

function Theory() {
    return (
        <div>
            <h1>Babel, npm, yarn</h1>
            <p>
                <b>Babel</b> is a JavaScript compiler (often called a "transpiler"). Its primary job is to take code written in the latest versions of JavaScript (ECMAScript 2015+) and convert it into a backwards-compatible version that can run in older browsers.<br />
                <b>Syntax Transformation:</b> Converts features like arrow functions and classes into standard functions and prototypes.<br />
                <b>JSX Support:</b> Crucial for React, as it transforms JSX syntax into regular JavaScript.<br />
                <b>Presets & Plugins:</b> Uses sets of plugins (like @babel/preset-env) to determine which features to transform based on your target environment.
            </p>

            <p><b>📦 Package Managers: npm vs. Yarn</b><br />
                Both npm and Yarn are JavaScript package managers used to install and manage dependencies, but Yarn was introduced to improve speed, reliability, and dependency handling compared to older npm versions.</p>

            <p>
                <pre><code>{`| Feature               | npm                 | Yarn                |
| --------------------- | ------------------- | ------------------- |
| Default with Node.js  | ✅ Yes              | ❌ No                |
| Lock file             | package-lock.json   | yarn.lock         |
| Speed                 | Good (improved now) | Historically faster |
| Offline cache         | Limited             | Better              |
| Dependency resolution | Good                | Very reliable       |
| Commands              | Slightly longer     | Shorter             |
| Workspaces support    | ✅                   | ✅ Excellent         |
`}</code></pre>
            </p>

            <p>
                <pre><code>{`| Action           | npm                   | Yarn                |
| ---------------- | --------------------- | ------------------- |
| Install all deps | npm install         | yarn              |
| Add package      | npm install axios   | yarn add axios    |
| Remove package   | npm uninstall axios | yarn remove axios |
| Run script       | npm run dev         | yarn dev          |
`}</code></pre>
            </p>

            <h1>when does Babel get installed?</h1>
            <p>
                <pre><code>{`Babel gets installed when:

You create a React app
Use Webpack/Vite setup
Install Babel manually`}</code></pre>
            </p>

            <p>"No, npm and Yarn are package managers and do not install Babel by default. Babel is installed separately or comes internally configured in frameworks like Create React App or Next.js."</p>
            <p>Modern frameworks increasingly use SWC or ESBuild instead of Babel for better performance, although Babel is still widely used for advanced transpilation and plugin support.</p>

            <h1>How is TSX converted?</h1>
            <p>  TSX files are processed by the TypeScript compiler, which removes type annotations and transforms JSX. In modern projects, tools like Babel, SWC, or esbuild are often used alongside or instead of Babel for faster compilation.
            </p>

            <p>Modern frameworks like Next.js use SWC and Vite uses esbuild instead of Babel because they compile TSX significantly faster</p>

            <p>SWC (Speedy Web Compiler) is a high-performance compiler written in Rust that replaces the traditional JavaScript-based tool Babel. </p>
        </div>
    )
}

export default Theory