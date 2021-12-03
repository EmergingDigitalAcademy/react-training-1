import Header from './components/Header';

import ErrorBoundary from './components/error-boundaries/ErrorBoundary';
import Portal from './components/portals/Portal';
import ReactRef from './components/react-refs/ReactRef';

function App() {
  return (
    <div>
      <Header />
      <section className="my-5">
        <ErrorBoundary />
      </section>
      <section className="mb-5">
        <Portal />
      </section>
      <section>
        <ReactRef />
      </section>
    </div>
  );
}

export default App;
