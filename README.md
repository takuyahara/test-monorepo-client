TEST-MONOREPO-CLIENT

### History

### [Latest](https://github.com/takuyahara/test-monorepo-client)

[`degit`](https://github.com/Rich-Harris/degit) is used to clone repository partially. No need to run git commands and files/folders can be placed anywhere.

`postCreateCommand.sh`

```sh
#!/bin/bash
npx degit takuyahara/test-monorepo-master/greeter/src#greeter@latest greeter
```

### [c724628](https://github.com/takuyahara/test-monorepo-client/tree/c724628332891880925a0c308d80a6b31f403dac)

Pull submodule's update and switch to new version.

Config:

```bash
$ git -C greeter pull
$ git -C greeter checkout greeter@0.0.3
```

Test:

```bash
$ node index.js
$
```

### [ebaabfc](https://github.com/takuyahara/test-monorepo-client/tree/ebaabfcd2be01738cff4a2aa6b169a50f645b86e)

Switch submodule to another version.

Config:

```bash
$ git -C greeter checkout greeter@0.0.1
Previous HEAD position was 9bf7175 Update: greet in various languages
HEAD is now at 649d275 Added: greeter
```

Test:

```bash
$ node index.js
Assertion failed: Cannot greet in French.
$
```

### [4ba411f](https://github.com/takuyahara/test-monorepo-client/tree/4ba411f19248eaafeeca64cc4065de4394be8157)

Add submodule and use it.

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
