
export class AsyncRequest{
    constructor(url,type,data,isAsync = true,onsuccess = function(data){}, onerror = function(error){}, cache = true, contentType = 'application/x-www-form-urlencoded; charset=UTF-8'){
        this.url = url;
        this.type = type;
        this.data = data;
        this.isAsync = isAsync;
        this.cache = cache;
        this.contentType = contentType;
        this.onsuccess = function(handler){
            onsuccess(handler);
        };
        this.onerror = function(handler){
            onerror(handler);
        }
    }
    response;

    requestAjax(){
        let success = this.onsuccess;
        let error = this.onerror;
        let status = '';
        $.ajax({
            url: this.url,
            type:this.type,
            data: this.data,
            async: this.isAsync,
            processData: this.cache,
            contentType: this.contentType,
            success: function(handler){
                success(handler);
                status = handler;
            },
            error: function(handler){
                error(handler);
                status = handler;
            }
        });
        this.response = status;
    }
}