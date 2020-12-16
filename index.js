function handleSubmit(){
    const smon  = document.getElementById("smon").value;
    const fmon =  document.getElementById("fmon").value;

    var diff = 0 ;
  if (smon && fmon) {
    smon = ConvertToSeconds(smon);
    fmon = ConvertToSeconds(fmon);
    diff = Math.abs( fmon - smon ) ;
    console.log( 'time difference is : ' + secondsTohhmmss(diff) );
  }

  function ConvertToSeconds(time) {
    var splitTime = time.split(":");
    return splitTime[0] * 3600 + splitTime[1] * 60;
  }

  function secondsTohhmmss(secs) {
    var hours = parseInt(secs / 3600);
    var seconds = parseInt(secs % 3600);
    var minutes = parseInt(seconds / 60) ;
    return hours + "hours : " + minutes + "minutes ";
  }
}