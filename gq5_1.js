/**
 * Created by Hernan Y.Ke on 2015/9/4.
 */
/**
 * Created by Hernan Y.Ke on 2015/8/30.
 */
(function(scope, isForgiving){
    //
    var version = 1;
    var doc = window.document;
    var q;
    var gQ = function (selector, context) {
        return q.query(selector);
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
        doc.getElementsByTagName('head')[0].appendChild(js);
    }

    gQ.ready = function(fun){
        var last =window.onload;
        var isReady = false;

        if(doc.addEventListener){
            doc.addEventListener('DOMContentLoaded',function(){
                isReady = true;
                fun();
            });
        }

        window.onload = function(){
            if(last) last();
            if(isReady) fun();
        }
    }
    gQ.start = function(){};

    gQ.version = function(){
        return version;
    }


    gQ.ready(function(){
        if(doc.querySelectorAll&& doc.querySelectorAll('body:first-of-type')){
            q = function(param){
                //return document.querySelectorAll(param);

                q = new NativeQuery();
            };
            gQ.start();
        }else{
            loadScript('js/sizzle.min.js',function(){
                q = Sizzle;
                gQ.start();
            });
        }

    });


    NativeQuery = function(){}
    NativeQuery.prototype.query  = function(selector, context){
        context = context ||doc;
        return doc.querySelectorAll(selector);
    };

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