# pact-docker-issue

This is a repo with code to reproduce the issue with Pact and Node Alpine image [pact-foundation/pact-js/issues/296](https://github.com/pact-foundation/pact-js/issues/296).

## Reproduce

```
docker build .
```

## Result

```
[2019-04-23T22:00:08.256Z]  WARN: pact-node@8.1.2/26 on 6ef9934a5998: Pact exited with code 127.
 FAIL  ./pact.test.js
  dummy pact verification
    ✕ should validate the expectations of Our Little Consumer (98ms)

  ● dummy pact verification › should validate the expectations of Our Little Consumer

    /bin/sh: ./standalone/linux-x64-1.64.0/bin/pact-provider-verifier: not found

      at ChildProcess.<anonymous> (node_modules/@pact-foundation/pact-node/src/verifier.ts:156:55)
```