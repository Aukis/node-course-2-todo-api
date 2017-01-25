const {ObjectID}= require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo}= require ('./../server/models/todo');
const {User}= require ('./../server/models/user');

//
// var id= '5888666d1522161f947419bb';
// if (!ObjectID.isValid(id)) {
//   console.log("Id not valid");
// }
// //
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo)
// });
//
// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//     return console.log("Not Found");
//   }
//   console.log('Todo By Id', todo)
// }).catch((e)=> console.log(e));

User.findById('588851a200c5851d50e45cae').then((user)=>{
  if (!user) {
    return console.log("User Not Found");
  }
  console.log(JSON.stringify(user,undefined,2));
}, (e)=> {
  console.log(e);
});
