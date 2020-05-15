## Git 操作命令

##  一、安装Git

```
1、创建一个版本库，创建空目录

* mkdir learngit  			创建空目录  touch 创建文件

* cd  learngit                     进入目录

* pwd 								 查看目录位置
```

 ##  二、 变成GIt库

```
* git init

* ls -ah 查看GIt	库
```

2、把文件添加到版本库中

```
先创建一个文本文件

* vi readme.txt

 用git add告诉Git，把文件添加到仓库

* git add readme.txt

用git commit告诉Git，把文件提交到仓库、

* git commit -m "版本名字"
```

## 三、版本回退

```
* git log 查看历史日志

* git log --prett=oneline 简约版查看历史日志

返回上一个版本

* git resrt -- hard HAED^

返回上上个版本

* git resrt -- hard HAED^^

多个返回版本

* git resrt -- hard HAED～+你想回到的版本号

查看当前的是否在这个版本

* cat readme.txt

记录每一次命令

* git reflog

恢复版本

* git reset -- hard 版本号

查看状态

* git status

查看上次修改

* git diff readme.txt


```

## 四、工作和暂存区



```
第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；

在文本中修改文本

然后用git add把文件添加到暂存区

* git add readme.txt

第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支

* git commit -m "版本名字"

```

## 管理修改

```
查看工作区和版本库里面最新版本的区别

* git diff HEAD -- readme.txt

```

## 撤销修改

```
丢弃工作区的修改

* git checkout -- readme.txt

`git checkout -- file`命令中的`--`很重要，没有`--`，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到`git checkout`命令

## 把暂存区的修改撤销

git reset HEAD readme.txt

* git reset`命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用`HEAD`时，表示最新的版本。
```

## 删除文件

```
通常直接在文件管理器中把没用的文件删了，或者用`rm`命令删了

* rm test.txt

* Git知道你删除了文件，因此，工作区和版本库就不一致了，`git status`命令会立刻告诉你哪些文件被删除了

删除版本库文件

* git rm file

* git commit -m "remove file"

查看未跟踪将要被删除的文件，并不实际删除

* git clean -n

删除当前目录下未跟踪文件

* git clean -f

删除当前目录下未跟踪文件及文件夹运行

* git clean -df

## 
```

## 远程仓库

```
创建ssh.key

* ssh-keygen -t rsa -C "你的邮箱"

回到主目录

* cd ..

ls 查看

id_rsa.pub 公钥 id_rsa 私钥

登录GitHub 打开设置SSH.key页面

在添加新秘钥，标题任意，文本添加公钥

页面创建新存储库

在本地仓库运行

* git remote add origin  git @github.com:GitHub账户/远程库名字.git

取消远程库

* git remote remove origin

本地内容推送到远程库

* git push-u origin master

本地修改提交上传命令

* git push origin master

### 
强制拉取代码到本地仓库
git pull origin master --allow-unrelated-histories

```

### 克隆库

```
创建一个新库

勾选Initialize this repository with a README创建完成就会生成一个README.md

回到本地仓库运行

git clone git@github.com:GitHub账户/远程库名.git

clone 克隆意思
```







创建一个分支:

```
* git checkout -b dev(dev 分支名字)

* vi file  （编辑文件）

* git add file  (添加到工作区)

* git commit -m "版本名字"

* 然后推到master分支

* git checkout master
```

合并分支

```
* git merge dev

可以删除dev分支

* git branch -d dev
```

## 解决冲突

创建一个分支:

```
* git checkout -b dev(dev 分支名字)

* vi file  （编辑文件）

* git add file  (添加到工作区)

* git commit -m "版本名字"

* 然后推到master分支

* git checkout master

* vi file （编辑文件）

* git add flie

* git commit -m "版本号"

* git merge dev 

  就会发生冲突
```

## 解决方式

```
* git add flie

* git commit -m "版本名字"

* 在查看状态

* git status
```

## 分支管理策略

创建一个分支:

```
* git checkout -b dev(dev 分支名字)

* vi file  （编辑文件）

* git add file  (添加到工作区)

* git commit -m "版本名字"

* 然后推到master分支

* git checkout master
```

合并分支

```
* git merge --no-ff  -m "版本名字"dev

### 
```

BUG分支

```
当你在Dev分支工作，让你去master分支修改
用git stash进行储藏
查看位置git stashs
在master创建一个bug编号
git checkout -m "版本编号"
vi 编辑编程
git add flie
git commit -m "版本名字"
切换到master分支
然后合并修改的bug分支
删除bug分支
回到dev工作区
用git stash list查看位置
git stash pop 恢复并删除文件or用git stash apply 恢复git stash drop删除
```

功能分支

```
添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支
用git branch -D 分支名字 （强制删除）
```

多人协作

```
当你远程克隆时我们把修改的文件往远程库推送时会造成拥堵
git push origin master (推送的分支)
我们用git pull刷新远程库
```

## 标签创建

```
创建 git tag  v1.0
指定标签 git tag v0.1 版本号
查看标签git show v0.9
创建带有说明的标签，用-a指定标签名，-m指定说明文字：
git tag -a v0.1 -m "version 0.1 released" 1094adb
删除标签：git tag -d v0.1
推送标签：git push origin v1.0
一次性推送：git push origin -tags
远程删除git push origin :refs/tags/v0.9
```