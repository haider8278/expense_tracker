import React, {useEffect, useRef} from 'react';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui';
import {SpeechState, useSpeechContext } from '@speechly/react-client';
import Main from "./components/Main/Main";
import Details from './components/Details/Details';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const {speechState} = useSpeechContext();
    const main = useRef(null);
    const executeScroll = () => main.current.scrollIntoView();
    useEffect(() =>{
        if(speechState === SpeechState.Recording){
            executeScroll();
        }
    },[speechState])
    return (
        <>
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Details title="Income" amount="50" />
                    <Details title="Expense" amount="30" />
                </Grid>
                <Grid item xs={8}>
                    <Main/>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
        </>
    )
}

export default App
