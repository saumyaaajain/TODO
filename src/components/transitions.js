import Paper from "@material-ui/core/Paper";
import React from "react";
import '../style/Login.css';
import ReactCardFlip from 'react-card-flip';
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = (theme) => {
    const color = ["#f50057", "YELLOW", "#3f51b5"];
    return {
        body:{
            height: "50vh",
        },
        bodyContent: {
            alignItems: "center",
            alignSelf: "centre",
            justifyContent: "centre",
            marginTop: "35vh",
            marginLeft: "5vw"
        },
        card: {
            height: "10vh",
                width: "5vw",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                fontSize: "xx-large",
        },
        backCard: {
            background: color[Math.floor(Math.random() * color.length)],
                height: "10vh",
                width: "5vw",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                fontSize: "xx-large",
        },
    }
};

class FlipCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFlippedT: false,
            isFlippedO1: false,
            isFlippedD: false,
            isFlippedO2: false,
        };
        this.handleClickT = this.handleClickT.bind(this);
        this.handleClickO1 = this.handleClickO1.bind(this);
        this.handleClickD = this.handleClickD.bind(this);
        this.handleClickO2 = this.handleClickO2.bind(this);
    }

    handleClickT() {
        this.setState((prevState) => ({ isFlippedT: !prevState.isFlippedT }));
    }
    handleClickO1() {
        this.setState((prevState) => ({ isFlippedO1: !prevState.isFlippedO1 }));
    }
    handleClickD() {
        this.setState((prevState) => ({ isFlippedD: !prevState.isFlippedD }));
    }
    handleClickO2() {
        this.setState((prevState) => ({ isFlippedO2: !prevState.isFlippedO2 }));
    }
    componentDidMount() {
        this.handleClickT();
        this.handleClickO1();
        this.handleClickD();
        this.handleClickO2();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.isFlippedT){
            setTimeout(() => {
                this.handleClickT();
            }, 1500);
        }
        else if(!this.state.isFlippedO1){
            setTimeout(() => {
                this.handleClickO1();
            }, 1500);
        }
        else if(!this.state.isFlippedD){
            setTimeout(() => {
                this.handleClickD();
            }, 1500);
        }
        else if(!this.state.isFlippedO2){
            setTimeout(() => {
                this.handleClickO2();
            }, 1500);
        }
        else{
            setTimeout(() => {
                this.setState({
                    isFlippedT: false,
                    isFlippedO1: false,
                    isFlippedD: false,
                    isFlippedO2: false
                })
            }, 1500)
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.body}>
                <div className={classes.bodyContent}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <ReactCardFlip isFlipped={this.state.isFlippedT} flipDirection="vertical">
                                <Paper className={classes.backCard}>

                                </Paper>

                                <Paper className={classes.card}>
                                    T
                                </Paper>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={3}>
                            <ReactCardFlip isFlipped={this.state.isFlippedO1} flipDirection="vertical">
                                <Paper className={classes.backCard}>

                                </Paper>

                                <Paper className={classes.card}>
                                    O
                                </Paper>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={3}>
                            <ReactCardFlip isFlipped={this.state.isFlippedD} flipDirection="vertical">
                                <Paper className={classes.backCard}>

                                </Paper>

                                <Paper className={classes.card}>
                                    D
                                </Paper>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={3}>
                            <ReactCardFlip isFlipped={this.state.isFlippedO2} flipDirection="vertical">
                                <Paper className={classes.backCard}>

                                </Paper>

                                <Paper className={classes.card}>
                                    O
                                </Paper>
                            </ReactCardFlip>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(FlipCard);
