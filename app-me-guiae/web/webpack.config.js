module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
  },
  dependencies: {
    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest",
  },
  resolutions: {
    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest",
  },
};
