export const setToken = (token) => {
    localStorage.setItem('jwtToken', token);
};
export const getToken = () => {
    return localStorage.getItem('jwtToken');
};
export const deleteToken = () => {
    localStorage.removeItem('jwtToken');
};