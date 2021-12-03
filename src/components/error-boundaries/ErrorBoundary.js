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

  render() {
    return (
      <div className="container" id="errors">
        <ErrorBoundaryChild />
      </div>
    );
  }
}

export default ErrorBoundary;
