# このアプリは??
![](https://user-images.githubusercontent.com/45584045/90392712-5c9c8a80-e0ca-11ea-8cfc-5be1b8c7f197.png)
# 動作確認方法
```
$ docker-compose build
$ docker-compose run frontend /bin/bash -c "cd ccc_frontend && yarn install"
$ docker-compose up
```
`localhost:8000`でDjangoに`localhost:3000`でNuxt.jsを確認できる
