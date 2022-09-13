$(document).ready(function(){
    $("#MainForm").validate({
        rule:{
            firstname:{
                required:true,
                minlength:4
        
            }
        }
    })
})