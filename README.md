# Redux 7 multi commit issue

This repo is just documentation of a potential issue with redux 7.

Try the following:

1. Install vendors and run `yarn start` or `npm run start`
2. Start profiling, hit increment button, stop profiling - You should see that this results in four commits
3. Change react-redux to `^6.0.0` in `package.json`
4. Restart dev-server and retry step 2 - You should see only one commit 