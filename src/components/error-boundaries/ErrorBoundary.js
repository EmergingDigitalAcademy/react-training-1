import { Component } from 'react';
import ErrorBoundaryChild from './ErrorBoundaryChild';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  toggleError = () => {
    this.setState({ hasError: !this.state.hasError });
  }

  componentDidCatch(error, info) {
      this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Error!</h1>
              <p className="col-md-8 fs-4">
                The child component has crashed.
              </p>
              <button className="btn btn-danger btn-lg" type="button" onClick={this.toggleError}>
                {this.state.hasError ? 'Hide Error' : 'Trigger Error'}
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
