export default ({ store, redirect }) => {
  if (!store.getters['user/hasToken']) {
    redirect('/')
  }
}
