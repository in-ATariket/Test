final class StandardOutputHtmlPrinter implements Printer {

  public void printPage(String page) {
    System.ou.println("<div>" + page + "</div>");
  }
}
