
$( document ).ready(function() {


    prof1=new Profile("Kyle", "Smith", "22", "Chicago, IL", "Hey what's uppppppppp!!!","profiles/Kyle/drake.jpg", false)
    prof2=new Profile("Steve", "Smith", "20", "Evanston, IL", "Just hanging around.","profiles/Steve/George-Clooney.jpg", true)
    prof3=new Profile("Daniel", "Smith", "19", "New York, NY", "Who wants to play a game o' ball with me?","profiles/Daniel/guy1.jpg",false)
    prof4=new Profile("Kevin", "Smith", "32", "Los Angeles, CA", "Looking for a music-lover to join my band!","profiles/Kevin/jackblack.jpg",true)
    prof5=new Profile("Tim", "Smith", "40", "Chicago, IL", "Introverts only.","profiles/Tim/ryan_gosling-2.jpg",false)

    var profiles = [prof1,prof2,prof3,prof4,prof5];


    for (i = 0; i < profiles.length; i++) {

      currentClass = i==0?'current':''

      $('ul.card-list').append('<li class="card ' +
                              currentClass+ '"' +
                              ' id="profile' + i +'">' +
                              profilecard_html);
      $('#profile' + i + ' img.card-profile-pic').attr("src",profiles[i].prof_directory)
      $('#profile' + i + ' .discover-profile-name').html(profiles[i].firstName)
      $('#profile' + i + ' .discover-profile-age').html(profiles[i].age)
      $('#profile' + i + ' .discover-profile-location').html(profiles[i].location)
      $('#profile' + i + ' .discover-profile-introduction').html(profiles[i].introduction)

    }

    var currIdx = 0;
    $('#JPO').popup();

    $("button.but-yay").click(function(){
      if(profiles[currIdx].likesYou){
          name=profiles[currIdx].firstName
          alert("Congratulations. you and " + name + " liked each other!\n\n" + name + " has been added to your List of Matches.")
          //$('#JPO').popup();
      }
    });

    $("button.but-yay, button.but-nope").click(function(){
      if (currIdx == profiles.length-1){
        $("ul.card-list").html("No more profiles to show. Try again later!");
        $("button.but-nope, button.but-yay").prop("disabled",true);
        $("button.but-nope, button.but-yay").css("background","gray");
      } else if (currIdx < profiles.length){
        currIdx++;
      }
      console.log(currIdx);
    })






});

function Profile(first, last, age, location, intro, prof_directory,likesYou) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.location = location;
  this.introduction = intro;
  this.prof_directory = prof_directory;
  this.likesYou = likesYou;
};


var profilecard_html =
  '<img class="card-profile-pic" src="profiles/Kyle/drake.jpg">' +
  '<div class="discover-profile-container">'+
    '<p class="discover-profile-nameage">'+
      '<span class="discover-profile-name">' +
      '</span>'+
      ',&nbsp' +
      '<span class="discover-profile-age">' +
        '22' +
      '</span>' +
    '</p>' +
    '<p class="discover-profile-location"></p>' +
    '<hr class ="discover-profile-divider">' +
    '<p class="discover-profile-introduction"></p>' +
  '</div>' +
'</li>'
