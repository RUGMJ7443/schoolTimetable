$(document).ready(function () {
    $('#not-found').hide()
    $('#submit').on('click', (e) => {
        e.preventDefault();
        let loginid = $('#text-input').val();
        loginid = loginid.toLowerCase()
        $.ajax({
            url: `${getApiUrl()}/${loginid}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // console.log(data);
                if (!data.error) {
                    $('#not-found').hide()
                    localStorage.setItem('login-id', loginid)
                    location.href = '../'
                } else {
                    $('#not-found').show()
                    console.log('user not found');
                }
            }
        });
    })
})