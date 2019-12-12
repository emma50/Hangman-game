const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})

    if (response.status === 200) {
        const data = await response.json()    // Takes response body and parse it as JSON
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch("//restcountries.eu/rest/v2/all", {})

    if (response.status === 200) {
        const data = await response.json()    // same as JSON.parse(json)
        return data.find((country) => country.alpha2Code === countryCode)    // data is an array
    } else {
        throw new Error('Unable to fetch the data')
    }
}

const getLocation = async () => {
    const response = await fetch("//ipinfo.io/json?token=2ccebaa94c8d5f", {})

    if (response.status === 200) {
        const data = await response.json()    
        return  {
            city: data.city,
            region: data.region,
            country: data.country
        } 
    } else {
        throw new Error('Unable to fetch the data')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

export { getPuzzle as default }




// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()    // Takes response body and parse it as JSON
//         } else {
//             throw new Error('Unable to fetch the puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// const getCountry = (countryCode) => {
//     return fetch("http://restcountries.eu/rest/v2/all", {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()    // Takes response body and parse it as JSON
//         } else {
//             throw new Error('Unable to fetch the data')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)    // data is an array
//     })
// }

// const getLocation = () => {
//     return fetch("http://ipinfo.io/json?token=2ccebaa94c8d5f", {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()    // Takes response body and parse it as JSON
//         } else {
//             throw new Error('Unable to fetch the data')
//         }
//     }).then((data) => {
//         return  {
//             city: data.city,
//             region: data.region,
//             country: data.country
//         }  
//     })
// }






// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     // Make an http request using the XHR constructor
//     const request = new XMLHttpRequest()
//     // Make use of the response
//     request.addEventListener("readystatechange", (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//         // console.log(e.target)
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject("An error occurred")
//         }
//     })

//     // Initialize the request
//     request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     // Send the request 
//     request.send()
// })


// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener("readystatechange", (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country);     
//         } else if (e.target.readyState === 4) {
//             reject("Unable to fetch data");
//         }
//     })

//     countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
//     countryRequest.send()
// })