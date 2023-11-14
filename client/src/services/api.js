const URL_API = 'http://localhost:3000/api';

export const register = async (user) => {
    const response = await fetch(`${URL_API}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}