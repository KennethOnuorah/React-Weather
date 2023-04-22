const getHourlyPredictions = (startingHour, times=[], temperatures=[], weatherCodes=[]) => {
  const x = [1, 2, 3, 4, 5, 6]
  const predictionIndexes = x.map((_x) => 4 * _x + startingHour)
  const predictions = predictionIndexes.map((t) => {
    const prediction = {
      time: times[t].split('T')[1],
      temperature: temperatures[t],
      weatherCode: weatherCodes[t]
    }
    return prediction
  })
  // console.log(predictions)
  return predictions
}
export { getHourlyPredictions }