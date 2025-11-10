# Summary

Given a sufficiently complex monorepo, PNPM will get confused with resolving peerDependencies.  
The issue can be observed on `pnpm@10.12.2` and later.  

This repository contains:
- A mix of Vue 2 and Vue 3 projects. 
  - The problem is observed when using `@vue/test-utils@1` which has a peerDependency on `vue-template-compiler@^2.x` and `vue@2.x`
  - Using `@vue/test-utils` sometimes reveals that Vue 3 is imported instead of Vue 2 despite the peer dependency on `vue@2.x`
- A `pnpm run reset` script to clean up before testing

## Steps to reproduce

**Note:** I am running this on MacOS Tahoe (26.x).  
I also suspect both of the bugs listed below are the same bug.

### Non-deterministic `pnpm install`

- Run `npm i -g pnpm@10.18.3`
- Run `pnpm run reset`
- Run `pnpm install`
- Run `pnpm --filter project3-vue2 test`. The unit test passes.
- Run `pnpm install`
- Run `pnpm --filter project3-vue2 test`. The unit test will fail.

### Peer dependency bug

- Change the main `package.json` to contain `"packageManager": "pnpm@10.12.1"`
- Go through the same steps as above. The unit test will never fail.

