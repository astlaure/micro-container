import './api-service';

const clientService = {};

clientService.getClient = () => {
    return window.apiService.get('/clientapi/api/client')
        .then(response => response);
};

if (!window.clientService) {
    window.clientService = clientService;
}