let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
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

// ath
// : 
// 69045
// ath_change_percentage
// : 
// -66.9018
// ath_date
// : 
// "2021-11-10T14:24:11.849Z"
// atl
// : 
// 67.81
// atl_change_percentage
// : 
// 33601.39091
// atl_date
// : 
// "2013-07-06T00:00:00.000Z"
// circulating_supply
// : 
// 19282975
// current_price
// : 
// 22838
// fully_diluted_valuation
// : 
// 480018992599
// high_24h
// : 
// 23402
// id
// : 
// "bitcoin"
// image
// : 
// "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated
// : 
// "2023-02-06T10:59:00.941Z"
// low_24h
// : 
// 22739
// market_cap
// : 
// 440771153991
// market_cap_change_24h
// : 
// -10059830473.799255
// market_cap_change_percentage_24h
// : 
// -2.2314
// market_cap_rank
// : 
// 1
// max_supply
// : 
// 21000000
// name
// : 
// "Bitcoin"
// price_change_24h
// : 
// -555.7189219000538
// price_change_percentage_24h
// : 
// -2.37547
// roi
// : 
// null
// symbol
// : 
// "btc"
// total_supply
// : 
// 21000000
// total_volume
// : 
// 30205929008