const section = document.querySelector('section')
const img = document.querySelector('img')
const input = document.querySelector('input')
const h2 = document.querySelector('h2')
const finalHeading = document.createElement('h1')
finalHeading.innerText = 'Congrats! Check your points!'
finalHeading.classList.add('heading2')
const submitButton = document.querySelector('.submit-btn')
const nextButtonStarter = document.createElement('button')
const result = document.createElement('button')
result.innerText = 'Result'
result.classList.add('submit-btn')
nextButtonStarter.innerText = 'Next'
nextButtonStarter.classList.add('submit-btn')
const warning = document.createElement('p')
warning.innerText = 'Not valid name'
warning.classList.add('notValid')
const correctAnswer = document.createElement('p')
correctAnswer.innerText = 'Correct Answer'
correctAnswer.classList.add('positive')
const incorrect = document.createElement('p')
incorrect.classList.add('notValid')
let clickCounter = 0;
let stepsCounter = 0;



const writers = [
    {
        name: 'dostoevsky',
        img: 'https://www.apollo-magazine.com/wp-content/uploads/2021/11/Web-lead-image_FINAL_Dostoevsky-.jpg?w=900&h=600&crop=1'
    },
    {
        name: 'kafka',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Franz_Kafka%2C_1923.jpg'
    },
    {
        name: 'tolstoy',
        img: 'https://www.thoughtco.com/thmb/74ysiATPKgj6bGEVy5Ge4eT8XQA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-3088579-ba5869cf16484fb3a31edb588a63d187.jpg'
    },
    {
        name: 'balzak',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Dagherrotipo-Honor%C3%A9_de_Balzac.jpg'
    },
    {
        name: 'shakespeare',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg'
    },
    {
        name: 'servantes',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cervantes_J%C3%A1uregui.jpg/274px-Cervantes_J%C3%A1uregui.jpg'
    },
    {
        name: 'faulkner',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Carl_Van_Vechten_-_William_Faulkner.jpg'
    },
    {
        name: "thomas mann",
        img: 'https://m.media-amazon.com/images/M/MV5BOGVmYjgzN2MtM2I1YS00ZWY3LWEwN2EtYWRlZGExMDMzN2YyXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_.jpg'
    },
    {
        name: "dickens",
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg'
    },
    {
        img: 'https://i.pinimg.com/originals/c7/b6/a6/c7b6a6fd28777bced02ddc8ef7124daf.jpg',
        name: 'vazha-pshavela'
    }
]
img.src = writers[stepsCounter].img
let points = 0;


submitButton.addEventListener('click', general)
function general() {
    clickCounter++
    if (!input.value && clickCounter <= 1) {
        input.insertAdjacentElement('beforebegin', warning)
    } else if (input.value === writers[stepsCounter]['name']) {
        points++
        warning.remove()
        incorrect.remove()
        input.insertAdjacentElement('beforebegin', correctAnswer)
        input.classList.remove('incorrectAnswer')
        input.classList.add('correctAnswer')

    } else if (input.value !== writers[stepsCounter]['name']) {
        warning.remove()
        incorrect.innerText = `Not ${input.value}. Try Again`
        input.insertAdjacentElement('beforebegin', incorrect)
        input.classList.remove('correctAnswer')
        input.classList.add('incorrectAnswer')
    }

}

const next = document.querySelector('#nextBtn')
next.addEventListener('click', function () {
    clickCounter = 0;
    if (stepsCounter < writers.length - 1) {
        stepsCounter++
    } else if (stepsCounter >= writers.length - 1) {
        correctAnswer.remove()
        img.remove()
        h2.replaceWith(finalHeading)
        input.remove()
        next.remove()
        submitButton.replaceWith(result)
    }
    input.classList.remove('incorrectAnswer')
    input.classList.remove('correctAnswer')
    input.value = ''
    img.src = writers[stepsCounter].img
    correctAnswer.remove()
    incorrect.remove()




})
const resultP = document.createElement('p');
const extraDescription = document.createElement('p')
const backButton = document.createElement('a')
backButton.setAttribute('href', 'game.html')
backButton.classList.add('submit-btn')
backButton.innerText = 'Other Games'
resultP.classList.add('result')
result.addEventListener('click', function () {
    finalHeading.remove()
    resultP.innerText = `You got ${points} Points. `
    section.append(resultP)
    this.remove()
    if (points < 5) {
        extraDescription.innerText = 'It seems that you dont read too much. I am sure you will be good at other games.Click The button )) '
        section.append(backButton)
        section.append(extraDescription)

    }
    else if (points >= 5) {
        extraDescription.innerText = 'Wow. It is obvious that you read so many books, cleaver dude! lets check out other games too. will you be such cool in playing them?'
        section.append(extraDescription)
        section.append(backButton)
    }

})


