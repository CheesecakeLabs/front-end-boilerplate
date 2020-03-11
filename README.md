# 🍰 CKL Frontend Boilerplate

## Requirements

- Yarn v1+
- Node v10+

## Features

- [📕 Storybook 5](https://storybook.js.org/docs/basics/introduction/)
- [🔴 Postcss](https://postcss.org/)
- [🌀 Webpack 4](https://webpack.js.org/)
- [🐺 Husky](https://github.com/typicode/husky)
- [💜 Eslint](https://eslint.org)
- [🖤 Stylelint](https://stylelint.io/)
- [🌎 Axios](https://github.com/axios/axios)

## How to use

1. [Create a new repository](https://github.com/new) using this boilerplate as tempalte
2. Install the dependencies: `yarn`
3. Start the web server: `yarn dev`

## Production mode

Running `yarn build` webpack will build the app into a `dist` folder and then express server will be started.

### Terraform Configuration
1. On the config file for CircleCI (/.circleci/config.yml) change all instances of `<PROJECT-NAME>` to the name of your project;
2. Add all of your project's env vars on the build command for the dockerfile
-  Example `docker build -t <PROJECT-NAME>-front --build-arg API_URL=$API_URL_LAB .`
3. On CircleCI add the following AWS env vars:
  - AWS_ACCES_KEY_ID;
  - AWS_SECRET_ACCESS_KEY;
  - AWS_REGION;
  - AWS_ECR_LAB;
  - AWS_CLUSTER_LAB;
  - AWS_ECS_FRONTEND_LAB; 
  - AWS_ECS_TIMEOUT;

### Terraform Deploy
- For staging environment deploy simply merge the code you want to deploy into staging
- For lab environment deploy simply merge the code you want to deploy into lab
- For production environment deploy, first make sure it's not a friday,
then create a tag using the regex `/^v.*/`


## Good future features

- [] Add support to 🃏 Jest
- [] Setup React Router Dom
