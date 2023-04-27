import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user_id = '';
        this._user_email = '';
        this._user_chat_history = [{message_type: 'insight'}];
        this._is_introduction_question = true;
        this._introduction_question_number = 0;
        this._introduction_question_list = {0: 'Q1', 1: 'Q2'};
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
    setIsIntroductionQuestion(bool) {
        this._is_introduction_question = bool;
    }
    setIntroductionQuestionNumber(num) {
        this._introduction_question_number = num;
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
    get isIntroductionQuestion() {
        return this._is_introduction_question;
    }
    get introductionQuestionNumber() {
        return this._introduction_question_number;
    }
    get introductionQuestionList() {
        return this._introduction_question_list;
    }
}