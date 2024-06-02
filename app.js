



const div = document.querySelector('div')


axios('https://fakestoreapi.com/products')
.then((res) => {
    console.log(res.data); 
    res.data.map((item)=>{
        div.innerHTML+= `
        <h1>category: ${item.category} </h1>
        <h1>title: ${item.title} </h1>
        <img width= "300" src="${item.title}" alt="item.image">
        <h1>price: ${item.price} </h1>
        <hr/>
        `
    })
})
  .catch((error) => {
    console.error(error); 
  });
