$(document).ready(function(){
    var submitURL = 'https://api.airtable.com/v0/appPJOzBmRaGNwHHM/Table%201';
    var form = $('#my-form');
    form.on('submit', function(e){
       e.preventDefault();
       var email = $(this).find('input[name=email]').val();

       if (!email) {
          $(this).find('input[name=email]').addClass("error");
         return;
       }
       var data = {
         'fields': {
           'Email': email,
        }
       };
       $.ajax({
           url: submitURL,
           method: "POST",
           headers: {
               'Authorization': 'Bearer key0uDPUEu13V831Z',
               'Content-Type': 'application/json'
           },
           data: JSON.stringify(data),
           success: function(data){
                $('#submit-message').text('Submitted!!!!');
                console.log('success',data)
           },
           error: function(error){
                $('#submit-message').text('Error occurred!');
                console.log('error',error)
           }
       });
    });
});
