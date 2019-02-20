import React, { Component } from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Divider from 'material-ui/Divider'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  card: {
    width: 500,
    minWidth: 275,
    margin: 'auto'
  },
  screen: {
    textAlign: 'left',
  },
  second: {
    fontSize: 25
  },
  tail: {
    fontSize: 15
  }
});


class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 0,
      isStart: false
    }
    this.timer = null;
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  start() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.setState((prevState, props) => ({
        n: prevState.n+1,
        isStart: true
      }))
    }, 10)
  }

  pause() {
    clearInterval(this.timer);
    this.setState({
      isStart: false
    })
  }

  reset() {
    this.pause();
    this.setState({
      n: 0
    })
  }

  getTime() {
    return this.state.n;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.screen} >
              <span className={classes.second}>{parseInt(this.getTime()/100, 10) + 's '}</span>
              <span className={classes.tail}>{parseInt(this.getTime()%100, 10)}</span>
            </div>
            <Divider light />
            {
              this.state.isStart
              ?<Button raised color="primary" className={classes.button} onClick={this.pause}>Pause</Button>
              :<Button raised color="primary" className={classes.button} onClick={this.start}>Start</Button>
            }
            <Button raised className={classes.button} onClick={this.reset}>Reset</Button>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(StopWatch);