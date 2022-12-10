const name = "alvin"

const key = '3b5c51a03cca3b792e0b9c218f807acd';

function updateBox() {
  $('.box-three').slideUp(2000)
  $('body').toggleClass('darkmode')
}

const addData = (data) => {
  $('.results p').append(`
  The name of the city is ${data.name}
  The current weather is ${data.weather[0].description}
`)
}

$(document).ready(function() {
  // Step one: Target
  // Step two: Add eventlistener
  // Step three: effect

  const element = document.getElementById("box-one");
  element.addEventListener('click', () => {
    console.log("Fire")
    console.log(this)
  })


  $('.box-one').on('click', updateBox)

  $('.box-two').on('click', function() {
    $('.box-three').slideDown(2000)
  })

  $('.box-three').on('click', function() {
    $('.flex').css('justify-content', 'flex-start')
  })

  $('.update-text').on('submit', function(event) {
    event.preventDefault();
    // const userInput = $('.text').val()
    // $('.box-three').css('background', userInput)
    // $('.results').append(`<p>${userInput}</p>`)
    const userInput = this.children[0].value
    $.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${userInput}&appid=${key}`, function(data) {
      console.log(data)
      addData(data)
    })
    $('.weather-input').val("Happy Searching")
    console.log(userInput)
  })

  $('.weather-input').on('keydown', (e) => {
    console.log(e)
  })

  console.log($('#box-one'));
})

