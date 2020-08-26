const minus = document.getElementById('minus')
const plus = document.getElementById('plus')   
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const submit = document.getElementById('submit')
let commentInput = document.getElementById('comment-input')
let counter = document.getElementById('counter')
let countAuto = setInterval(addSeconds, 1000)
let timerOn = true
incrementSeconds()
handleIncreseCounter()
handleDicreseCounter() 
pauseCounter()
submitComment()
addLikesComments()

function addLikeToNumber(){
    let numberLiked = counter.innerHTML
    let likeslist = document.querySelectorAll('.likes li');
    let numExist = false
    if (likeslist.length > 0 ) {
        for (let i = 0 ; i < likeslist.length ; i++ ){
            const element = likeslist[i]
            if (element.id === numberLiked) {
                // console.log("after if", element, element.id, numberLiked)
                const elementSplit = element.textContent.split(' ')
                element.textContent = `${numberLiked} liked ${+elementSplit[2] +1} times.`
                numExist = true
            break
    }}
    }
    if (!numExist || likeslist.length ===0 ){
        const likeNum = document.createTextNode(`${numberLiked} liked 1 time.`);
        const likeList = document.createElement("li")
        likeList.id = `${numberLiked}`
        likeList.appendChild(likeNum)
        document.getElementsByClassName('likes')[0].appendChild(likeList) 
        console.log(numExist)
};}

// function addLikeToNumber(){
//     let numberLiked = counter.innerHTML
//     let likesCounter = 1
//     let likeslist = document.querySelectorAll('.likes li');
//     const likeNum = document.createTextNode(` ${numberLiked} liked ${likesCounter} time.`);
//     const likeList = document.createElement("li")
//     likeList.id = `${numberLiked}`
//     likeList.appendChild(likeNum)
//     document.getElementsByClassName('likes')[0].appendChild(likeList) 
//     };

function addLikesComments(){
    heart.addEventListener("click", function (event){
        event.preventDefault();
        addLikeToNumber() 
    })
};


function addSeconds (){
    if (timerOn === true)
    counter.innerHTML++ ;
}

function incrementSeconds() {
let countAuto
}

function handleIncreseCounter() {
    plus.addEventListener("click", function (){
    counter.innerHTML++;
    });
}

function handleDicreseCounter() {
    minus.addEventListener("click", function (){
    counter.innerHTML--;
})};

function pauseCounter() {
    pause.addEventListener("click", function (){
        if (timerOn === true) {
            timerOn = false ;
            pause.innerText = 'resume'
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        } else {
            timerOn = true ;
            pause.innerText = 'pause'
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
        submit.disabled = false;
        counter.innerHTML = 0
        }
    })
};

function submitComment(){
submit.addEventListener("click", function() {
    event.preventDefault();
    const comment = document.createElement("li")
    const newComment = document.createTextNode(`${commentInput.value}`);
    comment.appendChild(newComment);
    document.getElementById("list").appendChild(comment); 
    commentInput.value = ''
    })
};
