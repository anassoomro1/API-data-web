



const div = document.querySelector('div')


axios('https://api.escuelajs.co/api/v1/products')
.then((res) => {
    console.log(res.data); 
    res.data.map((item)=>{
        div.innerHTML+= `
        <h1>category: ${item.category} </h1>
        <h1>title: ${item.title} </h1>
        <img src="${item.image}" alt="image-products"/>
        <h1>price: ${item.price} </h1>
        <hr/>
        `
    })
})
  .catch((error) => {
    console.error(error); 
  });
