function Profile(first, last, gender, age, location, intro, prof_directory,likesYou) {
    this.firstName = first;
    this.lastName = last;
    this.gender = gender;
    this.age = age;
    this.location = location;
    this.introduction = intro;
    this.prof_directory = prof_directory;
    this.likesYou = likesYou;
    this.matchedWithYou = false
  };

$( document ).ready(function() {

    /*
    // Create profile instances
    prof1=new Profile("Kyle", "Smith", "22", "Chicago, IL", "Hey what's uppppppppp!!!","profiles/Kyle/drake.jpg", false)
    prof2=new Profile("Steve", "Smith", "20", "Evanston, IL", "Just hanging around.","profiles/Steve/George-Clooney.jpg", true)
    prof3=new Profile("Daniel", "Smith", "19", "New York, NY", "Who wants to play a game o' ball with me?","profiles/Daniel/guy1.jpg",false)
    prof4=new Profile("Kevin", "Smith", "32", "Los Angeles, CA", "Looking for a music-lover to join my band!","profiles/Kevin/jackblack.jpg",true)
    prof5=new Profile("Tim", "Smith", "40", "Chicago, IL", "Introverts only.","profiles/Tim/ryan_gosling-2.jpg",false)

    var profiles = [prof1,prof2,prof3,prof4,prof5];
    */
    var profiles = []
    var keys = ["Kyle Smith", "Steve Smith", "Daniel Smith", "Kevin Smith", "Tim Smith"];
    for (var i = 0; i <  keys.length; i++) {
        console.log(localStorage.getItem(keys[i]));
        profiles.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    for (i = 0; i < profiles.length; i++) {
      if (profiles[i].matchedWithYou == false) {
        continue;
      }
      $('ul.match-list').append('<li class="match" id="profile' + i +'">' +
        //'<div class="w3-row">'+
        //'<div class="w3-col m6 w3-left w3-padding-large">'+
        '<p><b><i class="fa fa-user w3-margin-right"></i>'+ profiles[i].firstName + ' ' + profiles[i].lastName + '</b></p>'+
        '<img src="images/p2.jpg" id="profile'+i+'img" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of '+profiles[i].firstName+'" width="100" height="100">'+
        '<p>'+profiles[i].introduction+'</p>'+ //'</div></div>'+
      '</li>');
      $('#profile' + i + ' img').attr("src",profiles[i].prof_directory)
    }

    $('li.match').click(function(){
      console.log('clicked');
      $('div#chat').css("display","inline-block");
    });
});
