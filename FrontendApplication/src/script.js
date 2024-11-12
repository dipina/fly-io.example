var api = process.env.API_GATEWAY; // get the API Gateway from the environment

$(document).ready(function() {
    $("#btn").click(function() {
        $.ajax({
            url: api + "/api/randomquote",
            type: "GET",
            dataType: "json",
            timeout: 3000,
            success: function(data) {
                $("#quote").removeClass('is-danger') 
                $("#quote").addClass('is-link')
                $( "#quote" ).html(data.quote.quote + '</br><b>'+ data.quote.by +'</b>'); 
            },
            error: function(xmlhttprequest, textstatus, message) {
                $("#quote").removeClass('is-link')
                $("#quote").addClass('is-danger')
                if(textstatus==="timeout") {
                    $( "#quote" ).html("got timeout");
                } else {
                    $( "#quote" ).html(message);
                }
            }
        })
    });
	$("#btn-status").click(function() {
        $.ajax({
            url: api + "/api/status",
            type: "GET",
            dataType: "json",
            timeout: 3000,
            success: function(data) {
                $("#status").removeClass('is-danger') 
                $("#status").addClass('is-link')
                $("#status" ).html(data.status); 
            },
            error: function(xmlhttprequest, textstatus, message) {
                $("#status").removeClass('is-link')
                $("#status").addClass('is-danger')
                if(textstatus==="timeout") {
                    $( "#status" ).html("got timeout");
                } else {
                    $( "#status" ).html(message);
                }
            }
        })
    });
})