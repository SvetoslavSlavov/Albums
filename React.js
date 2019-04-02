----------------------------------------------------PACKAGE.JSON----------------------------------------------------------------
{
  "name": "express-react-boilerplate",
  "version": "0.0.1",
  "description": "Express React boilerplate",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js",
    "test": "node ./node_modules/mocha/bin/mocha",
    "x":"webpack",
    "webpack": "node node_modules/webpack-cli/bin/webpack.js --config webpack.config.js --progress"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@bitbucket.org/hristo939393/express-react-boilerplate.git"
  },
  "engines": {
    "node": ">= 9.4.0"
  },
  "author": "",
  "license": "ISC",
  "homepage": "https://bitbucket.org/hristo939393/express-react-boilerplate#readme",
  "devDependencies": {
    "@fortawesome/fontawesome-pro": "^5.7.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "chai": "^4.1.2",
    "eslint": "^4.16.0",
    "eslint-plugin-react": "^7.6.0",
    "mocha": "^5.0.1",
    "morgan": "^1.9.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "supertest": "^3.0.0",
    "@babel/core": "^7.2.2",
		"@babel/plugin-syntax-dynamic-import": "^7.2.0",
		"@babel/plugin-transform-regenerator": "^7.0.0",
    "@babel/plugin-transform-runtime": "^7.2.0",
    "@babel/plugin-proposal-class-properties": "^7.4.0",
		"@babel/preset-env": "^7.2.3",
		"@babel/preset-react": "^7.0.0",
		"@babel/register": "^7.0.0",
    "@babel/runtime": "^7.2.0",
    "babel-loader": "^8.0.5",
    "webpack": "^4.26.0",
		"webpack-cli": "^2.1.4"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.15",
    "@fortawesome/free-solid-svg-icons": "^5.7.2",
    "@fortawesome/pro-light-svg-icons": "^5.7.2",
    "@fortawesome/pro-regular-svg-icons": "^5.7.2",
    "@fortawesome/pro-solid-svg-icons": "^5.7.2",
    "@fortawesome/react-fontawesome": "^0.1.4",
    "@sendgrid/mail": "^6.3.1",
    "axios": "^0.18.0",
    "body-parser": "^1.18.2",
    "boom": "^7.1.1",
    "chart.js": "^2.8.0",
    "cookie-parser": "^1.4.3",
    "css-loader": "^0.28.10",
    "dotenv": "^4.0.0",
    "draft-js": "^0.10.5",
    "draftjs-to-html": "^0.8.4",
    "ejs": "^2.5.7",
    "express": "^4.16.2",
    "express-jwt": "^5.3.1",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "fast-csv": "^2.4.1",
    "file-loader": "^3.0.1",
    "form-data": "^2.3.3",
    "gm": "^1.23.1",
    "helmet": "^3.9.0",
    "jimp": "^0.6.0",
    "joi": "^13.1.2",
    "jsonwebtoken": "^8.2.1",
    "md5": "^2.2.1",
    "mini-css-extract-plugin": "^0.5.0",
    "mobile-detect": "^1.4.2",
    "moment": "^2.23.0",
    "moment-timezone": "^0.5.23",
    "multer": "^1.3.0",
    "mysql2": "^1.5.1",
    "nib": "^1.1.2",
    "nodemon": "^1.18.10",
    "normalize-url": "^3.2.0",
    "passport": "^0.4.0",
    "react": "^16.2.0",
    "react-big-calendar": "^0.20.3",
    "react-chartjs-2": "^2.7.4",
    "react-datepicker": "^2.2.0",
    "react-dom": "^16.2.0",
    "react-draft-wysiwyg": "^1.12.20",
    "react-google-maps": "^9.4.5",
    "react-modal": "^3.8.1",
    "react-paginate": "^6.2.1",
    "react-quill": "^1.3.3",
    "react-redux": "^6.0.0",
    "react-router-dom": "^4.3.1",
    "redux": "^4.0.1",
    "redux-thunk": "^2.3.0",
    "request-promise": "^4.2.4",
    "sendgrid": "^5.2.3",
    "style-loader": "^0.20.2",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.2",
    "superagent": "^3.8.3",
    "uglifyjs-webpack-plugin": "^1.2.2",
    "uniqid": "^4.1.1",
    "url-loader": "^1.1.2"
  }
}
-----------------------------------------------------BABEL-------------------------------------------------------------------
.babelrc
  {
  "presets": [
    "@babel/preset-env", 
    "@babel/preset-react"
  ],
  "plugins":[
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import"
  ]
}
----------------------------------------In the index folder change the requre-------------------------------------------------
  module.exports = {
  BlockListPage: require("./BlockListPage"),
  BlockEditPage: require("./BlockEditPage"),
  BlockCreatePage: require("./BlockCreatePage")
};
