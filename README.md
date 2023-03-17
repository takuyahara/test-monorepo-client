TEST-MONOREPO-CLIENT

### History

### [Latest](https://github.com/takuyahara/test-monorepo-client)

Add submodule and use it.

Master: [`9bf7175`](https://github.com/takuyahara/test-monorepo-master/commit/9bf71751a7d897311adef8caaf58c1a99cd760c5)

Config:

```bash
$ git init
$ git submodule add git@github.com:takuyahara/test-monorepo-master.git greeter && \
git -C greeter config core.sparsecheckout true && \
echo "src" > .git/modules/greeter/info/sparse-checkout && \
git -C greeter read-tree -mu HEAD
```

Test:

```bash
$ node index.js
$
```
