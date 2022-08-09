$(document).ready(function () {
 
    /* initially hide product list items */
    $("#myUL li").hide();
 
    /* highlight matches text */
    var highlight = function (string) {
        $("#myUL li.match a").each(function () {
            var matchStart = $(this).text().toLowerCase().indexOf("" + string.toLowerCase() + "");
            var matchEnd = matchStart + string.length - 1;
            var beforeMatch = $(this).text().slice(0, matchStart);
            var matchText = $(this).text().slice(matchStart, matchEnd + 1);
            var afterMatch = $(this).text().slice(matchEnd + 1);
            $(this).html(beforeMatch + "<b>" + matchText + "</b>" + afterMatch);
        });
    };
 
 
    /* filter products */
    $("#myInput").on("keyup click input", function () {
        if (this.value.length > 0) {
            $("#myUL li").removeClass("match").hide().filter(function () {
                console.log($(this));
                return $(this).text().toLowerCase().indexOf($("#myInput").val().toLowerCase()) != -1;
            }).addClass("match").show();
            highlight(this.value);
            $("#myUL").show();
        }
        else {
            $("#myUL, #myUL li").removeClass("match").hide();
        }
    });
 
 
});

/* function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");	
	
	if(input.value == 0){
		ul.style.display = "";
	}
	else{
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul.style.display ="block";
			li[i].style.display = "";
			txtValue.bold();
        } else {
            li[i].style.display = "none";			
        }
	 }
    }
} */