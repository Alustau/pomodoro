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
    
    Configuracoes.prototype.setTime = function(time) {
        this.time = time;
        return this;
    }
    
    Configuracoes.prototype.refreshCount = function(time) {
        this.setTime(time / 1000);
        return this;
    }
    
    return Configuracoes;
});