SC.initialize({
  client_id: '2728a5d4760c937bea443e9460a4e8ae',
  redirect_uri: 'http://traxxcloud.local/traxxcloud/callback.html'
});

SC.connect().then(function() {
  SC.get('/me/activities/tracks/affiliated').then(function(tracks) {
    tracks.collection.forEach(function(entry) {
      console.log(entry);
      // origin can be null, sometimes...
      if (entry.origin) {
        var data = entry.origin;
        $('#traxxs').append('<tr>\
            <td><img src="' + data.artwork_url + '" /></td>\
            <td>' +  data.user.username + '</td>\
            <td>' + data.title + '</td>\
            <td class="text-right">' + convertDuration(data.duration) + '</td>\
            <td>Play</td>\
          </tr>');
      }
    });
  });
});
