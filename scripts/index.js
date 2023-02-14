let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
let doc = document.querySelector("tbody");

fetch(url)
.then((res)=>res.json())
.then((data)=>{console.log(data)

display(data)})
.catch((err)=>console.log(err))


function display(data){

    doc.innerHTML=null;

    data.map(function(ele,ind){

        let tr = document.createElement("tr");
        let image = document.createElement("img");
        let coinName = document.createElement("td");
        let price =  document.createElement("td");
        let marget_cap =  document.createElement("td");
        let high =  document.createElement("td");
        let low =  document.createElement("td");
        let div = document.createElement("div");

        image.src = ele.image;
        coinName.innerText = ele.id;
        price.innerText = ele.current_price;
        marget_cap.innerText = ele.market_cap;
        high.innerText = ele.high_24h;
        low.innerText = ele.low_24h;
        div.append(image,coinName);
        tr.append(div,price,marget_cap,high,low);
        doc.append(tr);
    })
}

