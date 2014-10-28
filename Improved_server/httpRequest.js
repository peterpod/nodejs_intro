  $(function() {    // do once original document loaded and ready
        //call getJSON when myform is submitted
        $('#myform').on('submit',function(event) {
            var displayText = "";
            event.preventDefault();
                //gather JSON from form.html and parse url using the second parameter
                $.getJSON("form.html", "brand=" + $("#brand").val() + "&price=" + $("#price").val() + "&year=" + $("#year").val() + "&modelnum=" + $("#modelnum").val(), function(data, diditwork) {
                        console.log('this is data'+data);
                        displayText = "<h1>Here is your Car!</h1><br><li>Brand: "+data.model+ "<\/li><li>Model Number: " 
                        +data.modelNo+ "<\/li>"
                         + "<li>Color: "
                        +data.color+ "<\/li>"
                         +"<li>Engine: "
                        +data.engine+ "<\/li>"
                         + "<li>Top Speed: "
                        +data.topspeed+ "<\/li>"
                         + "<li>Year: "
                        +data.year+ "<\/li>"
                         + "<\/ul>";
                        console.log('this is display text'+displayText);
                //add the html created from JSON to html div
                $("#responseArea").html(displayText);
                } );  // getJSON
        } );  // submit
  } ); // onReady
