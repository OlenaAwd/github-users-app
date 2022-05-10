import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Container, CircularProgress, Button, Link } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../API/api";
import { getUser, userSelector } from "../redux/user";
import moment from 'moment';

export default function UserDetails() {
    const { username } = useParams();
    const { user, loading, error } = useSelector(userSelector)
    const navigate = useNavigate();
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getUser(() => (fetchUser(username))));
    }, [dispatch])

    const goBack = () => navigate(-1);


    return (
        <Container>
            <Button variant="text" onClick={goBack}>
                <ArrowBackIosIcon />Go back to Home
            </Button>
            {user ? (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100px' }}
                >
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: '400px', minWidth: '600px', marginBottom: '10px', marginTop: '15px' }}>
                            <CardContent >
                                {loading && <CircularProgress />}
                                <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex' }}>
                                    {user.name}
                                </Typography>
                                <Typography gutterBottom variant="h6">
                                    <Link href={user.html_url} target="_blank" rel="noopener" underline='none'>Github</Link>
                                </Typography>
                                <img src={user.avatar_url} alt={user.login} height="150" />
                                {(user.followers && (
                                    <Typography variant="body1" color="text.secondary">
                                        {user.followers} followers
                                    </Typography>
                                ))}
                                {(user.following && (
                                    <Typography variant="body1" color="text.secondary">
                                        {user.following} following
                                    </Typography>
                                ))}
                                {(user.created_at && (
                                    <Typography variant="body1" color="text.secondary">created at: {moment(user.created_at).format('MMMM Do YYYY')}
                                    </Typography>
                                ))}
                                {(user.company && (
                                    <Typography variant="body1" color="text.secondary">
                                        company: {user.company}
                                    </Typography>
                                ))}
                                {(user.email && (
                                    <Typography variant="body1" color="text.secondary">
                                        email: {user.email}
                                    </Typography>
                                ))}
                                {(user.blog && (
                                    <Typography variant="body1" color="text.secondary">
                                        location: {user.location}
                                    </Typography>
                                ))}
                                {(user.blog && (
                                    <Typography variant="body1" color="text.secondary">
                                        blog: {user.blog}
                                    </Typography>
                                ))}
                                {(user.bio && (
                                    <Typography variant="body1" color="text.secondary">
                                        bio: {user.bio}
                                    </Typography>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
}
