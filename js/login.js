$( document ).ready(function() {
  localStorage.removeItem('CurrentAccount')
  localStorage.removeItem('CurrentAccountProfile')
  //localStorage.clear();
  prof1=new Profile("Kyle", "Smith", "Male", "22", "Chicago", "Hey what's uppppppppp!!!","profiles/Kyle/drake.jpg", false)
  prof2=new Profile("Steve", "Smith", "Male", "20", "Evanston", "Just hanging around.","profiles/Steve/George-Clooney.jpg", true)
  prof3=new Profile("Daniel", "Smith", "Male", "19", "New York", "Who wants to play a game o' ball with me?","profiles/Daniel/guy1.jpg",false)
  prof4=new Profile("Kevin", "Smith", "Male", "32", "Los Angeles", "Looking for a music-lover to join my band!","profiles/Kevin/jackblack.jpg",true)
  prof5=new Profile("Tim", "Smith", "Male", "40", "Chicago", "Introverts only.","profiles/Tim/ryan_gosling-2.jpg",false)
  prof6=new Profile("Liz", "Smith", "Female", "20", "New York", "Just looking for a few friends.","profiles/Liz/image.jpg",false)
  prof7=new Profile("Hillary", "Clinton", "Female", "55", "Washington", "Just looking for a few female presidents! #ImWithHer","profiles/Hillary/image.jpg",false)

  var profiles = [prof1,prof2,prof3,prof4,prof5,prof6,prof7];
  var keys = ["Kyle Smith", "Steve Smith", "Daniel Smith", "Kevin Smith", "Tim Smith", "Liz Smith", "Hillary Clinton"];
  for (var i = 0; i < profiles.length; i++) {
      localStorage.setItem(keys[i],JSON.stringify(profiles[i]));
  }


});

function SignupAccountUpdate() {
  var userName = document.getElementById('Username_Signup').value;
  var password = document.getElementById('Password_Signup').value;
  var email = document.getElementById('Email_Signup').value;
  account = localStorage.getItem(userName);
  if (account) {
    alert("Account already exists. Log in with it, and try again.");
    window.location.reload();
    return false;
  }
  account = new Account(userName,password,email);
  localStorage.setItem(userName,JSON.stringify(account));
  localStorage.setItem('CurrentAccount',JSON.stringify(account));
  document.getElementById('signup-form').action="./profile.html";
  return false;
}

function LoginAccountUpdate(userName , password) {
  var userName = document.getElementById('Username_Login').value;
  var password = document.getElementById('Password_Login').value;
  account = localStorage.getItem(userName); //First check if account exists before parse
  if (account===null) {
    alert("Account does not exist. Please sign up and try again.");
    window.location.reload();
    return false;
  }
  account = JSON.parse(account);
  if (account.password !== password) {
    alert("That is the wrong password. Please try again.");
    window.location.reload();
    return false;
  }
  localStorage.setItem(userName,JSON.stringify(account));
  localStorage.setItem('CurrentAccount',JSON.stringify(account));
  document.getElementById('login-form').action="./profile.html";
  return false;
}

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
