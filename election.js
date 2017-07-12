document.addEventListener("DOMContentLoaded", function() {
var votes = document.querySelector('button');
var list = document.querySelector('#results_data');
votes.addEventListener('click', function(){
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    datatype: 'json'
  }).done(function(responseData) {

      for (i = 0; i < responseData.candidates.length; i++){
        var listItem = document.createElement('li')
        listItem.innerHTML = 'Name: ' + responseData.candidates[i].name + ' ' + 'Votes: ' + responseData.candidates[i].votes;
        list.append(listItem);
      }
  });
})


});
