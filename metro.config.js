const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add resolution for Firebase subpath exports
config.resolver.sourceExts = [...config.resolver.sourceExts, "mjs", "cjs"];
config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
};

module.exports = withNativeWind(config, { input: "./constants/global.css" });