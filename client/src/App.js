import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import Post from './components/Posts/Post/Post';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.AppBar} position='static' color='inherit'>
                <div className={classes.headerdiv}>
                    <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </div>                
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;