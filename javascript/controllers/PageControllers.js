export class PageController{
    #pages = {
    }

    getPages(){
        return this.#pages;
    }

    getCurrentPage(){
        return  location.href.toString();
    }
}