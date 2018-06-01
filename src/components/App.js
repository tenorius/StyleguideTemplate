import React, { Component } from 'react';
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  FontIcon,
  Card,
  CardTitle,
  CardText
} from 'react-md';
import './App.css';
import Highlight from 'react-highlight';

class App extends Component {



  render() {

    const codeExample =
`function teste() {
  var teste = "teste";
}`;
    const HomeIcon = () => <FontIcon>home</FontIcon>;
    const InfoIcon = () => <FontIcon>info_outline</FontIcon>;
    const StarIcon = () => <FontIcon>star</FontIcon>;

    return (
      <div className="App"
      >
        <Toolbar
          title="Styleguide"
          colored
          className="md-drawer-relative"
        />
        <Drawer
          id="simple-drawer-example"
          header={(
            <Toolbar
              title='Company XPTO'
              className="md-divider-border md-divider-border--bottom "
            />
          )}
        >
          <List style={{"textAlign": 'left'}}>
            <ListItem leftIcon={HomeIcon()} primaryText="Home" />
            <ListItem leftIcon={InfoIcon()} primaryText="Getting started" />
            <ListItem leftIcon={StarIcon()} primaryText="Demos" nestedItems={
              <div>
                <ListItem primaryText="demo a"/>
                <ListItem primaryText="demo a"/>
                <ListItem primaryText="demo a"/>
              </div>
            } />
          </List>
        </Drawer>
        <main className="main md-drawer-relative">
          <section className='main--content md-grid'>
            <Card className="md-cell md-cell--12">
              <CardTitle title="Using CardTitle" subtitle="With CardText" />
              <CardText>
                <p>
                  The <code>CardText</code> component is really just useful for displaying any
                  content with some additional padding.
                </p>
                <Highlight className='javascript'>
                  {codeExample}
                </Highlight>
              </CardText>
            </Card>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
[]