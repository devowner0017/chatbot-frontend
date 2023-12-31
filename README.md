# gpt-chatapp-frontend
Для работы приложения в .env файле обязательно должны иметься следующие поля:
REACT_APP_FIREBASE_KEY=...
REACT_APP_FIREBASE_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
REACT_APP_FIREBASE_MEASUREMENT_ID=...
REACT_APP_BACKEND_URL='http://localhost:3000/'

Для установки зависимостей и старта:
npm i
npm start

Приложение состоит из 4-х основных частей:
Бургер меню - BurgerMenuMain.jsx
Хедер - Header.jsx
Основное окно с чатом - MainChatBody.jsx
И поле ввода текста - InputWindow.jsx

Основная логика по отправке текста на сервер и обработка последующего ответа находиться в файле - InputWindow.jsx. Также здесь находиться часть логики отвечающая за отслеживание состояния вопросника после того как мы начинаем поочередно отвечать на вопросы.

Также стоит заметить, что в InputWindow.jsx есть закомментированная часть кода. Он отвечает за то, чтобы не зарегистрированные юзеры могли бы общаться с чат ботом. Так как пока решили данный функционал не предоставлять - то код отвечающий за логику был закомментирован.

Важную логику также содержит MainPage.jsx. В нем находиться следующий функционал:
Отслеживает появление новых инсайтов в чате и сохраняет их в отдельный стейт приложения
Если юзер не зарегистрирован, кеширует в локальное хранилище и берет из кеша текущею историю чата юзера
Отслележивание состояния вопросника. Подгрузка его текущей версии либо с локального хранилища либо с бека (для зарегистрированных юзеров)
Отслеживание того зарегистрирован ли юзер или нет (через Firebase). Если зарегистрирован, то с бека будет подгружаться и сохранятся чат юзера. Если юзер зарегистрировался впервые, то здесь же будет отправляться копия чата из локального хранилища на сохранение в бекенд. Также здесь сохраняются id и мыло юзера.

Все модальные окна созданы с приставкой "Modal" в их названии. Исключением стал DisplayInsight.jsx - это модалка по отображению инсайта.

При тестировании локальной версии и желании почистить приложение от скопившейся в кеше информации, достаточно в MainPage.jsx, в любом useEffect вставить следующие строки:
localStorage.removeItem('userChatHistory')
localStorage.removeItem('introductionQuestionList')

При желании (но не обязательно), можно вставить и следующие строки:
localStorage.removeItem('introductionQuestionListLength')
localStorage.removeItem('introductionQuestionNumber')
localStorage.removeItem('isIntroductionQuestion')