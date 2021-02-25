export default ({ app, redirect }) => {
  const user = app.$cookies.get('user');
  if (!user) {
    redirect('/');
  }
}
