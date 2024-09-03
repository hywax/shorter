export default defineEventHandler((event) => {
  const features = getFeatures(event)

  return {
    features,
  }
})
