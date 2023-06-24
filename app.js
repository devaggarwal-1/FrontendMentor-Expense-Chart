

const chart = document.getElementById('chart')


async function loadData() {
    const response = await fetch('data.json')
    const data = await response.json()
    addChart(data)
}

function addChart(data) {
    data.forEach((e) => {


        // Creating elements and adding to html 
        const bar = document.createElement('div')
        bar.className = `${e.day}`
        bar.id = `${e.day}`

        const span = document.createElement('span')
        span.className = "bar"

        const day = document.createElement('p')
        day.innerText = `${e.day}`

        const amount = document.createElement('p')
        amount.innerText = `$${e.amount}`
        amount.className = 'amount'

        bar.appendChild(amount)
        bar.appendChild(span)
        bar.appendChild(day)
        chart.appendChild(bar)

        span.addEventListener('mouseover', () => {
            span.classList.add('active')
            amount.classList.add('show-amount')

        })

        span.addEventListener('mouseout', () => {
            span.classList.remove('active')
            amount.classList.remove('show-amount')
        })

        //adjusting charts bar height
        span.style.height = `${e.amount * 3}px`


    }
    )

    currentDay()


}

function currentDay() {
    //current day highlight
    let date = new Date;
    const currentDay = date.getDay()
    switch (currentDay) {
        case (1):
            const span1 = document.querySelector('#mon :nth-child(2)');
            span1.classList.add('current')
            break
        case (2):

            const span2 = document.querySelector('#tue :nth-child(2)');
            span2.classList.add('current')
            break
        case (3):
            const span3 = document.querySelector('#wed :nth-child(2)');
            span3.classList.add('current')
            break
        case (4):
            const span4 = document.querySelector('#thu :nth-child(2)');
            span4.classList.add('current')
            break

        case (5):
            const span5 = document.querySelector('#fri :nth-child(2)');
            span5.classList.add('current')

        case (6):
            const span6 = document.querySelector('#sat :nth-child(2)');
            span6.classList.add('current')
            break

        case (7):
            const span7 = document.querySelector('#sun :nth-child(2)');
            span7.classList.add('current')
            break
    }
}


loadData()

