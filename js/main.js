function sentencecase(a) {
	a = a.toLowerCase();
	var b = true;
	var c = "";
	for (var d = 0; d < a.length; d++) {
		var e = a.charAt(d);
		if (/\.|\!|\?|\n|\r/.test(e)) {
			b = true;
		} else if ($.trim(e) != "" && b == true) {
			e = e.toUpperCase();
			b = false;
		}
		c += e;
	}
	return c;
}
function alternatingcase(a) {
	a = a.toLowerCase();
	var b = "";
	for (var c = 0; c < a.length; c++) {
		var d = a.charAt(c);
		if (c % 2) {
			b += d.toUpperCase();
		} else {
			b += d;
		}
	}
	return b;
}
function ucfirst(a) {
	var b = a.charAt(0).toUpperCase();
	return b + a.substr(1);
}
function ucwords(a) {
	return (a + "").replace(/^(\S)|\s+(\S)/g, function(a) {
		return a.toUpperCase();
	});
}
$(document).ready(
	function() {
		var a = "None";
		$("#upper").click(function() {
			$("#content").val($("#content").val().toUpperCase());
			return false
		});
		$("#lower").click(function() {
			$("#content").val($("#content").val().toLowerCase());
			return false
		});
		$("#capitalized").click(function() {
			$("#content").val(ucwords($("#content").val().toLowerCase()));
			return false
		});
		$("#sentence").click(function() {
			$("#content").val(sentencecase($("#content").val()));
			return false
		});
		$("#alternating").click(function() {
			$("#content").val(alternatingcase($("#content").val()));
			return false
		});

		$('#change').click(function(){
			text = $('#content').val();
			text= text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");  
			text= text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");  
			text= text.replace(/ì|í|ị|ỉ|ĩ/g,"i");  
			text= text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");  
			text= text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");  
			text= text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");  
			text= text.replace(/đ/g,"d");  
			$('#content').val(text);
		})
		var b = $("#content").attr('data-placeholder');
		function calc_counts() {
			$('#character').text($('#content').val().length);
			$('#word').text(
					$.trim($('#content').val()).replace(/\s+/gi, ' ')
							.split(' ').length);
		}

		$("#content").focus(function() {
			calc_counts();
		});
		$("#content").blur(function() {
			if ($(this).val() == "") {
				$(this).val(b)
			}
			calc_counts();
		});
		$("#content").keyup(function() {
			calc_counts();
		});
		calc_counts();
	}
);
