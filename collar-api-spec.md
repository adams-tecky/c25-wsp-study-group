# Collar API Specification
**API**  stands for Application Programming Interface.
> Imagine you're at a restaurant, and you want to order food. The waiter is the "API" between you and the kitchen. You tell the waiter what you want, and they take your order to the kitchen, where the chefs prepare your food. Then, the waiter brings your food back to you.
>
> Similarly, in software development, an API acts as a middleman between two different applications.
> 
>  One application (like a mobile app or a website) makes a request to the API, asking for some data or functionality. 
> The API then sends that request to the other application (like a database or a payment system), which processes it and sends a response back to the API.
> 
>  The API then sends that response back to the original application, which can use the data or functionality provided by the other application.
>  
> So, an API is like a waiter in a restaurant, acting as a go-between for different parts of a system.

## Objective

Our API will manage Collar's new track:
- create a new track using HTML Form
- retrieve a list of tracks or a single track
- update an existing track's information
- delete a track

We will build these endpoints:
- `GET /tracks` should return all the tracks 
- `GET /tracks/:trackId` should return a single track (that matches the passed trackId) 
- `POST /tracks` should save a new track 
- `PUT /tracks/:trackId` should update the track (that matches the passed trackId) 
- `DELETE /tracks/:trackId` should delete the track (that matches the passed trackId)


## Setup
In the `server.ts`, add in the following data parsed from Spotify API as initial data:
```js
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
  },
];
```

For creating new track using **POST** method,you may use the following data:
```
{
  trackId: "2MKENhpdJ8egUGHl6EWG5F",
  artistName: "COLLAR",
  name: "Never-never Land",
  artworkUrl100: "https://i.scdn.co/image/ab67616d0000b273a6fc7fd4773859e9b0527999",
  releaseDate: "2022-03-18T00:00:00Z",
  url: "https://open.spotify.com/track2MKENhpdJ8egUGHl6EWG5F"
}
```
