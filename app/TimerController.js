app.controller('TimerController', function($scope, Contador, $http) {
    $http.get( 'rest/procedimento/14' ).success( function ( data, status, headers, config ) {
        console.log( data );
        $scope.users = data;
    });
    var contador = new Contador(0, $scope);
    
    $scope.start = function(SS) {
        contador.refreshCount(SS);
        $scope.teste = contador.getTime();
        console.log('-------------');
        console.log($scope.teste);
//        console.log();
    };
    
    return false;
//    
//    function atualizaContador(SS) {
//        var ss = parseInt(SS / 1000); //Determina a quantidade total de segundos que faltam
//        var mm = parseInt(ss / 60); //Determina a quantidade total de minutos que faltam
//        var hh = parseInt(mm / 60); //Determina a quantidade total de horas que faltam
//        var dd = parseInt(hh / 24); //Determina a quantidade total de dias que faltam
//
//        ss = ss - (mm * 60); //Determina a quantidade de segundos
//        mm = mm - (hh * 60); //Determina a quantidade de minutos
//        hh = hh - (dd * 24); //Determina a quantidade de horas
////        console.log(ss);
//        //O bloco abaixo descreve monta o que vai ser escrito na tela
//        var faltam = '';
//        faltam += (dd && dd > 1) ? dd+' dias, ' : (dd==1 ? '1 dia, ' : '');
//        faltam += (toString(hh).length) ? hh+':' : '';
//        faltam += (toString(mm).length) ? mm+':' : '';
//        faltam += ss;
//        
//        if (SS < 0) {
//            return false;
//        }
//        if (dd+hh+mm+ss > 0) {
//            angular.element('.timer').text(faltam);
//            setTimeout(function(){atualizaContador(SS - 1000)},1000);//Reinicia a função a cada um segundo
//        } else {
//            angular.element('.timer').text(faltam);
//            setTimeout(function(){atualizaContador(SS - 1000)},1000);
//        }
//    }
//    function atualizaContador(YY,MM,DD,HH,MI) {
//        var SS     = 00; //Segundos
//        var hoje   = new Date(); //Dia
//        var futuro = new Date(YY,MM-1,DD,HH,MI,SS); //Data limite do contador
////
//        var ss = parseInt((futuro - hoje) / 1000); //Determina a quantidade total de segundos que faltam
//        var mm = parseInt(ss / 60); //Determina a quantidade total de minutos que faltam
//        var hh = parseInt(mm / 60); //Determina a quantidade total de horas que faltam
//        var dd = parseInt(hh / 24); //Determina a quantidade total de dias que faltam
//
//        ss = ss - (mm * 60); //Determina a quantidade de segundos
//        mm = mm - (hh * 60); //Determina a quantidade de minutos
//        hh = hh - (dd * 24); //Determina a quantidade de horas
//
//        //O bloco abaixo descreve monta o que vai ser escrito na tela
//        var faltam = '';
//        faltam += (dd && dd > 1) ? dd+' dias, ' : (dd==1 ? '1 dia, ' : '');
//        faltam += (toString(hh).length) ? hh+':' : '';
//        faltam += (toString(mm).length) ? mm+':' : '';
//        faltam += ss;
//        
////        console.log($scope.$watch);return false;
//        
//        if (dd+hh+mm+ss > 0) {
////            $('.timer').text(faltam);
//            setTimeout(function(){atualizaContador(YY,MM,DD,HH,MI)},1000);//Reinicia a função a cada um segundo
//        } else {
//            $('.timer').text('00:00:00');
//            setTimeout(function(){atualizaContador(YY,MM,DD,HH,MI)},1000);
//        }
//    }
});
