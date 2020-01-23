$(document).ready(function(){
    $('#search').on('keyup', function(e){
let UserName = e.target.value;
//  if(e.target.value=null){
//  $('#repos').fade;
//  }
$.ajax({
url: 'https://api.github.com/users/' + UserName,
data: {
client_id: '796040524576209cf1e0',
client_secret: 'c357d52316f8fae1f496da3ad31d94b91ddaa977',
}

}).done(function(user){
   
       $.ajax({
url:'https://api.github.com/users/'+UserName+'/repos',
data: {
client_id: '796040524576209cf1e0',
client_secret: 'c357d52316f8fae1f496da3ad31d94b91ddaa977'

}

}).done(function(repos){
$.each(repos, function(index, repos){
      $('#repos').append(`
      <div class="row">
      <div class="well">
      
     
      <ul class="list-group">
            <li class="list-group-item list"><div class="col-6"><h4>${repos.name}</h4></li>
            <li class="list-group-item"><p> Desription: ${repos.description}</p>
        </div>
        </li>
      <div class="col-3">
    
      <span class="badge badge-danger">Forks: ${repos.forks_count}</span>
      <span class="badge badge-primary">Watchers: ${repos.watchers_count}</span>
      <span class="badge badge-warning">Stars: ${repos.stargazers_count}</span>
      </div>
      <div class="col-3">
      <a href="${repos.html_url}" target="_blank" class="btn btn-default">Visit page</a>
      </div>
      
</ul>
<div class="col-3">

</div>
</div>
      </div>
      
      `)
});
});
   
$('#result').html(`
    <div class="panel panel-default">
    <div class"panel-heading>
    <h2>${user.name}</h2>
    </div>
    <div class="panel-body">
    <div class="row">
    <div class="col-3">
    
    <img class="thumbnail" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block btn-danger">LOOK MORE</a>
    </div>
    <div class="col-2">
    <span class=""label label-default> Public Gists: ${user.public_gists}</span>
    <br>
    <span class=""label label-default> Public Repos ${user.public_gists}</span>
    <br
    <span class=""label label-default> Followers: ${user.followers}</span>
    <br>
    <span class=""label label-default> Following: ${user.following}</span>
    </div>
    <div class="col-7">
    <ul class="list-group">
    <li class="list-group-item">Website: ${user.blog}</li>
    <li class="list-group-item">Company: ${user.company}</li>
    <li class="list-group-item">Location: ${user.location}</li>
    <li class="list-group-item">Since: ${user.created_at}</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <h3>Latest Repos</h3>
    <div id="repos"></div>
    `);
});
});
});
