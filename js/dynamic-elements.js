document.addEventListener('DOMContentLoaded', function () {
    var h3 = document.createElement("h3");
    h3.className = "pt-2 mb-3";
    h3.innerHTML = aiTitle;
    document.getElementById("add_title").appendChild(h3);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    if (isTextAI === true) {
        for (var i = 0; i < fieldArray.length; i++) {
            //create a div element
            var div = document.createElement('div');
            div.className = 'form-floating';
            //create an input element
            var input = document.createElement('input');
            input.type = fieldArray[i].type;
            input.id = fieldArray[i].field;
            input.className = "form-control";
            input.required = "true";
            input.defaultValue = fieldArray[i].default;
            input.name = fieldArray[i].field;
            div.appendChild(input);
            //create a label element
            var label = document.createElement("label");
            label.setAttribute("for", fieldArray[i].field);
            label.innerHTML = fieldArray[i].field;
            div.appendChild(label);
            //append element
            document.getElementById("field_inputs_div").appendChild(div);
        }
    } else {
        //continue when it is an image AI
        var img = document.createElement('img');
        img.id = "img-preview";
        img.src = "images/image_preview.jpg";
        img.className = "play-ai-image img-fluid image_preview"
        document.getElementById("field_inputs_div").appendChild(img);
        var input = document.createElement('input');
        input.type = "file";
        input.id = "image-input";
        input.accept = "image/*"
        input.required = "true";
        input.className = "file_input"
        input.onchange = "onFileSelected(event)";
        document.getElementById("field_inputs_div").className = "field_inputs_for_image_AI";
        document.getElementById("field_inputs_div").appendChild(input);
        document.getElementById('image-input').onchange = function (evt) {
            var tgt = evt.target || window.event.srcElement,
                files = tgt.files;
            if (FileReader && files && files.length) {
                var fr = new FileReader();
                fr.onload = function () {
                    document.getElementById("img-preview").src = fr.result;
                    base64Str = fr.result.split(',')[1];
                }
                fr.readAsDataURL(files[0]);
            }
        }
    }
}, false);




