$( document ).ready(function() {
  $('[name="LocationMatching"]')[0].checked = !!(localStorage.getItem("LocationMatching")==="true")
  $('[name="GenderMatching"]')[0].checked = !!(localStorage.getItem("GenderMatching")==="true")
  $('#settingsForm').on('submit', function () {
    var loc = $('[name="LocationMatching"]')[0].checked;
    var gender = $('[name="GenderMatching"]')[0].checked;
    localStorage.removeItem("LocationMatching");
    localStorage.removeItem("GenderMatching");
    localStorage.setItem("LocationMatching",loc);
    localStorage.setItem("GenderMatching",gender);
    alert('Settings Updated!');
    location.href="./discover.html";
    return false;
});
});
