// // $.getJSON(
// //   "https://spreadsheets.google.com/feeds/list/1bGgvgvlumPjv1NrL8-EpFPQpgv2zObV_02M6NvzgyRM/od6/public/values?alt=json",
// //   function(data) {
// //     console.log(data);
// //     for (var i = 0; i < 1; i++) {
// //       var entry = data.feed.entry[i];
// //       var a, b;
// //       if (entry.gsx$name.$t == "Ariana") {
// //         a = "Steve"; // change to name
// //         b = "";
// //       }
// //       // else {
// //       //   a = entry.gsx$message.$t;
// //       //   b = " chat_other";
// //       // }
// //       document.getElementById("chat_s").innerHTML +=
// //         '<div class="chat' +
// //         b +
// //         '"><div class="chat_message">' +
// //         'Hey how r u' +
// //         '</div><div class="chat_name">' +
// //         a +
// //         "</div></div>";
// //     }
// //   }
// // );
//
// for (var i = 0; i < 1; i++) {
//
//   document.getElementById("chat_s").innerHTML +=
//     '<div class="chat' +
//
//     '"><div class="chat_message">' +
//     'Hey how r u' +
//     '</div><div class="chat_name">' +
//     'Steve' +
//     "</div></div>";
// }
//
// function add() {
//   document.getElementById("chat_s").innerHTML +=
//     '<div class="chat chat_other"><div class="chat_message">' +
//     document.querySelector("#chat input").value +
//     '</div><div class="chat_name">' +
//     "Anonymous" +
//     "</div></div>";
//   document.querySelector("#chat input").value = "";
//   document.getElementById("chat_s").scrollTop = document.getElementById(
//     "chat_s"
//   ).scrollHeight;
// }
//
// function check() {
//   var x;
//   x = document.getElementById("entry_1732478127").value;
//   if (!x.replace(/\s/g, "").length) {
//     alert(
//       "Don't post empty spaces, it doesn't allow any comments to appear afterwards."
//     );
//     return false;
//   }
// }
