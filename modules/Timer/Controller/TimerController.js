var TimerController = BaseController.extend({
    Contador: null,
    
    init:function($scope, $http, Contador){
        this.Contador = new Contador();
        this._super($scope, $http);
    },
    
    defineScope:function(){
        this.Contador.setTime(6000);
        console.log(this.Contador.getTime());return false;
        this.$http.get('rest/procedimento/14').success( function ( data, status, headers, config ) {
            console.log( data );
        });
    }
});

TimerController.$inject = ['$scope','$http','Contador'];