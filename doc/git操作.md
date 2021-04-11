## 分支操作 1

1. 本地创建分支并提交到远程

```
git checkout -b [new_branch]
git push origin [new_branch]
```

2. 删除分支

```
git branch -d | -D [branch_name]
```

3. 删除远程分支

```
git push origin -d [branch_name]
```

4. 将本地的远程查询更新(当远程删掉仓库时，本地执行这个命令可以同步)

```
git remote update origin --prune
```

## merge 操作

1.

## upstream

1. 一个分支的 upstream 与远程分支关联，在 git 中，默认使用此分支推送及拉取分支信息

```
git branch --set-upstream-to=origin/[branch_name]
git branch -u origin/[branch_name]
```

2. 取消当前分支的 upstream

```
git branch --unset-supstream
```

## fetch（远程版本库更新，需要拉取回本地，不会对本地代码有影响）

1. 将主机的所有更新，拉取回本地

```
git fetch
```

## pull（远程版本库更新，需要拉取回本地，再与本地的指定分支合并）

1. 将主机的所有更新，拉取回本地

```
git pull
```

2. fetch 达到这样的效果

```
git fetch
git merge FETCH_HEAD
```

## push（将本地分支的更新，推送到远程）

```
git push [origin] [branch_name]
```

## cherry pick

## vscode 中 git commit 规范

安装 `git-commit-plugin`插件
