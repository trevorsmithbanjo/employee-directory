import axios from 'axios';


export default {
    fetchUsers: function () {
        return axios.get('https://randomuser.me/api/?results=100&nat=us&inc=name,email,picture')
            .then(res => {
                const users = res.data.results;
                return users.map(user => {
                    return {
                        firstName: user.name.first,
                        lastName: user.name.last,
                        email: user.email,
                        picture: user.picture.thumbnail
                    }
                })
            })
    }
};