const KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'


//AJAX  Asynchronous JavaScript And XML
// const llamarApi = (busqueda)=> {
//     $.get(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${encodeURI(busqueda)}&limit=20`, function(response){
//         console.log(response.data[0].images.downsized_medium.url)
//         $('.row').html('') //vaciar el contenedor del row
//         response.data.forEach(element => {
//         $('.row').append(`
//             <li class='card col-3'>
//                 <img src= ${element.images.downsized_medium.url} alt="">
//             </li>
//          `)

//         });

//     })
// }


//fetch Async Await
 const llamarApi = async(busqueda)=> {
     const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${encodeURI(busqueda)}&limit=20`)
     const {data}= await resp.json() //obtengo la propiedad data del objeto, estructuracion de objetos
     const arraysImg = data.map(el => el.images.downsized_medium.url) //un arreglo solo con lo que me interesa
     $('.row').html('') //vaciar el contenedor del row
     arraysImg.forEach(img => {
        $('.row').append(`
            <li class='card col-3'>
                <img src= ${img} alt="">
            </li>
       `)
        
    });

 }


$('form').on('submit',(e)=> {
    e.preventDefault()
    llamarApi($('input').val())
})


// $('#siguiente').on('click',llamarApi)

