var buttons = [];

$(document).ready(function(){

    createButtons();

});
/*==================================================
*   Buttons erstellen
==================================================*/
function createButtons() {
    addButton(0,
    "test",
    "nice test und so",
    "https://www.google.de",
    "");

    addButton(1,
    "test",
    "nice test und so",
    "",
    "");
}
/*==================================================
        Neuen Button hinzufügen
   @param id:           Button-ID
   @param name:         Überschrift des Buttons
   @param description:  Beschreibung des Buttons
   @param url:          URL die beim Click aufgerufen wird
   @param image:        Icon unter Überschrift
==================================================*/
function addButton(id, name, description, url, image) {
    console.log(addButton);
    var button = {
        id:id,
        name:name,
        description:description,
        url:url,
        image:image
    }
    buttons.push(button);


    const btn = `<div class="boxButton" id="boxBtn${id}" onclick="window.open('https://www.google.de')">
                            <div class="boxButtonLeft" id="boxBtn${id}Left">
                                <h2 class="titleButton">${name}</h2>
                                <p class="label">${description}</p>
                            </div>
                            <div class="boxButtonLine">
                            </div>
                            <div class="boxButtonRight" id="boxBtn${id}Right">
                                <img src="https://c.tenor.com/NjbLQCvQoC8AAAAC/bongo-cat.gif" alt="bongocat.gif" width="127" height="93">
                            </div>
                        </div>`;

    $("#cMain").append(btn);
}