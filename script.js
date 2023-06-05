var submitURL = 'https://api.airtable.com/v0/appPJOzBmRaGNwHHM/Table%201?api_key=key0uDPUEu13V831Z';
var form = $('#subscribe-form');
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
  $.post(submitURL, data, function(data){
     $('#submit-message').text('Thank you!');
     console.log('success',data)
  });
});
