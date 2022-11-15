//divEvents.innerHTML = createSpeakerBlock("Escuela Ideal", "10:00hrs", "Bruno", "ksdflkwendslkfncwdls", "https://firebasestorage.googleapis.com/v0/b/changemakerday-2019.appspot.com/o/events%2Fbruno-iriarte-1.jpg?alt=media&token=58a9f74a-5975-4c68-b47f-c644cce05ea1")
fetchEvents()

function createSpeakerBlock(Name, Time, Speaker, Description, PhotoUrl) {
    return "<div class=\"schedule-block\"> <div class=\"inner-box clearfix\"> <figure class=\"thumbs-box\"><img class=\"lozad\" src=\"" + PhotoUrl + "\"> </figure> <div class=\"time\"> " + Time + "</div><h4>" + Name + "</h4> <div class=\"author-info\"><b>" + Speaker + "</b></div> <div><br><div class=\"text\">" + Description + "</div></div></div></div>"
}

function fetchEvents() {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://changemakerday-2019.firebaseio.com/events.json', true)

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            var divEvents = document.getElementById("tab-2");
            // = "<h1>Hello</h1>"
            
            let countEvents = 0
            for(var event in data){
                countEvents++
            }

            for(var i=0; i<countEvents; i++){
                var key = "event-" + (i + 1)
                var j = data[key]
                divEvents.innerHTML += createSpeakerBlock(j["Name"], j["Time"] + " - " + j["Location"], j["Speaker"], j["Description"], j["PhotoUrl"])
            }
            
        } else {
            console.log('Error')
        }

    }

    // Send request
    request.send()
}

