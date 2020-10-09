export function signIn() {
  return new Promise((require, resolve) => {
    setTimeout(() => {
      resolve({
        token: '2903uj23ij203urijijw',
        user: {
          name: 'Gabriel',
          email: 'gabrieldarin@hotmail.com'
        }
      })
    }, 2000)
  })
}

// return new Promise(resolve => {
//   setTimeout(() => {
//     resolve({
//       token: '2903uj23ij203urijijw',
//       user: {
//         name: 'Gabriel',
//         email: 'gabrieldarin@hotmail.com'
//       }
//     });
//   },2000);
// });
