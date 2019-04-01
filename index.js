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
    name: "Captive State",
    genre: "SCI FI",
    director: "Rupert Wyatt",
    year: 2019,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1551889052/amc-cdn/production/2/movies/53800/53816/PosterDynamic/74303.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/53800/53816/MovieStillDynamic/46536.jpg",
    description: "Set in a Chicago neighborhood nearly a decade after an occupation by an extra-terrestrial force, CAPTIVE STATE explores the lives on both sides of the conflicts - the collaborators and the dissidents."
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
  name: "Captain Marvel",
  genre: "Action",
  director: "Anna Boden and Ryan Fleck",
  year: 2019,
  url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/45800/45838/PosterDynamic/67602.jpg",
  banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1551480547/amc-cdn/production/2/movies/45800/45838/HeroDesktopDynamic/74224.jpg",
  description: "Seasoned musician Jackson Maine (Bradley Cooper) discovers-and falls in love with-struggling artist Ally (Gaga). She has just about given up on her dream to make it big as a singer - until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons."
  },
  {
    id: "10",
    name: "Wonder Park",
    genre: "Animation",
    director: "Dylan Brown",
    year: 2019,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/49800/49764/PosterDynamic/67725.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1/amc-cdn/production/2/movies/49800/49764/MovieStillDynamic/67740.jpg",
    description: "WONDER PARK Park tells the story of a magnificent amusement park where the imagination of a wildly creative girl named June comes alive."
  },
  {
    id: "11",
    name: "Five Feet Apart",
    genre: "Drama",
    director: "Justin Baldoni",
    year: 2019,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1548965262/amc-cdn/production/2/movies/57400/57359/Poster/273788R1.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1549022617/amc-cdn/production/2/movies/57400/57359/MovieStills/273788R2.jpg",
    description: "What would love feel like if you were forbidden to touch? FIVE FEET APART is the story of Stella (Haley Lu Richardson) and Will (Cole Sprouse), two young people who refuse to be defined by the obstacles that separate them."
  },
  {
    id: "12",
    name: "No Manches Frida 2",
    genre: "Comedy",
    director: "Nacho Garcia Velilla", 
    year: 2019,
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1549488967/amc-cdn/production/2/movies/58800/58797/PosterDynamic/73613.jpg",
    banner: "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1549800232/amc-cdn/production/2/movies/58800/58797/MovieStills/282428R2.jpg",
    description: "In this over-the-top sequel to the smash hit NO MANCHES FRIDA, the all-star cast of the original (Omar Chaparro and Martha Higareda) and some fresh new faces (Itati Cantoral and Aaron Diaz) leave the school yard and hit the beach in NO MANCHES FRIDA 2! But there's trouble in paradise... literally. When the seemingly reformed ex-con Zequi is about to marry the love of his life, the lovably nerdy Lucy, wedding day jitters turn into a full blown fiasco and Lucy calls the wedding off. Meanwhile, the school finds itself in deep trouble and the gang heads to the water to compete in the tournament of their lives. Once they're all seaside, Lucy runs into her high school sweetheart Mario, whom since she last saw him has transformed into a smoking hot hunk. He's coach of the opposing squad and Zequi finds himself a rival in more than one competition. Now he has to pull out all the stops to wrangle in his rowdy kids, win Lucy back, and in case that wasn't enough, save the school from shutting down by leading Frida High to victory!"
  }
]

app.use(express.static(__dirname +'/client'))
const port = 9000

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.get('/api/movies', (req, res) => res.send(movies))
app.get('/api/sessions', (req, res) => res.send(sessions))
app.get('/api/movies/:id', (req, res) => res.send(movies[req.params.id]))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.delete('/api/movies/:id', (req, res) => {
//   console.log(req.params);
//   movies.pop();
//   res.sendStatus(200);
// });

// app.post('/api/movies', (req, res) => {
//   console.log(req.body);
//   res.sendStatus(200);
// });


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))