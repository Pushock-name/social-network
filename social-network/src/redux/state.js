let rerenderEntireTree = () => {
  console.log('state is changed')
};


let state = {

  profilePage : {
    posts : [
      {id: 1, message: 'Привеееет', likesCount: 1},
      {id: 2, message: 'Этой мой первый пост', likesCount: 5},
      {id: 3, message: 'Рад вам пачаны', likesCount: 4}
  ]
},

  dialogsPage : {
    dialogs :  [
    {id: 1, name: 'Павел'},
    {id: 2, name: 'Владислав'},
    {id: 3, name: 'Борис'},
    {id: 4, name: 'Андрей'},
    {id: 5, name: 'Иван'},
    {id: 6, name: 'Дмитрий'},
    {id: 7, name: 'Полина'},
    {id: 8, name: 'Евгений'}
  ],
  
    messages : [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Привет писечка кисечка'}
  ]
 }
 };

export const addPost = (postMessage) => {

  let newPost = {
    id: 4, 
    message: postMessage, 
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree();
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}




export default state;