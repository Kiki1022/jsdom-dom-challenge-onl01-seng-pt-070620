// counter 
const counter = document.querySelector("#counter")

let count = 0;
let number = 1

setInterval(() => {
    count ++
    counter.innerText = count;

}, 1000);

 // pause button
    const pause = document.querySelector("#pause")
    
    pause.addEventListener('click', function(){

    })

 // like button 
    const minus = document.querySelector("#minus")

    const plus = document.querySelector("#plus")


    

 //when heart button is pressed, count in likes class goes up by 1
    const heart = document.querySelector('#heart')
    const likes = document.querySelector('ul.likes')
    heart.addEventListener('click', function() {
        let li = document.createElement('li')
        li.innerText = `${count} has been liked ${number} times`
        likes.appendChild(li)
    })


// leave a comment

const commentForm = document.querySelector("#comment-form")

const inputComment = document.querySelector("#comment-input")

plus.addEventListener('click', function() {
    count+=1
    counter.innerHTML = count
})

minus.addEventListener('click', function() {
    count-=1
    counter.innerHTML = count
})

commentForm.addEventListener('submit', function(e) {
    e.preventDefault()


    const newComment = document.createElement('li')
    newComment.innerText = inputComment.value 

    const deleteButton = document.createElement('button')
    deleteButton.innerText = "Bitch Bye!"
    
    commentForm.appendChild(newComment)
    newComment.appendChild(deleteButton)

    deleteButton.addEventListener('click', function(e) {
        newComment.remove()
    })
    
    commentForm.reset()
})
