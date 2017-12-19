function factorTree(a) {

    var number = a;
    var order = 0;
    var factor = [];

document.write("<h1>");
    document.write(number,"<br>");

    for (i = Math.ceil(number / 2); i > 1; i--) {

        document.write("<tr>");

        factor.push(i);

        if (Math.round(number % i) == 0) {

            document.write(number / factor[order],", ", factor[order], "<br>");

            if ((factor[order]%i) <= 3) {

                break;
            }

            order = order++;

        }

    }
    document.write("</h1>");

}

function factorTree2(a) {

    document.write("<h1>");
for(i=2; i < number; i++){

    if(number % i == 0){

    document.write(i, ", ", number);
    number = number/i;
    i = 2;
   }
}

document.write("</h1>");
}






function TimesTable(a) {
    var rows = a;
    var cells = a;

    document.write("<h1>");
    document.write("<table>");
    for (i = 1; i <= rows; i++) {
        document.write("<tr>");

        for (j = 1; j <= cells; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("</h1>");

}
