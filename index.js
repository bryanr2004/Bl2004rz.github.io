// Crear una instancia de WebTorrent
var client = new WebTorrent();

// Obtener el magnet link del archivo torrent que deseas reproducir
var magnetUri = 'magnet:?xt=urn:btih:8DE6AFE3E9E186B2839DED6385DC334931BE8702&dn=John.Wick.Chapter.4.2023.V1.1080p.HDTS.x264.Dual.YG%E2%AD%90&tr=https%3A%2F%2Finferno.demonoid.is%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce&tr=http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.altrosky.nl%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2970%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce';

// Añadir el torrent a WebTorrent y reproducirlo
client.add(magnetUri, function (torrent) {
  // Obtener el archivo de video dentro del torrent
  var file = torrent.files.find(function (file) {
    return file.name.endsWith('.mkv');
  });

  // Crear un elemento de video y agregarlo a la página
  var video = document.createElement('video');
  video.src = URL.createObjectURL(file.createReadStream());
  document.body.appendChild(video);

  // Comenzar a reproducir el video
  video.play();
});
