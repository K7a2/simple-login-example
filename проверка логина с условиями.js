var name = prompt("Введите имя", "ваше имя"); \\ name не подходит для имени переменной, уточнить! использовать userName
if (name == "Админ") {
 var password = prompt ("Введите пароль", "пароль");
if (password == "Чёрный Властелин") {
alert("«Добро пожаловать!»");
}else if (password === null){
alert("Вход отменен");
} else {
alert("«Пароль неверен»");
}
} else if (name === null) {
 alert("Вход отменен");
}else {
 alert("Я вас не знаю");
}