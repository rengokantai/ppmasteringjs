/**
 * Created by Hernan Y.Ke on 2015/8/30.
 */
(function(scope, isForgiving){
    //
    var version = 1;

    var gQ = function (selector, context) {

    }

    gQ.loadJS = function(path, callback){
        var js = document.createElement('script');
        js.src = path;
        js.type = 'text/javascript';
        js.onload = function () {
            callback();
            this.onload = this.onreadystatechange = null;
        }

        js.onreadystatechange = function(){
            if(this.readyState == 'complete'){
                this.onload();
            }
        }
        document.getElementsByTagName('head')[0].appendChild(js);
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