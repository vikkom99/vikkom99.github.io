$(document).ready(function () {
    let btn = document.getElementById("getData");
    btn.addEventListener("click", fetch);

    function fetch() {
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',

        })
            .done(function (data) {
                document.getElementById("dane-programisty").innerHTML = data

            })
    }
});



