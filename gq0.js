/**
 * Created by Hernan Y.Ke on 2015/8/29.
 */
(function(scope, isForgiving){
    //
    var version = 1;

    var gQ = function (selector, context) {

    }

    gQ.loadJS = function(){

    }

    gQ.version = function(){
        return version;
    }

    if(!window.gQ){
        window.gQ = gQ;
    }else{
        if(isForgiving){
            window.gQ = window.gQ.version()>version ? window.gQ :gQ;
        }else{
            throw new Error("Wrong because you load twice");
        }
    }
})(window, true);