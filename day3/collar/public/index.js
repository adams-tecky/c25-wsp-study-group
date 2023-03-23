window.onload = () => {

    fetchData()

    document.querySelector(".bt").addEventListener('click',postData)
}
async function postData() {
    console.log("triggered")
    let res = await fetch('/track', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            trackId: "2MKENhpdJ8egUGHl6EWG5F",
            artistName: "COLLAR",
            name: "Never-never Land",
            artworkUrl100: "https://i.scdn.co/image/ab67616d0000b273a6fc7fd4773859e9b0527999",
            releaseDate: "2022-03-18T00:00:00Z",
            url: "https://open.spotify.com/track2MKENhpdJ8egUGHl6EWG5F"
        })
    })
}

async function fetchData() {
    let res = await fetch('/tracks');
    let resp = await res.json()
    console.log(resp)

    let tracksMain = document.querySelector(".tracks-main")

    let template = document.querySelector("#track-template");

    for (let track of resp) {
        console.log(track.artistName, track.name)
        const clone = template.content.cloneNode(true)
        clone.querySelector('.card-image > img').src = track.artworkUrl100
        clone.querySelector('.card-title').textContent = track.name
        let date = new Date(track.releaseDate)
        clone.querySelector('.card-content > p').textContent = `Release Date: ${date.toDateString()}`
        clone.querySelector('.card-action > a').href = track.url
        tracksMain.appendChild(clone)
    }

}

