confirm("hope you like our services")
alert("thank you and have ahappy life ")
var order = prompt('enter wedding or receptio')
while (order !== "wedding" && order !=="receptio"){
    order= prompt ( "what is your celebration wedding or reception?");
}
// function decleration

function getName()

{
    var username = prompt("ENTER YOUR name");
    console.log(username);
  

    for (var i=0; i<10; i++)
    {console.log(i)

        //function calling
       
        document.write(username);

        alert(username);
    }
}

getName();