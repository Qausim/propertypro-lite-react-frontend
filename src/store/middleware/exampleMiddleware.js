export default store => next => action => {
  console.log('ACTION RE OOOOO!', action);
  next(action);
}