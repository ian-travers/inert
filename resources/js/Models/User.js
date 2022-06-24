export default class User {
  constructor(attributes = {}) {
    Object.assign(this, attributes)
  }

  is(user) {
    return this.id === user.id
  }

  follows(user) {
    return true
  }
}
