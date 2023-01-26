//Create date variable
var date = new Date()
let display_date = "Date : " + date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function(){
    $("#display_date").html(display_date)
})

//Define variable to store predicted emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call

        $.ajax({
            
            
              {
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotion);
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url);
                $('#emo_img_url').css("display", "block");
            },
            //Error function
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });
})

