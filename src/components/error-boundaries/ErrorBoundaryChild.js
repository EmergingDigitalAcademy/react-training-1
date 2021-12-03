import { useState } from 'react';

function ErrorBoundaryChild() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Error Boundaries</h1>
        {showDetails ? (
          <p>Error details <button onClick={this.someErroringFunction()}>here</button></p>
        ) : (
          <p className="col-md-8 fs-4">
            Users don't like <strong>errors</strong> (usually). Click the button below to trigger an error. Maybe we should spend some time on making sure this button doesn't break the whole page!
          </p>
        )}
        <button className="btn btn-danger btn-lg" type="button" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Error' : 'Trigger Error'}
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundaryChild;
