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

    var profiles = []
    var profUser = JSON.parse(localStorage.getItem("CurrentAccountProfile"));
    var keys = ["Kyle Smith", "Steve Smith", "Daniel Smith", "Kevin Smith", "Tim Smith", "Liz Smith", "Hillary Clinton"];
    for (var i = 0; i <  keys.length; i++) {
      myProfile = JSON.parse(localStorage.getItem(keys[i]));
      if (!!(localStorage.getItem("LocationMatching")==="true") && !!(profUser.location.toLowerCase() !== myProfile.location.toLowerCase())) {
        continue;
      }
      if (!!(localStorage.getItem("GenderMatching")==="true") && !!(profUser.gender.toLowerCase() !== myProfile.gender.toLowerCase())) {
        continue;
      }
      profiles.push(myProfile);
    }

    // Write profile markup
    for (i = 0; i < profiles.length; i++) {
      //console.log(!!(localStorage.getItem("LocationMatching")==="true"));
      //console.log(!!(profUser.location.toLowerCase() !== profiles[i].location.toLowerCase()));
      //console.log(!!(localStorage.getItem("LocationMatching")==="true") && !!(profUser.location.toLowerCase() !== profiles[i].location.toLowerCase()));
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

    //Alert when user is matched
    $("button.but-yay").click(function(){
      if(profiles[currIdx].likesYou){
          name=profiles[currIdx].firstName
          alert("Congratulations. you and " + name + " liked each other!\n\n" + name + " has been added to My Matches.")
          profiles[currIdx].matchedWithYou = true;
          localStorage.removeItem(keys[currIdx].firstName);
          localStorage.setItem(keys[currIdx],JSON.stringify(profiles[currIdx]));
          //$('#JPO').popup();
      }
    });

    //Track index in profile list, and disable discovery when no more profiles are left
    $("button.but-yay, button.but-nope").click(function(){
      if (currIdx == profiles.length-1){
        $("ul.card-list").html("No more profiles to show. Try again later!");
        $("button.but-nope, button.but-yay").prop("disabled",true);
        $("button.but-nope, button.but-yay").css("background","gray");
      } else if (currIdx < profiles.length){
        currIdx++;
      }
    })






});


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
