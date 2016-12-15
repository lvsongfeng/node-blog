## 博客
### 1. 初始化项目
```
npm init -y
```

### 2. bower
#### 2.1 安装bower
```
npm install bower -g
```
#### 2.2 创建bower配置文件  .bowerrc
指定bower安装的目录
```
{
  "directory":"./public/lib"
}
```
> 用bower安装的前端模块都要安装到./public/lib目录下

### 2.3 初始 bower 配置文件 bower.json
```
bower init
```
> 指定当前项目依赖哪些前端模块

> 注意当前目录名称不能有中文，不能有大写字母或其它特殊字符

> 如果初始化失败，检查一下package.json中是否有特殊字符

#### 2.4 修改.gitignore文件
忽略掉 lib和.idea目录

#### 2.5 安装bootstrap
```
bower install bootstrap --save
```
# node-blog
