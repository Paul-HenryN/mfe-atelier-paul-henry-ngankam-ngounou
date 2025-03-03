// shell/src/App.js
import React, { Suspense } from "react";

// Importer dynamiquement le composant Header du micro frontend
const RemoteHeader = React.lazy(() => import("header/Header"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Chargement du header...</div>}>
        <RemoteHeader />
      </Suspense>
    </div>
  );
};

export default App;
