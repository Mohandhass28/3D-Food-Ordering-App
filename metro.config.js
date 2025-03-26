const { getDefaultConfig } = require('expo/metro-config')

module.exports = (() => {
  const config = getDefaultConfig(__dirname)

  const { transformer, resolver } = config

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  }
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg']
  }
  ;[('js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs')].forEach(ext => {
    if (config.resolver.sourceExts.indexOf(ext) === -1) {
      config.resolver.sourceExts.push(ext)
    }
  })

  ;['glb', 'gltf', 'png', 'jpg'].forEach(ext => {
    if (config.resolver.assetExts.indexOf(ext) === -1) {
      config.resolver.assetExts.push(ext)
    }
  })
  return config
})()
