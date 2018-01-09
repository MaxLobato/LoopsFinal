function factorTree(a) {

    var number = a;
    var order = 0;
    var factor = [];

    document.write("<h1>");
    document.write(number, "<br>");

    for (i = Math.ceil(number / 2); i > 1; i--) {
        if(i )
        factor.push(i);

        if (Math.round(number % i) == 0) {

            document.write(number / factor[order], ", ", factor[order], "<br>");



            order = order++;

        }

    }
    document.write("</h1>");

}

function betterFactorTree(number) {
    for(i = 2; i < number; i++) {
        if(number % i == 0) {
            console.log(i);
            number = number/i;
            console.log(number);
            i = 2;
        }
    }
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
