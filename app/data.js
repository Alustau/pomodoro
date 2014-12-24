app.factory("Contador", function () { // This service connects to our REST API
    function Contador(time) {
        this.time = time;
        
        this.ss = parseInt(time / 1000); //Determina a quantidade total de segundos que faltam
        this.mm = parseInt(this.ss / 60); //Determina a quantidade total de minutos que faltam
        this.hh = parseInt(this.mm / 60); //Determina a quantidade total de horas que faltam
        this.dd = parseInt(this.hh / 24); //Determina a quantidade total de dias que faltam
    }
    
    Contador.prototype.getTime = function() {
        return this.time;
    }
    
    Contador.prototype.setTime = function(time) {
        this.time = time;
        return this;
    }
    
    Contador.prototype.refreshCount = function(time) {
        this.setTime(time / 1000);
        return this;
    }
    
    return Contador;
});

  
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

app.factory("Contador1", function () { // This service connects to our REST API
    function Contador(time) {
        this.time = time;
    }
    
    Contador.prototype.getTime = function() {
        return this.time;
    }
    
    return Contador;
});

//app.factor
//
//app.factory("Data", ['$http', 'toaster',
//    function ($http, toaster) { // This service connects to our REST API
// 
//        var serviceBase = '/pomodoro/api/v1/';
// 
//        var obj = {};
//        obj.toast = function (data) {
//            toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
//        }
//        obj.get = function (q) {
//            return $http.get(serviceBase + q).then(function (results) {
//                return results.data;
//            });
//        };
//        obj.post = function (q, object) {
//            return $http.post(serviceBase + q, object).then(function (results) {
//                return results.data;
//            });
//        };
//        obj.put = function (q, object) {
//            return $http.put(serviceBase + q, object).then(function (results) {
//                return results.data;
//            });
//        };
//        obj.delete = function (q) {
//            return $http.delete(serviceBase + q).then(function (results) {
//                return results.data;
//            });
//        };
// 
//        return obj;
//}]);
