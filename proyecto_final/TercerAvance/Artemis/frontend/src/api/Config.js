export const API_IP = "192.168.121.91";

export const getApiUrl = (model) => `http://${API_IP}/Artemis/backend/api/models/${model}.php`;

export const getLoginUrl = () => `http://${API_IP}/Artemis/backend/login.php`;