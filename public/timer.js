$(function(){

  // 開始ボタンを押した時に取ってくる時間
  var start_time;
  var timer;
  // 差分
  var diff;


  // 一時停止した時のタイム
  var stop_time = 0;

  $('#start').click(function(){
    start_time = new Date();
    timer = setInterval(countup, 500);
    $(this).attr('disabled', 'disabled');
  });

  $('#stop').click(function(){
    stop_time = diff;
    clearInterval(timer);
    $('#start').removeAttr('disabled');
  });

  $('#reset').click(function(){
    start_time = null;
    stop_time = 0;
    $('#clock').html('00:00');
    clearInterval(timer);
    $('#start').removeAttr('disabled');
  });

  function countup(){

    // countup関数が呼ばれた時の時間
    var new_time = new Date();

    diff = new_time - start_time + stop_time;

    var sec = parseInt(diff/1000 % 60);
    var min = parseInt(diff/1000/60 % 60);


    // 0埋め
    var sec_number = ('0' + sec).slice(-2);
    var min_number = ('0' + min).slice(-2);

    $('#clock').html( min_number + ':' + sec_number);

  }

});
