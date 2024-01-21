//const divElement = document.getElementById('div');

{
    /* Callback */
    const posts = [
        {title: 'Post One', body: 'This is post one'}
    ];

    function getPosts(){
        setTimeout(() => {
            let output = "";
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });
            //divElement.innerHTML = output;
        }, 1000);
    }

    getPosts();
    
    /* Create post */
    function createPost(post, Callback){
        setTimeout(()=> {
            posts.push(post);
            Callback();
        }, 1000)
    }

   /* createPost({title: 'Post Two', body: 'This is post two'}, getPosts);

    setTimeout(() => {
        createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
    }, 1000)

    setTimeout(() => {
        createPost({title: 'Post Four', body: 'This is post four'}, getPosts);
    }, 3000)
    */

    /* Async Await */
    async function init(){
        await setTimeout(() => {
            createPost({title: 'Post Two', body: 'This is post'});
            getPosts();
        }, 1000)
    }

    init();
}