[2020-11-01]
EXAMPLE: Mocha/Chai/Bluebrid/Sinon

using: mocha chai bluebird sinon
1. unit test run by mocha
2. unit test assertion by chai
3. promise create and test 
    with sinon stub / restore 

[2020-11-5]
EXAMPLE: Typescript in nodejs

typescript install: npm i -g typescript
generate tsconfig.json for ts compile: tsc --init
 - setup tsconfig.json for root folder(./ts/src) /dist folder(./ts/dist)/node module
install typescript dependencies: npm i -D typescript ts-node nodemon @types/node @types/express
create app.ts file in ./ts/src folder
 - create a api on 5000 port via express

[2020-11-07]
EXAMPLE: spawn / fork
./threads/child.js & parent-(fork/spawn).js
- fork: generate new v8 instance
- spawn: don't generate new v8 instance

[2020-11-08]
EXAMPLE: docker 
https://www.youtube.com/watch?v=bhBSlnQcq2k
docker --version / docker pull $imageName / docker ps / docker image / 
docker run -d nginx:latest: run the latest version NGINX in container
docker run --name mytest -d -p 8080:80 nginx:latest
docker container ls: show ps in container
docker stop  $containerID: 
docker rm $ID;
docker ps -aq: a: all , q:quit(only show IDs)
  - set $format with json, to setup display format
  - docker ps --format=$format, show all container in format
docker rm -f $(docker ps -aq): f: force to effect to all,even it's a null
- v, volume: share file among host and containers (ro: read only). 
             two containers can share volume, by " --volumes-from container-name"
    - ro: read only. default(without:ro) is read-write.
    - if you run the follow, in ${workspaceFolder}, then you can test http://localhost:8080/app.js
    - docker run --name myNginx -v $(pws):/usr/share/nginx/html:ro -d -p 8080:80 nginx:latest
    - docker run --name mytest -v C:/DevEnv/NodejsDemos/mochatest:/usr/share/nginx/html:ro -d -p 8080:80 nginx:latest
docker exec -it mytest bash: go inside docker container of mytest, show CLI prompt
docker image ls: show all image list of docker
- Dockerfile : script includes steps for building a container
    - FROM( using image) / ADD (add host file to container)
    - docker build --tag $containerName:@tag $pathOfDockerfile  [build a image via Dockerfile]
    - docker run --name test1 -d -p 8081:8080 $containerName:@tag      [run conainer via the image]
    - ///////////hostPort:containerPort////containerName:tag//////
[2020-11-13]
- example for Dockerfile
    - create Dockerfile in project root folder
       FROM node:latest
        WORKDIR /mochatest
        ADD . .
        RUN npm install
        CMD npm start
    - docker build -t mochatest:latest .
    - docker run --name mochatest -d -p 8080:5000 mochatest:latest


[2020-11-17]
Docker
    caching layers
    - add .dockerignore file with content of files/folders to be ignored in root of workingFolder
GIT: setup trace upstream branch
    - local working and remote working branch : feature/caching_layers
    - setup local working branch to tracing remote main branch
1. git branch: be sure you are in your own working branch 'feature/caching_layers'
2. git branch -u origin/main: create a local branch 'origin/main' which points to remote main branch
3. git branch --set-upstream-to=origin/main : set local current branch 'feature/caching_layers' upstream tracing branch is origin/main(remote main branch)
4. git push origin feature/caching_layers: push to remote branch feature/caching_layers( now local branch feature/caching_layers is tracing remote branch feature/caching_layers)