getDogs()
function getDogs(){
fetch('http://localhost:3000/pups')
.then(response=>response.json())
.then(pupArray=>renderPup(pupArray))
}

const dogBar=document.querySelector('#dog-bar')
const isGoodDog=false
const dogSummaryContainer=document.querySelector('#dog-summary-container')
const filterButton=document.querySelector('#dog-summary-container')

function renderPup(pup){
        pup.forEach(pup=>{
            const pupCard=document.createElement('span')
            const pupTitle=document.createElement('p')
            pupTitle.textContent=pup.name
            pupCard.append(pupTitle)
            dogBar.append(pupCard)
            pupCard.addEventListener('click', ()=>{
                const pupName=document.createElement('h2')
                const pupImage=document.createElement('img')
                const pupButton=document.createElement('button')
                pupName.textContent=pup.name
                pupImage.src=pup.image
                pupImage.style.maxWidth='100px'
                pupButton.textContent="Good Dog"
                dogSummaryContainer.append(pupImage)
                dogSummaryContainer.append(pupName)
                dogSummaryContainer.append(pupButton)
                console.log(pup.image)
                pupButton.addEventListener('click', ()=>{
                    if (!isGoodDog){
                        pupButton.textContent="Bad Dog"
                    }
                })

            })
        })
    }
function updateDogStatus(dogObj){
    fetch(`http://localhost:3000/pups/${dobObj.id}`, {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(pupArray)
    })
        .then(response=>response.json())
        .then(pupArray=>console.log(pupArray))
    }

// function handleFilter{
// filterButton.addEventListener('click', ()=>{
//     if(){
//         filterButton.textContent='Filter good dogs: ON'
//     } else {
//         filterButton.textContent='Filter good dogs: OFF'}
//     }
// )}