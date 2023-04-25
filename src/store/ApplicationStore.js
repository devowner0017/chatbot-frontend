import { makeAutoObservable } from "mobx";

export default class ApplicationStore {
    constructor() {
        this.didSendSignInRequest = false;
        makeAutoObservable(this)
    }

    setSignInRequest(bool) {
        this.didSendSignInRequest = bool;
    }

    get isSignInRequest() {
        return this.didSendSignInRequest;
    }
}