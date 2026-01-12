import { Scene } from './components/Scene';
import { Overlay } from './components/Overlay';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <Scene />
        <Overlay />
      </div>
    </ErrorBoundary>
  );
}

export default App;
