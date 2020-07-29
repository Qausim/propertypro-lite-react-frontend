export default store => next => action => {
  console.log('prevState', store.getState());
  console.log('ACTION RE OOOOO!', action);
  next(action);
}