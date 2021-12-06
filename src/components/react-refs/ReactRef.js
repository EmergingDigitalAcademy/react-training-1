import { Component, createRef } from 'react';

class ReactRef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInteractive: false,
      ref: 1,
    };
    this.interval = null;
    this.inputRefOne = createRef();
    this.inputRefTwo = createRef();
  }

  toggleInteractivity = () => {
    const { isInteractive } = this.state;
    if (isInteractive) {
      clearInterval(this.interval);
      document.activeElement.blur()
    } else {
      this.inputRefOne.current.focus();
      this.interval = setInterval(() => {
        this.toggleInputFocus();
      }, 1000);
    }

    this.setState({ isInteractive: !isInteractive });
  }

  toggleInputFocus = () => {
    if (this.state.ref === 1) {
      this.inputRefTwo.current.focus();
      this.setState({ ref: 2 });
    } else {
      this.inputRefOne.current.focus();
      this.setState({ ref: 1 });
    }
  }

  render() {
    const { isInteractive } = this.state;
    return (
      <div className="container" id="errors">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">React Refs</h1>
            <p className="col-md-8 fs-4">
              Interactive elements can draw or focus the users to different places in our app (usually). Click the button below to see how we can create a cool focus effect!
            </p>
            <button className="btn btn-primary btn-lg mb-4" onClick={this.toggleInteractivity}>{isInteractive ? 'Stop Interactivity' : 'Start Interactivity'}</button>
            <input className="form-control mb-2" ref={this.inputRefOne} />
            <input className="form-control" ref={this.inputRefTwo} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactRef;
