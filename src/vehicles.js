export default new Array(1000).fill().map(() => ({
  name: Math.random()
    .toString(36)
    .substring(2, 15),
  lat: 37.76 + Math.random() * 0.04,
  lng: -(122.4 + Math.random() * 0.07),
  enabled: !!Math.floor(Math.random() * 2),
  has_fuel: !!Math.floor(Math.random() * 2),
  is_cool: !!Math.floor(Math.random() * 2),
}))
