import { Component } from 'react';
import ErrorBoundaryChild from './ErrorBoundaryChild';
import * as Sentry from "@sentry/react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    Sentry.captureException(error);
    this.setState({ hasError: true });
  }

  resetError() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container" id="errors">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">You had an error</h1>
              <p className="col-md-8 fs-4">
                Jaryd is a big dummy, who wrote an erroring component.
              </p>
              <button className="btn btn-danger btn-lg" type="button" onClick={() => this.setState({ hasError: false })}>
                Clear Error
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container" id="errors">
        <ErrorBoundaryChild />
      </div>
    );
  }
}

export default ErrorBoundary;
