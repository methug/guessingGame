const body = document.querySelector('body')
const writerBtn = document.querySelector('#books-btn')
const peopleBtn = document.querySelector('#people-btn')
const carBtn = document.querySelector('#cars-btn')
const main = document.querySelector('.games')

writerBtn.addEventListener('click', function () {
    const writers = [
        {
            name: 'dostoevsky',
            img: 'https://www.apollo-magazine.com/wp-content/uploads/2021/11/Web-lead-image_FINAL_Dostoevsky-.jpg?w=900&h=600&crop=1',
        },
        {
            name: 'kafka',
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Franz_Kafka%2C_1923.jpg'
        },
        {
            name: 'balzak',
            img: "https://media.newyorker.com/photos/59096eb92179605b11ad74c6/master/w_2560%2Cc_limit/OHare-Honore-de-Balzac-Coffee.jpg'"

        },



    ]
    main.style.display = 'none';
    body.style.display = 'flex'
    const section = document.createElement('section')
    const img = document.createElement('img')
    const input = document.createElement('input')
    const h2 = document.createElement('h2')
    const button = document.createElement('button')
    const negative = document.createElement('span')
    negative.innerText = 'Incorrect Answer. Try Again'
    const positive = document.createElement('span')
    positive.innerText = 'Correct Answer'
    positive.classList.add('positive')
    negative.classList.add('notValid')
    button.innerText = 'Submit'
    button.classList.add('submit-btn')
    section.classList.add('section')
    img.classList.add("img")
    input.classList.add('input')
    input.setAttribute('type', 'text')
    h2.innerText = 'Which writer is on the photo?'
    h2.classList.add('heading')
    section.append(img)
    section.append(h2)
    section.append(input)
    section.append(button)
    body.append(section)
    let counter = 0;
    img.src = writers[counter].img
    button.addEventListener('click', function () {
        function nextBtn() {
            if (counter < writers.length) {
                counter++
                img.src = writers[counter].img
                input.value = ''
                input.classList.remove('correctAnswer')
                positive.style.display = 'none'
                if (input.value === writers[counter].name && input.value !== '') {
                    positive.style.display = 'inline'
                    h2.insertAdjacentElement('afterend', positive)
                    section.removeChild(negative)
                    input.classList.add('correctAnswer')
                } else if (input.value !== writers[counter].name && input.value !== '') {
                    input.classList.add('incorrectAnswer')
                    negative.style.display = 'inline'
                }
            }

        }

        if (input.value === writers[counter].name && input.value !== '') {
            positive.innerText = 'Correct Answer'
            h2.insertAdjacentElement('afterend', positive)
            input.classList.add('correctAnswer')
            const next = document.createElement('button')
            next.classList.add('submit-btn')
            next.innerText = 'Next'
            section.replaceChild(next, button)
            next.addEventListener('click', nextBtn)



        }
        else if (input.value !== writers[counter].name && input.value !== '') {
            input.classList.add('incorrectAnswer')
            negative.innerText = 'Incorrect Answer. Try Again'
            h2.insertAdjacentElement('afterend', negative)
            setTimeout(() => {
                input.classList.remove('incorrectAnswer')
                input.value = ''
                negative.style.display = 'none'
            }, 500);

        } else if (input.value === '') {
            const p = document.createElement('p')
            negative.style.display = 'none'
            p.innerText = 'Not Valid Name'
            input.style.display = 'none'
            section.append(p)
            setTimeout(() => {
                p.remove()
                input.style.display = 'inline'
            }, 500)
        }



    }


    )

})
