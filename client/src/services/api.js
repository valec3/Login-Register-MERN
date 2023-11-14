const URL_API = 'http://localhost:3000/api';

export const register = async (user) => {
    const response = await fetch(`${URL_API}/signup`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export const login = async (user) => {
    const response = await fetch(`${URL_API}/signin`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}