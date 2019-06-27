$.ajax({
  method: 'GET',
  url: 'https://api.github.com/users/aldilafuente'
}).done(data => {
  $('#header').html(data.name)
  $('#avatar').append('<img src="' + data.avatar_url + '" alt="profile picture" />')
})