// "use server";

// import { PrismaClient } from "@prisma/client";
// const bcrypt = require('bcrypt');

// const prisma = new PrismaClient();
// export async function loginAction(loginData, hash){
//  const loginpass = bcrypt.compareSync(loginData.password, hash); // true

//   const loginuser = await prisma.rejistraion.findFirst({
//     // data: {
//     //   email: loginData.email,
//     //   password: loginData.password,
//     // },
//     where: {
//       email: {
//         startsWith: loginData.email,
//       },
//       password: {
//         startsWith: loginpass,
//       },
//     },
//   });
//   // console.log(loginuser);
//   console.log(loginuser);

// }
// let hash;
// export async function RejistrationAction(registerData) {

//    hash = bcrypt.hashSync(registerData.password, 10);

//   const registrationUser = await prisma.rejistraion.create({
//     data: {
//       usernamename: registerData.username, // Typo here, should be "username"
//       email: registerData.email,
//       password: hash,
//     },
//   });
//   console.log(registrationUser);
// }


"use server";

import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export async function loginAction(loginData) {
  // const loginpass = bcrypt.compareSync(loginData.password, hash); // Compare the password with the hash

  const loginuser = await prisma.rejistraion.findFirst({
    where: {
      email: {
        startsWith: loginData.email,
      },
      password: {
        startsWith: loginData.password,
      },
    },
  });

  console.log(loginuser);
}

export async function RegistrationAction(registerData) {
  const hash = bcrypt.hashSync(registerData.password, 10); // Generate the hash of the password
  
  const registrationUser = await prisma.rejistraion.create({
    data: {
      username: registerData.username, // Fix the typo here
      email: registerData.email,
      password: hash, // Store the hash in the database
    },
  });

  console.log(registrationUser);
}








// export async function  LoginAction(loginData) {
//      const loginuser = await prisma.login.create({
//           data: {
//             email: loginData.email,
//             password:loginData.password,
//           },
//         })
// console.log(loginuser);
//       }
// export async function Rejistration(registerData) {
//   const RejistrationUser = await prisma.rejistration.create({
//     data:{
//       name: registerData.username,
//       email:registerData.email,
//       password:registerData.password,
//     }
//   })
//   console.log(RejistrationUser);
// }

// import { cookies } from "next/headers";
// export async function addToCart() {
//     const user = await prisma.user.create({
//         data: {
//           name: 'Alice',
//           email: 'alice@prisma.io',
//         },
//       })
//       console.log(user)
// //   const cookieStore = cookies();
// //   const cart = cookieStore.get("cart");
// //   if (!cart) cookieStore.set("cart", JSON.stringify([id]));
// //   else {
// //     const cartArr = JSON.parse(cart.value);
// //     cookieStore.set("cart", JSON.stringify([...cartArr, id]));
// //   }
// }

// export async function getCart() {
//   const cookieStore = cookies();
//   return cookieStore.get("cart");
// }

// export async function undoAdd(id) {
//   const cookieStore = cookies();
//   const cart = cookieStore.get("cart");
//   if (!cart) return;

//   const cartArr = JSON.parse(cart.value);
//   const indexToRemove = cartArr.indexOf(id);

//   if (indexToRemove !== -1) {
//     cartArr.splice(indexToRemove, 1);
//   }

//   cookieStore.set("cart", JSON.stringify(cartArr));
// }
