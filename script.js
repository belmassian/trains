

  var config = {
    apiKey: "AIzaSyB4HxrVHoKPjAog2rRQVj5nlEnw8feqqGM",
    authDomain: "trainproject-b9bbd.firebaseapp.com",
    databaseURL: "https://trainproject-b9bbd.firebaseio.com",
    projectId: "trainproject-b9bbd",
    storageBucket: "",
    messagingSenderId: "661875144978"
  };
firebase.initializeApp(config);
var database= firebase.database();
$("form").on("submit", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    var name = $("#name-input").val();
    var destination = $("#destination-input").val();
    var frequency = $("#frequency-input").val();
    var nextarrival = $("#nextarrival-input").val();


    var newtrain = {
      name: name,
      destination: destination,
      frequency: frequency,
      nextarrival: nextarrival,

    }

    database.ref().push(newtrain);
    console.log(newtrain.name);
    console.log(newtrain.destination);
    console.log(newtrain.frequency);
    console.log(newtrain.nextarrival);

    alert("Train successfully added");
    $("#name-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#nextarrival-input").val("");

    $("tbody").html("");
    database.ref().on("child_added", function(snapshot) {
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().frequency);
      console.log(snapshot.val().nextarrival);



      // Change the HTML to reflect
      $("#name-display").html(snapshot.val().name);
      $("#destination-display").html(snapshot.val().destination);
      $("#frequency-display").html(snapshot.val().frequency);
      $("#nextarrival-display").html(snapshot.val().nextarrival);


      $("#trains-table > tbody").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" +
        snapshot.val().frequency + "</td><td>" + snapshot.val().nextarrival+"</td></tr>");

    });

  });
