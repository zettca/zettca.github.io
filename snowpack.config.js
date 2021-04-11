/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true, resolve: false },
    src: { url: "/dist" },
  },
  exclude: ["CNAME"],
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-dotenv"],
  routes: [
    /* Example: Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
  },
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
