window.onload = () => {

    fetchData()
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