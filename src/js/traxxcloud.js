SC.initialize({
  client_id: '2728a5d4760c937bea443e9460a4e8ae',
  redirect_uri: 'http://traxxcloud.local/traxxcloud/callback.html'
});

SC.connect().then(function() {
  SC.get('/me/activities/tracks/affiliated').then(function(tracks) {
    tracks.collection.forEach(function(entry) {
      // origin can be null, sometimes...
      if (entry.origin) {
        var data = entry.origin;
        var artwork = (data.artwork_url) ? data.artwork_url : 'img/no-pic.jpg';
        $('#traxxs').append('<tr>\
            <td><img src="' + artwork + '" /></td>\
            <td>' +  data.user.username + '</td>\
            <td>' + data.title + '</td>\
            <td class="text-right">' + convertDuration(data.duration) + '</td>\
            <td>Play</td>\
          </tr>');
      }
    });
  });
});
