# モデル

## User 

* id 
* firebase 
* name 
* profile

## Schedule

* id
* user_id 
* book_id
* comment

## Book

* id   int 
* isbn   text
* max_pages   int 
* title   text

# ビュー(一般的にはコントローラー)

# API

## User 

| メソッド |  URL  |  説明  |
| - | ---- | ---- |
|GET| /users |ユーザー一覧(admin)|
|GET |/users/:id| ユーザー情報取得(マイページ \|\| admin)|
|POST |/users |新しいユーザーを作成する|
|PUT |/users/12| ユーザー #12 を更新する|
|DELETE| /users/12|  ユーザー #12 を削除する|

## Schedule

| メソッド |  URL  |  説明  |
| - | ---- | ---- |
| GET |   /schedules               | スケジュール一覧|
| GET  |   /schedules/12            | スケジュールid12を取得|
| GET |   /schedules?user_id=12    | ユーザーid12のスケジュール一覧|
| GET |   /schedules?user_id=12&is_finished=1 | ユーザーid12の完了スケジュール一覧|
| GET |   /schedules?sort_by=deadline| ユーザーソートされたスケジュール一覧(新しい順)|
| GET |   /schedules?sort_by=-deadline| ユーザーソートされたスケジュール一覧(古い順)|
| POST |   /schedules |新しく作成する|
| PUT |  /schedules/12 |#12 を更新する|
| DELETE |  /schedules/12| #12 を削除する|

## Book
| メソッド |  URL  |  説明  |
| - | ---- | ---- |
| GET  |   /books/12            | id12を取得|
| PUT |  /books/12 |#12 を更新する(なければ追加される)|
