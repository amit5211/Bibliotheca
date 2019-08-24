import { AppGlobals } from './app.global';

export const ApiEndPoints=Object.freeze({
    addAuthor:AppGlobals.AppHost+"api/Author/SaveAuthor",
    addGenre:AppGlobals.AppHost+"api/Genre/SaveGenre",
    getAuthor:AppGlobals.AppHost+"api/Author/GetAuthor",
    getGenre:AppGlobals.AppHost+"api/Genre/GetGenre",
    saveBook:AppGlobals.AppHost+"api/Book/SaveBook/",
    getBook:AppGlobals.AppHost+"api/Book/GetBook/"
})