$(function(){
    fileUpload();
});

function fileUpload(){
    $(".uploadBtn").click(function(){
       $(this).parent().prev("input[type='file']").click();
    });
    
    var upload = $("input[type='file']");
    upload.unbind("change");
    upload.change(function(){
        var text = "Choose File";
        if (this.files.length > 1){
            text = this.files.length + " Files Selected";
        }
        else if (this.files.length == 1) {
            text = $(this).val().substring($(this).val().lastIndexOf("\\")+1);
        }
        $(this).prev("input").val(text);
    });
}
