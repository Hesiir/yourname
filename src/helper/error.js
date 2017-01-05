export default Err = (message) => {
  if (__DEV__) throw new Error(message)
}