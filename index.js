var express = require('express');
var app = express();

let movies = [{
    id: "1",
    name: "The Upside",
    genre: "Comedy",
    director: "Neil Burger",
    year: 2019,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/54200/54179/PosterDynamic/66485.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/54200/54179/MovieStillDynamic/66455.jpg",
    description: "THE UPSIDE is director Neil Burger's heartfelt comedy about a recently paroled ex-convict (Kevin Hart) who strikes up an unlikely friendship with a paralyzed billionaire (Bryan Cranston). The film also stars Nicole Kidman, Julianna Margulies and Aja Naomi King."
  },
  {
    id: "2",
    name: "Jason Momoa",
    genre: "Action",
    director: "James Cameron",
    year: 2019,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/50700/50740/PosterDynamic/67851.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/50700/50740/HeroDesktopDynamic/67708.jpg",
    description: "From Warner Bros. Pictures and director James Wan comes an action-packed adventure that spans the vast, visually breathtaking underwater world of the seven seas, AQUAMAN, starring Jason Momoa in the title role. The film reveals the origin story of half-human, half-Atlantean Arthury Curry and takes him on the journey of his lifetime - one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be... a king."
  },
  {
    id: "3",
    name: "Bohemian Rhapsody",
    genre: "Drama",
    director: "Bryan Singer",
    year: 2018,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/53700/53709/PosterDynamic/66794.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/53700/53709/HeroDesktopDynamic/66639.jpg",
    description: "BOHEMIAN RHAPSODY is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. Facing a life-threatening illness, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day."
  },
  {
    id: "4",
    name: "Cold Pursuit",
    genre: "Action",
    director: "Hans Petter Moland",
    year: 2018,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/58000/58050/PosterDynamic/67719.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/58000/58050/MovieStillDynamic/67848.jpg",
    description: "Seasoned musician Jackson Maine (Bradley Cooper) discovers-and falls in love with-struggling artist Ally (Gaga). She has just about given up on her dream to make it big as a singer - until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons."
  },
  {
    id: "5",
    name: "A Star Is Born",
    genre: "Drama",
    director: "Bradley Cooper",
    year: 2018,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/52500/52472/PosterDynamic/43693.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/52500/52472/MovieStills/241805R2.jpg",
    description: "Seasoned musician Jackson Maine (Bradley Cooper) discovers-and falls in love with-struggling artist Ally (Gaga). She has just about given up on her dream to make it big as a singer - until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons."
  },
  {
    id: "6",
    name: "A Star Is Born",
    genre: "Drama",
    director: "Bradley Cooper",
    year: 2018,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/52500/52472/PosterDynamic/43693.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/52500/52472/MovieStills/241805R2.jpg",
    description: "Seasoned musician Jackson Maine (Bradley Cooper) discovers-and falls in love with-struggling artist Ally (Gaga). She has just about given up on her dream to make it big as a singer - until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons."
  },
  {
    id: "7",
    name: "Glass",
    genre: "Sspense",
    director: "Night Shyamalan",
    year: 2019,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/51200/51215/PosterDynamic/66768.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/51200/51215/MovieStillDynamic/67586.jpg",
    description: "M. Night Shyamalan brings together the narratives of two of his standout originals--2000's UNBREAKABLE and last year's SPLIT--in one explosive, all-new comic-book thriller: GLASS. From UNBREAKABLE, Bruce Willis returns as David Dunn as does Samuel L. Jackson as Elijah Price, known also by his pseudonym Mr. Glass. Joining from SPLIT are James McAvoy, reprising his role as Kevin Wendell Crumb and the multiple identities who reside within, and Anya Taylor-Joy as Casey Cooke, the only captive to survive an encounter with The Beast. Following the conclusion of SPLIT, GLASS finds Dunn pursuing Crumb's superhuman figure of The Beast in a series of escalating encounters, while the shadowy presence of Price emerges as an orchestrator who holds secrets critical to both men."
  },
  {
    id: "8",
    name: "Green Book",
    genre: "Drama",
    director: "Peter Farrelly",
    year: 2016,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/57500/57540/Poster/273307R1.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/57500/57540/MovieStillDynamic/66831.jpg",
    description: "Viggo Mortensen (EASTERN PROMISES, THE LORD OF THE RINGS trilogy) and Academy Award winner Mahershala Ali (MOONLIGHT, HIDDEN FIGURES) star in Participant and DreamWorks Pictures' GREEN BOOK. Peter Farrelly (THERE'S SOMETHING ABOUT MARY, FEVER PITCH) directs the warmhearted and surprisingly comic road-trip adventure based on a true friendship that transcended race, class and the 1962 Mason-Dixon line."
  },
  {
  id: "9",
  name: "Cold Pursuit",
  genre: "Action",
  director: "Hans Petter Moland",
  year: 2018,
  url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/58000/58050/PosterDynamic/67719.jpg",
  banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/58000/58050/MovieStillDynamic/67848.jpg",
  description: "Seasoned musician Jackson Maine (Bradley Cooper) discovers-and falls in love with-struggling artist Ally (Gaga). She has just about given up on her dream to make it big as a singer - until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons."
  },
]

app.use(express.static(__dirname +'/client'))
const port = 3333

app.get('/', (req, res) => res.sendFile(__dirname +'/index.html'))
app.get('/api/movies', (req, res) => res.send(movies))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
