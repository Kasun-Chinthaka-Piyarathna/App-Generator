/*
 * Define the boolean whether it is a text ai or image ai.
   Text AI --> true
   Image AI --> false
   Only if it is text AI
 */
let isTextAI = true;

/*
 * AUTO GENERATED VALUE
 */
let base64Str = "";
/*
 * Define the input feilds and the AI endpoint link below
   Only if it is text AI
 */
let fieldArray = [
    /* {
        "field": "Name of your field",
        "type": "Type can be text or number",
        "default": "Default value of the field",
    }
    */
    {
        "field": "num_countries",
        "type": "number",
        "default": "0",
    },
    {
        "field": "years_school",
        "type": "number",
        "default": "9.5",
    },
    {
        "field": "height",
        "type": "number",
        "default": "4.165",
    }
]
var endpont = "https://askai.aiclub.world/3a154cab-767a-4c1f-bfef-bd2e2addd03a";
var aiTitle = "Age Prediction"