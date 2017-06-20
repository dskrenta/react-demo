import React, { Component } from 'react';

import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import OnboardingSelect from './onboardingSelect';

const STEPS = 4;

class Onboarding extends Component {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= STEPS - 1,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <TextField floatingLabelText="Name" fullWidth={true} value="David Skrenta" disabled/>
            <TextField floatingLabelText="Zip Code" fullWidth={true}/>
            <TextField floatingLabelText="Username" fullWidth={true}/>
          </div>
        );
      case 1:
        return (
          <OnboardingSelect />
        );
      case 2:
        return (
          <h1>Representatives to follow</h1>
        );
      case 3:
        return (
          <h1>Review your selections</h1>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Personal details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Causes selection</StepLabel>
          </Step>
          <Step>
            <StepLabel>Follow representatives</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12, textAlign: 'center'}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                />
                <RaisedButton
                  label={stepIndex === STEPS - 1 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Onboarding;
