const squares = document.querySelectorAll('.square');
const title = document.querySelector('main h1');
const btn1 = document.querySelector('#reset1');
const btn2 = document.querySelector('#reset2');
const scorex = document.getElementById('x');
const scoreo = document.getElementById('o');


let scorearr = [
    valuex = {value:0},
    valueo = {value:0}
]


getscoreOnReload()

btn2.addEventListener('click',(e=>{
    sessionStorage.removeItem('score');
    scorex.innerText = 0;
    scoreo.innerText = 0;
    scorearr = [
        valuex = {value:0},
        valueo = {value:0}
    ]
    
}))

btn1.addEventListener('click',(e=>{
    location.reload();
}))

let turn = ['X','O'];

let lists = [];

function styling(i,ii,iii){

        lists[i].style.background='black'

        lists[ii].style.background='black'

        lists[iii].style.background='black'
}


function finish(arr){
    arr.forEach((elm)=>{
        elm.style.pointerEvents = 'none'
    })
    
    btn2.style.pointerEvents = 'none'

    title.style.background = 'black';
    title.style.color = 'white';

    setTimeout(()=>{
        title.innerHTML = `starting again in`
    },1100)

    setTimeout(()=>{
        title.innerHTML += ' 3' 
    },1600)

    setTimeout(()=>{
        title.innerHTML = 'starting again in 2' 
    },2200)

    setTimeout(()=>{
        title.innerHTML = 'starting again in 1' 
    },2800)

    setTimeout( () =>{
        location.reload()
    },3500)
}


squares.forEach((el)=>{
    
    el.addEventListener('click',(e)=>{
        
        if(el.innerHTML==''){

            el.textContent=turn[0];
            turn.reverse()
            title.innerHTML = `${turn[0]} round`
            
            lists = []

            for(let i = 1;i<10;i++){
                let square = document.getElementById(`square${i}`)
                lists.push(square);
            }

                if(lists[0].innerHTML==lists[1].innerHTML && lists[1].innerHTML==lists[2].innerHTML && lists[0].innerHTML!=''){
                    styling(0,1,2)
                    title.innerHTML = `${lists[0].innerHTML} wins`
                    finish(squares)
                    score()

            

                }else if(lists[3].innerHTML==lists[4].innerHTML && lists[4].innerHTML==lists[5].innerHTML && lists[5].innerHTML!=''){
                    styling(3,4,5)
                    title.innerHTML = `${lists[3].innerHTML} wins`
                    finish(squares)
                    score()

                
                
                
                }else if(lists[6].innerHTML==lists[7].innerHTML && lists[7].innerHTML==lists[8].innerHTML && lists[7].innerHTML!=''){
                    styling(6,7,8)
                    title.innerHTML = `${lists[6].innerHTML} wins`
                    finish(squares)
                    score()

                
                
                
                }else if(lists[0].innerHTML==lists[4].innerHTML && lists[4].innerHTML==lists[8].innerHTML && lists[8].innerHTML!=''){
                    styling(0,4,8)
                    title.innerHTML = `${lists[0].innerHTML} wins`
                    finish(squares)
                    score()

                
                
                
                }else if(lists[2].innerHTML==lists[4].innerHTML && lists[4].innerHTML==lists[6].innerHTML && lists[6].innerHTML!=''){
                    styling(2,4,6)
                    title.innerHTML = `${lists[2].innerHTML} wins`
                    finish(squares)
                    score()

                
                
                
                }else if(lists[0].innerHTML==lists[3].innerHTML && lists[3].innerHTML==lists[6].innerHTML && lists[0].innerHTML!=''){
                    styling(0,3,6)
                    title.innerHTML = `${lists[0].innerHTML} wins`
                    finish(squares)
                    score()

                
                
                
                }else if(lists[1].innerHTML==lists[4].innerHTML && lists[4].innerHTML==lists[7].innerHTML && lists[4].innerHTML!=''){
                    styling(1,4,7)
                    title.innerHTML = `${lists[1].innerHTML} wins`
                    finish(squares)
                    score()

                
                
                
                }else if(lists[2].innerHTML==lists[5].innerHTML && lists[5].innerHTML==lists[8].innerHTML && lists[2].innerHTML!=''){
                    styling(2,5,8)
                    title.innerHTML = `${lists[2].innerHTML} wins`
                    finish(squares)
                    score()


                } else if (lists.every( el => el.innerHTML !='' )){
                    
                    title.innerHTML = 'Draw ,nice every one :)';
                    finish(squares)
                    
                }
            }
        
    })
})

function score(){

    if (title.innerHTML == 'X wins'){

        scorearr[0].value++

    }else if (title.innerHTML == 'O wins'){

        scorearr[1].value++
    }

    scorex.innerText = scorearr[0].value;
    scoreo.innerText = scorearr[1].value;

    sessionStorage.setItem('score',JSON.stringify(scorearr))

}

function getscoreOnReload(){

    if(sessionStorage.getItem('score')!== null){

        scorearr = JSON.parse(sessionStorage.getItem('score'));

        scorex.innerText = scorearr[0].value;

        scoreo.innerText = scorearr[1].value;

    }
}