import React from 'react';
import {Grid,Paper,Typography} from '@material-ui/core'

export const Trial = () => {
    return(
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Paper>
                    <Typography>Just for Trial 1</Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <Typography>Just for Trial 1</Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <Typography>Just for Trial 1</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}