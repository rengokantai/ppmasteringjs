/**
 * Created by Hernan Y.Ke on 2015/8/24.
 */
(function(win){
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

    }
})(window);