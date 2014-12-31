app.factory("Configuracoes", function ($http) { 
    function Configuracoes() {
        this.configuracoes;
    }
    
    Configuracoes.prototype.getConfiguracoes = function(usuarioId) {
        var self = this;
        
        return $http.get('rest/configuracoes/' + usuarioId).then(function (response) {
            self.configuracoes = response.data;
            return response;
        });
    }
    
    Configuracoes.prototype.setConfiguracoes = function(data) {
        var self = this;
        console.log(data);
        $http.post('rest/configuracoes', data).success(function (response) {
            console.log(response);
        });
    }
    
    return Configuracoes;
});