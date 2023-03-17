import fetch from "node-fetch"


console.log("start fetching")

async function main() {
    const response = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en');
    const result = await response.json()
    console.log(result)
}

main()