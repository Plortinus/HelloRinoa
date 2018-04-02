# Just For Fun

# gitignore不生效解决方法

## 解决代码

```bash
git rm -r --cached .
git add .
git commit -m 'We really don't want Git to track this anymore!'
```

## 原因
.gitignore只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。

## 解决思路
先把本地缓存删除，然后再提交。