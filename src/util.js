import { v4 as uuidv4 } from "uuid";
function music() {
  return [
    {
      name: "Before Chill",
      cover:
        "https://d34qmkt8w5wll9.cloudfront.net/commercial-releases/cover_art/jpg/328.jpg",
      artist: "Yomoti",
      audio:
        "https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Before%20Chill/ES_Before%20Chill.mp3",
      color: ["#CB3030", "#4F2F44"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "In All Honesty, I Do",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/61BFVHnwU6L._AC_UL600_SR600,600_.jpg",
      artist: "Nocturnal Spirits",
      audio:
        "https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/In%20All%20Honesty,%20I%20Do/ES_In%20All%20Honesty,%20I%20Do.mp3",
      color: ["#F0BB73", "#2E2213"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Got That Feeling",
      cover: "https://m.media-amazon.com/images/I/61GL-5-vBJL._SS500_.jpg",
      artist: "Peter Sandberg",
      audio:
        "https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Got%20That%20Feeling/ES_Got%20That%20Feeling.mp3",
      color: ["#02558C", "#528560"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default music;
