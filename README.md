# REST-WALLET-API

## Prerequisites
- Nodejs
- Postman
- mongoDB

## Set up values of these environment variables in .env file in your root file
- MongoDB_URL=
- PORT=
- Jwt_Secret_Key=
- SENDGRID_API_KEY=

## Routes:-

### Auth
//after signup a new user to get 1000 token bonus balance<br />
 // login to get tokenid and userid as a response<br />
  //get & verify otp to become an admin<br />

* auth/signup - user needs to send password,userName,email at the body of req(put)
* auth/login - user needs to send email,password,userName at the body of req(post)
* auth/getOtp - send userName at the body of req(get)
* auth/verifyOtp - send userName and otp at the body of req(post)
* auth/logOut - send an empty req

### Admin
//can only access these routes if you are an admin<br />
// all req would be get req, use Authorization header , Bearer Jwt & user the token sent to you after login<br />
* admin/balance -send user id in body, of the person whos balance u want
* admin/transactions/:txId - txId of the transaction you are searching in params, your userId
* admin/allTransactions - send userid in body
* admin/userByName/:userName - userName in the url while sending req

### User
// all req would be put req & u need to send your userId<br />
* user/getUserDetails - to get all the user details
* user/getBalance - get your current balance
* user/getTransaction - get your transactions

### Transaction
* transaction/sendTransaction - userId(your id),email(of the person u want to send funds),amount, in body of req(put)
