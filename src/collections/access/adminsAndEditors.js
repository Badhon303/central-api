export const adminsAndEditors = ({ req: { user } }) => {
  if (user) {
    if (user?.role === 'admin' || user?.role === 'editor') {
      return true
    }
    return false
  }
}
