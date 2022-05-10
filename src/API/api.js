import axios from "axios";

export const fetchUsers = async () => {
    const response = await axios.get('https://api.github.com/users?per_page=100&since=0')
    return response.data
}

export const fetchUser = async (username) => {

    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
}

