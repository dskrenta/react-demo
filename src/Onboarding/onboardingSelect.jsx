import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import GridList from 'material-ui/GridList';

import OnboardingSelectItem from './onboardingSelectItem';

class OnboardingSelect extends Component {
  render() {
    return (
      <div>
        <TextField floatingLabelText="Search" fullWidth={true} />
        <Card style={{marginBottom: '10px'}}>
          <CardTitle
            subtitle="Selected Causes"
          />
          <CardText>
            <GridList cols={4} cellHeight="auto" padding={10}>
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
            </GridList>
          </CardText>
        </Card>
        <Card>
          <CardTitle
            subtitle="Avaliable Causes"
          />
          <CardText>
            <GridList cols={4} cellHeight="auto" padding={10}>
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
              <OnboardingSelectItem />
            </GridList>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default OnboardingSelect;
