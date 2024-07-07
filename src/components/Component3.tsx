import React, { useContext } from "react";
import { UserContext } from "./Component1";

function Component3() {
  // const user = useContext(UserContext);

  const user = useContext(UserContext) ?? ''; // Provide an empty string as default value
  return (
    <div>
      Component 3 is called at 1 using createContext<h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

export default Component3;
