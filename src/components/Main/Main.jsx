import React,{useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
import NewTransactionForm from './Form/NewTransactionForm';
import List from './List/List';
import {ExpenseTrackerContext} from '../../context/context';
import InfoCard from '../InfoCard';
const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight:`1.5em`, marginTop:20}}>
                    {/* Info card */}
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                {/* Form */}
                <NewTransactionForm/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* List */}
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
