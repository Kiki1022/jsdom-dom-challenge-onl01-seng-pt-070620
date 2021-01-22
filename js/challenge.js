// counter 
const counter = document.querySelector("#counter")

let count = 0;

setInterval(() => {
    count ++
    counter.innerText = count;

}, 1000);

 




// leave a comment

const commentForm = document.querySelector("#comment-form")

const inputComment = document.querySelector("#comment-input")


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
