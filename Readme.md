# 動作確認方法
```
$ docker-compose build
$ docker-compose run frontend /bin/bash -c "cd ccc_frontend && yarn install"
$ docker-compose up
```
`localhost:8000`でDjangoに`localhost:3000`でNuxt.jsを確認できる
