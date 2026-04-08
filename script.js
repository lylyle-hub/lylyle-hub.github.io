//let hello = document.getElementById('hellomessage')

hello = 'hi there'
console.log(hello)
hello.value = "hi there"

$('helloMessage').html(
    'hi, Im happy to be here!'
)

$('h1').click(function(){
    $('.square').addClass('animateMe')
})