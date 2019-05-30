function songDecoder(song) {
  return song.split("WUB")
  .filter(el => el !== '')
  .join(' ');
}

console.log(songDecoder("AWUBBWUBWUBWUBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
