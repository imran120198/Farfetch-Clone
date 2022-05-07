


    var data = [
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/77/64/35/17776435_39471404_1000.jpg",
            brand:"New Season",
            name:"versace",
            itemName:"logo-print T-shirt",
            price:"$471",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/38/59/40/18385940_39460092_600.jpg",
            brand:"New Season",
            name:"Casablanca",
            itemName:"logo-buckle leather belt",
            price:"$475",
           
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/34/92/08/18349208_39442575_600.jpg",
            brand:"New Season",
            name:"Z Zegna",
            itemName:"slim-cut tailored trouser",
            price:"$582",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/75/15/31/17751531_39418083_1000.jpg",
            brand:"New Season",
            name:"Maison Margiela",
            itemName:"touch-strap fastening sandals",
            price:"$1003",
           
        }
    ]
    
    
    
    data.map(function(elem) {
        
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        
        var image = document.createElement("img");
        image.setAttribute("src",elem.imgUrl);
        
        
        var brand = document.createElement("p");
        brand.textContent = elem.brand;
        
        var name = document.createElement("h4");
        name.textContent = elem.name;
        
        var itemName = document.createElement("p");
        itemName.textContent = elem.itemName;
        
        var price = document.createElement("p");
        price.textContent = elem.price;
        
        
        var div3 = document.createElement("div");
        var btn = document.createElement("button");
        btn.textContent = "Shop Now";
        btn.addEventListener("click",function(){
            window.location.href="mensData.html"
        })
       
        div3.append(btn);
       
        
        
        div.append(image);
        div2.append(brand,name,itemName,price);
        
        div.append(div2,div3);
        document.querySelector("#container").append(div);
      
        
        
    });
    
    