import { Component } from 'react';
import ErrorBoundaryChild from './ErrorBoundaryChild';

class ErrorBoundary extends Component {
  render() {
    return (
      <div className="container" id="errors">
        <ErrorBoundaryChild />
      </div>
    );
  }
}

export default ErrorBoundary;
