
$('.submitForm').click(() => {
    var url = "/Home/FeedbackForm";
    $.post(url,
        {
            name: $('#name').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            message: $('#message').val()
        }
        , function (data) {
            console.log(data)
        });

});

/*
$.post(url, { id: x }, function (data) {
    console.log(data[0]);
    modalContent.title = data[0].ProductName;
    modalContent.type = data[0].ProductSubHead;
    modalContent.cost = data[0].cost;
    modalContent.description = data[0].ProductDetail;
    createModal(modalContent.title, modalContent.type, 'Rs.' + modalContent.cost + ' per month', modalContent.description);
});
*/