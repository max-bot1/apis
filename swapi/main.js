
const button = document.querySelector("#button")

function clickButt (){
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(function (res) {
        for(let i = 0;i < res.data.results[0].residents.length; i++){
            axios.get(res.data.results[0].residents[i])
            .then(function (res) {
                console.log(res)
                const h2 = document.createElement("h2")

                h2.textContent = `${res.data.name}`
                document.querySelector('body').appendChild(h2)
            })
        }
    })
}

document.addEventListener('click', clickButt)