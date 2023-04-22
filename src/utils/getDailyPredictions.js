const getDailyPredictions = (times=[], temperatures=[], weatherCodes=[]) => {
  const predictions = times.map((t) => {
    const prediction = {
      time: t+"T12:00",
      temperature: temperatures[times.indexOf(t)],
      weatherCode: weatherCodes[times.indexOf(t)]
    }
    return prediction
  })
  return predictions
}
export { getDailyPredictions }