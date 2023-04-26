import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user_id = '';
        this._user_email = '';
        this._user_chat_history = [{message_type: 'insight'}];
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUserId(userId) {
        this._user_id = userId;
    }
    setUserEmail(userEmail) {
        this._user_email = userEmail;
    }
    setUserChatHistory(userChat) {
        this._user_chat_history = userChat;
    }

    get isAuth() {
        return this._isAuth;
    }
    get userId() {
        return this._user_id;
    }
    get userEmail() {
        return this._user_email;
    }
    get userChatHistory() {
        return this._user_chat_history;
    }
}