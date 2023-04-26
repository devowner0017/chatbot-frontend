import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user_id = '';
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUserId(userId) {
        this._user_id = userId;
    }

    get isAuth() {
        return this._isAuth;
    }
    get userId() {
        return this._user_id;
    }
}