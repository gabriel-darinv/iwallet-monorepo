interface Response {
  token: string;
  user:{
    name:string;
    email:string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '2903uj23ij203urijijw',
        user: {
          name: 'Gabriel',
          email: 'gabrieldarin@hotmail.com'
        }
      })
    }, 1000)
  })
}
