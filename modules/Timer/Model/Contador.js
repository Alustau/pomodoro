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