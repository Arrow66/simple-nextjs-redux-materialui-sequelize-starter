const { parsed: localEnv } = require("dotenv").config();
console.log("localEnv", localEnv);
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

module.exports = withCSS({
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    API_URL:process.env.NODE_ENV !="PRODUCTION"?process.env.LOCAL_API_URL:process.env.LIVE_URL
  },
  serverRuntimeConfig:{
    API_URL:process.env.NODE_ENV !="PRODUCTION"?process.env.LOCAL_API_URL:process.env.LIVE_URL
  }
});
