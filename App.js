import React from "react";
import Firebase_provider from "./firebase/Firebase_provider";
import Rest_of_app from "./Components/Rest_of_app";
function App() {
  return (
    <Firebase_provider>
      <Rest_of_app />
    </Firebase_provider>
  );
}

export default App;
