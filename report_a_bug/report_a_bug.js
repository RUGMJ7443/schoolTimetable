$('form').jsonForm({
    schema: {
        title: {
            type: 'string',
            title: 'Title',
            required: true
        },
        message: {
            type: 'string',
            title: 'Body',
            required: true
        }
    },
    onSubmit: function (errors, values) {
        if (errors) {
            $('#res').html('<p>There was a error in the error reporter 🙄 try again later</p>');
        }
        else {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://hooks.slack.com/services/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",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    "postman-token": "59cc56cc-4574-4882-a2b0-db597587a351"
                },
                "processData": false,
                "data": JSON.stringify({ username: values.title, text: values.message })
            }

            $.ajax(settings).done(function (response) {
                if (response === "ok") {
                    $("#res").html(`
                <p>Sent</p>
                `)
                } else {
                    $('#res').html('<p>There was a error in the error reporter 🙄 try again later</p>');
                }

            });
        }
    }
});