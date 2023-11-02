// XMLHttpRequest - это объект в JavaScript, который позволяет отправлять и получать данные через XMLHTTP-метод, например GET или POST. Он используется для отправки AJAX-запросов на сервер и получения ответа от него.

const xhr = new XMLHttpRequest()

console.log(xhr)

xhr.open("GET", 'players.json', true)

xhr.send()

xhr.onreadystatechange = function () { // готов ли сервер работать с нами
    if(xhr.readyState !==4) return
    if(xhr.status !== 200) {
        console.log(xhr.status + ": " + xhr.statusText)
    } else {
        console.log(xhr.responseText)
    }
}