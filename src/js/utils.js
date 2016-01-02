function convertDuration(duration) {
  var minutes = (duration / 60000) | 0;
  var seconds = ((duration % 60000) / 1000) | 0;
  minutes = (minutes < 10) ? minutes = '0' + minutes : minutes;
  seconds = (seconds < 10) ? seconds = '0' + seconds : seconds;

  return minutes + ':' + seconds;
}