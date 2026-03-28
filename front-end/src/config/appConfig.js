const isLocalhost = window.location.hostname === 'localhost';

const config = {
    apiBaseUrl: isLocalhost
        ? import.meta.env.VITE_API_URL_LOCAL
        : import.meta.env.VITE_API_URL_REMOTE,

    timeout: 5000,
    version: '1.0.0',

    endpoints: {
        authenticate: '/api/v1/authentication/authenticate',
        register: '/api/v1/users/register',
        existsEmail: '/api/v1/users/exists/email'
    }
};

export default config;