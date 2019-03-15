$( document ).ready(function() {
  /*
  localStorage.clear();
  prof1=new Profile("Kyle", "Smith", "Male", "22", "Chicago", "Hey what's uppppppppp!!!","profiles/Kyle/drake.jpg", false)
  prof2=new Profile("Steve", "Smith", "Male", "20", "Evanston", "Just hanging around.","profiles/Steve/George-Clooney.jpg", true)
  prof3=new Profile("Daniel", "Smith", "Male", "19", "New York", "Who wants to play a game o' ball with me?","profiles/Daniel/guy1.jpg",false)
  prof4=new Profile("Kevin", "Smith", "Male", "32", "Los Angeles", "Looking for a music-lover to join my band!","profiles/Kevin/jackblack.jpg",true)
  prof5=new Profile("Tim", "Smith", "Male", "40", "Chicago", "Introverts only.","profiles/Tim/ryan_gosling-2.jpg",false)
  prof6=new Profile("Liz", "Smith", "Female", "20", "New York", "Just looking for a few friends.","profiles/Liz/image.jpg",true)
  prof7=new Profile("Hillary", "Clinton", "Female", "55", "Washington", "Just looking for a few female presidents! #ImWithHer","profiles/Hillary/image.jpg",false)

  var profiles = [prof1,prof2,prof3,prof4,prof5,prof6,prof7];
  var keys = ["Kyle Smith", "Steve Smith", "Daniel Smith", "Kevin Smith", "Tim Smith", "Liz Smith", "Hillary Clinton"];
  for (var i = 0; i < profiles.length; i++) {
      localStorage.setItem(keys[i],JSON.stringify(profiles[i]));
  }
  */
  var account = JSON.parse(localStorage.getItem('CurrentAccount'));
  document.getElementById('username').defaultValue=account.userName;
  document.getElementById('password').defaultValue=account.password;
  document.getElementById('email').defaultValue=account.email;
  if (account.key !== "undefined") {
    account = JSON.parse(localStorage.getItem(account.key));
    document.getElementById('FirstName').defaultValue=account.firstName;
    document.getElementById('LastName').defaultValue=account.lastName
    document.getElementById('Age').defaultValue=account.age;
    document.getElementById('City').defaultValue=account.location;
    document.getElementById('Introduction').defaultValue=account.introduction
  }

});
$('#profileForm').on('submit', function () {
  var firstName = $('[name="FirstName"]')[0].value;
  var lastName = $('[name="LastName"]')[0].value;
  var age = $('[name="Age"]')[0].value;
  var gender = $('[name="Gender"]')[0].value;
  var city = $('[name="City"]')[0].value;
  var introduction = $('[name="Introduction"]')[0].value;
  var profUser = new Profile(firstName,lastName,gender,age,city,introduction,'',true);
  var account = JSON.parse(localStorage.getItem('CurrentAccount'));
  account.key = firstName + " " + lastName;
  localStorage.setItem('CurrentAccount',JSON.stringify(account));
  localStorage.setItem("CurrentAccountProfile",JSON.stringify(profUser));
  localStorage.setItem(account.userName,JSON.stringify(account));
  localStorage.setItem(account.key,JSON.stringify(profUser));
  location.href="./discover.html";
  return false;
});

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
  function Account(userName, password,email,key="undefined") {
    this.userName = userName;
    this.password = password;
    this.email=email;
    this.key="undefined"
  };

  function readURL(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#blah')
                   .attr('src', e.target.result);
           };

           reader.readAsDataURL(input.files[0]);
       }
   }
