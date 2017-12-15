
function PrimeCheck(a){

    var result;

  for(i = 2; i < (a/2); i++){

    if(a%i == 0){
      result = "not prime";
    } else {
        result = "Prime.";
    }


  }


    document.write(result);

}




function TimesTable(a){
var rows = a;
var cells = a;

document.write("<h1>");
document.write("<table>");
    for(i = 1; i <= rows; i++){
        document.write("<tr>");

        for(j = 1; j <= cells; j++){
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
document.write("</table>");
    document.write("</h1>");

}
