// const myPromise = new Promise((resolve, reject)=>{  // напр  fetch  ->  promise
//   resolve("friend and me");
// })

// myPromise.then(
//   (response) => {
//     console.log(response) //  "friend and me"
//   }
// )

// const myPromise = new Promise((resolve, reject)=>{  // напр  fetch  ->  promise
//     const isSuccess = true;
//     if (isSuccess) {
//       resolve("friend and me");
//     } else {
//       reject("ошибка")
//     }
//   })

//   myPromise.then(
//     (response) => {
//       console.log(response) //  "friend and me"
//     }
//   ).catch(
//     (error)  => {
//         console.error(error);// "ошибка"
//     }
//   )

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      const a = response.json();
      return a;
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson('no-such-user.json').catch(alert);

// .json() указывает объекту класса response формат получения данных.

//   async function loadJson(url) {
//     try{
//       const response = await fetch(url)
//     if (response.status == ) {
//       const result = await response.json()
//       return result;
//     } else {
//       throw new Error(response.status);
//     }
//     } catch(error) {
//       alert(error);
//     }
//   }

//   function loadJson(url){
//     fetch(url)
//     .then(response => {
//         if (response.status == 200) {
//             const result = response.json()
//             return result;
//         } else {
//             throw new Error(response.status);
//         }
//     })}

// function loadJson(url){
//     fetch(url)
//     .then(response => {
//         if (response.status == 200) {
//             const result = response.json()
//             return result;
//         } else {
//             throw new Error(response.status);
//         }
//     })}...

mariadb
  .createConnection(config)
  .then((connection) => {
    connection
      .query('INSERT INTO...')
      .then(() => {
        console.log('Успешно.');
      })
      .catch((error) => {
        console.log('Не удалось.');
        connection.end();
        throw error;
      });
    connection
      .query('INSERT INTO...')
      .then(() => {
        console.log('Успешно.');
        connection.end();
      })
      .catch((error) => {
        console.log('Не удалось.');
        connection.end();
        throw error;
      });
  })
  .catch((error) => {
    console.log('Попытка подключения не удалась.');
    throw error;
  });

async function addToDatabase(config) {
  try {
    const connect = await mariadb.createConnection(config);
    try {
      await connect.query('INSERT INTO...');
      console.log('Успешно.');
      await connect.query('INSERT INTO...');
      console.log('Успешно.');
    } catch (error) {
      console.log('Не удалось.');
      throw error;
    } finally {
      connect.end();
    }
  } catch (error) {
    console.log('Попытка подключения не удалась.');
    throw error;
  }
}
