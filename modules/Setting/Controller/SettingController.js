
var SettingController = BaseController.extend({
    configuracoes: null,

    init:function($scope, $http, Configuracoes){
        this.configuracoes = new Configuracoes();
        this._super($scope, $http);
    },

    defineScope:function() {
        var self = this;
        this.configuracoes.getConfiguracoes(1).then(function(response) {
            self.$scope.config = response.data[1];
        });
    },
    
    addSetting: function() {
        var values = this.$scope.config;
        this.configuracoes.setConfiguracoes(values);
    }
});

SettingController.$inject = ['$scope','$http','Configuracoes'];

