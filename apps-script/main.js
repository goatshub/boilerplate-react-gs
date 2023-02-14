function doGet(){
    let tmp = HtmlService.createTemplateFromFile("index")
    return tmp.evaluate().setTitle("Webpage").addMetaTag("viewport", "width-device-width, initial-scale=1.0")
}