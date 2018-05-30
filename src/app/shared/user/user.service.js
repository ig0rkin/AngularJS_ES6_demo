class userService {
  constructor() {
    this.user = {
      name: 'Ihor',
      surname: 'Yanovchyk',
      company: 'AzinecLLC'
    };
  }

  getUser() {
    return this.user;
  }
}

export default userService;
