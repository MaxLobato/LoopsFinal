function factorTree(a) {

    var number = a;
    var order = 0;

    document.write("<h1>");
    document.write("<table>");
    document.write("<tr>", number, "</tr>");

    for (i = Math.ceil(number / 2); i > 1; i--) {
        document.write("<tr>");
        var factor = [i];
        order++;
        if (number % i == 0) {
            document.write("<td>", number / factor[order], "</td>", "<td>", factor[order], "</td>");
            if ((number / factor[order - 1]) >= 3) {
                break;
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
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
