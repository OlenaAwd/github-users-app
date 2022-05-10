import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Container, CardActionArea, Link } from "@mui/material";


function User({ data: { login, avatar_url, html_url }, match }) {
    const navigate = useNavigate();

    const goToDetails = () => navigate(`/user/${login}`);
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100px' }}
        >
            <Grid item xs={3}>
                <Card sx={{ maxWidth: '400px', minWidth: '400px', marginBottom: '10px', marginTop: '15px' }}  >
                    <CardContent sx={{ display: 'block' }} >
                        <CardActionArea component={Link} to={'user/' + login}>
                            <Container onClick={goToDetails}>
                                <img src={avatar_url} alt={login} height="100" width="100" />
                                <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex' }}>{login}
                                </Typography>
                            </Container>
                        </CardActionArea>
                        <Typography gutterBottom variant="body1" component="div" sx={{ display: 'flex', paddingLeft: '25px' }}>
                            <Link href={html_url} target="_blank" rel="noopener" underline='none'>
                                Github profile
                            </Link>
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </Grid >
    )
}
export default User;

