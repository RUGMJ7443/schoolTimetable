$(document).ready(() => {
    $("#theme").val(localStorage.getItem("theme"))
    $(".submit").on("click", (e) => {
        localStorage.setItem("theme", $("#theme").val())
        location.reload()
    })
})