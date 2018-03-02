var loading = document.getElementById('loading');
var utama   = document.getElementById('utama');

function doShort() {
var longUrl = document.getElementById('long_url').value;

var regeXP = /https:\/\//;
var regeXP2 = /http:\/\//;

    if (longUrl !== '') {
        if (regeXP.test(longUrl) || regeXP2.test(longUrl) ) {
            var url = "http://localhost:3000";

            $('#loading').toggle('fadeIn');
            $('#utama').toggle('fadeOut');
            $('#long_url').addClass('hilang');
            
            $.post(url, {
                original: longUrl
            }, function(data) {
                if (!data) {

                    console.log(data)
                    $('#loading').toggle('fadeOut');
                    $('#utama').toggle('fadeIn');
                    $('#long_url').toggle('fadeIn');
                    
                } else {
                    console.log(data);

                    $('#second').toggle('fadeIn');
                    $('#second_url').val(`http://localhost:3000/${data.short}`).removeClass('hilang')
                    $('#loading').toggle('fadeOut');

                }
            })

        } else {
        swal('Maaf', 'Tolong Paste Url Dengan Format Yang benar', 'error');                        
        }
    } else {
        swal('Maaf', 'Jangan Dikosongkan', 'error');
    }
}

function copyUrl() {
    var copyText = document.getElementById("second_url");
        copyText.select();
        document.execCommand("Copy");
        swal('Berhasil', 'Berhasil Di Copy Ke Clipboard', 'success');
}

$(document).ready(function() {
    number=5; setInterval(function(){ 
        if (number >=0) {
         document.getElementById('timernya').innerHTML = number--;

        } else {
            clearInterval();
            $('#buttonnya').removeClass('hilang');
            $('#shiva').addClass('hilang');
        }
        
}, 1000)

});