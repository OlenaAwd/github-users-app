import React, { useEffect } from 'react';
import User from './User';
import { useDispatch, useSelector } from "react-redux";
import { getUsers, usersSelector } from "../redux/users";
import { fetchUsers } from "../API/api";
import { CircularProgress, Typography } from "@mui/material";


function Users() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(usersSelector);

    useEffect(() => {
        dispatch(getUsers(fetchUsers));
    }, [dispatch])

    return (
        <div>
            {loading && <CircularProgress sx={{ position: 'relative', display: 'inline-flex' }} />}
            {!loading &&
                !error &&
                users.map((user) => <User key={user.id} data={user} />)
            }
            {error && (
                <Typography variant="body1" align="left">
                    No users found.
                </Typography>
            )}
        </div>
    )
}

export default Users;