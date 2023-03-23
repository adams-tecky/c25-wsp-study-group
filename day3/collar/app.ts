import express from "express";

const PORT = 8080;
const app = express();

const tracksData = [
  {
    trackId: "2S0xQFTOafzeErzgTaQavg",
    artistName: "COLLAR",
    name: "The Bright Side",
    artworkUrl100:
      "https://i.scdn.co/image/ab67616d0000b27352cb8b6193f2ceb19d52c173",
    releaseDate: "2023-01-13T00:00:00Z",
    url: "https://open.spotify.com/track/2S0xQFTOafzeErzgTaQavg",
  },
  {
    trackId: "2rbid0M6p0FaDplPh5ey6P",
    artistName: "COLLAR",
    name: "OFF/ON",
    artworkUrl100:
      "https://i.scdn.co/image/ab67616d0000b273fcce104b34bbe56419afd90f",
    releaseDate: "2022-07-15T00:00:00Z",
    url: "https://open.spotify.com/track/1k4epQqpbGkyIm3O6bRALu",
  }
];
// app.get("/", (req, res) => {
//   res.send("hello");
// });
app.use(express.json())
app.use(express.urlencoded())

app.use(express.static("public"));

app.get("/tracks", (req, res) => {
  res.json(tracksData);
});

app.get("/tracks/:trackId",(req,res)=>{
  console.log("find one song with specific id")
  const filteredResult = tracksData.find((e) => e.trackId == req.params["trackId"]);
  res.json(filteredResult)
})

app.post("/track",(req,res)=>{
  console.log("now creating new track",req.body.name)
  res.status(202).json("hihihihi")
})

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
