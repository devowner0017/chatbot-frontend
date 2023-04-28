import { makeAutoObservable } from "mobx";
// this._user_chat_history = [{message_type: 'insight'}];

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._is_user_db_table_created = false;
        this._user_id = '';
        this._user_email = '';
        this._user_chat_history = [];
        this._is_introduction_question = true;
        this._introduction_question_number = 0;
        this._introduction_question_list = [];
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setIsUserDbTableCreated(bool) {
        this._is_user_db_table_created = bool;
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
    setIntroductionQuestionList(list) {
        this._introduction_question_list = list;
    }

    get isAuth() {
        return this._isAuth;
    }
    get isUserDbTableCreated() {
        return this._is_user_db_table_created;
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