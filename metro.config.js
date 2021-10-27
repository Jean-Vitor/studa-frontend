// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// module.exports = getDefaultConfig(__dirname);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve('./filesTransformer.js'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg" && ext !== "css"),
      sourceExts: [...sourceExts, 'css', 'svg'],
    },
  };
})();
