'use scrict';


        //task 1
        let user = {
            id:1,
            name: 'Umut',
            email: 'uma@mail.ru',
            isAuthorised: false
        };
        console.log(user);


        //task 2
        let post = {
            id:1, //обращение к айди  объекта юзера
            title: 'post 1',
            userId:1,
            time: 2020,
            isLiked: false
        };
        console.log(post);


        //task 3
        let comment = {
            userId:3, //обращение к айди  объекта юзера
            postId:1, //обращение к айди  объекта поста
            text: 'my first comment'
        };
        console.log(comment);


        //task 4
        let posts = []; 
        function addPost() {
        posts.push(post);
        posts.push('2 post test');
        }
        addPost()
        console.log(posts);

        
        //task 5
        function changeState(user){
            if(user.isAuthorised === false){
            user.isAuthorised = true
            }
        }
        changeState(user)
        console.log(user)
      
        
        //post Like
       function changePostState(){
            posts.indexOf('post 1')
            if(post.isLiked===false){
                post.isLiked=true
            }else if(post.isLiked===true){
                post.isLiked=false
          }
        }
          changePostState(post)
          console.log(post)

       //another version
          function postLike(){
          if(posts.indexOf('2 post test')){
            post['like']='like'
            post.like='like'
          }else delete post.like;
          }
        
        postLike(post)
        console.log(post)