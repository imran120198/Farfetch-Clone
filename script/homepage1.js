
    var data = [
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/57/15/11/17571511_37706649_1000.jpg",
            brand:"New Season",
            name:"Palm Angels",
            itemName:"hibiscus-print cargo swim shorts",
            price:"$415",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/68/13/20/17681320_39275058_1000.jpg",
            brand:"New Season",
            name:"Versace",
            itemName:"baroque-pattern print swim shorts",
            price:"$620",
           
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/22/83/76/17228376_35403100_1000.jpg",
            brand:"New Season",
            name:"Nanushka",
            itemName:"all-over floral print swim shorts",
            price:"$367",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/93/10/11/17931011_37815301_1000.jpg",
            brand:"New Season",
            name:"Moncler",
            itemName:"logo-patch swim shorts",
            price:"$307",
           
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
            window.location.href = "mensData.html";
        })
       
        div3.append(btn);
       
        
        
        div.append(image);
        div2.append(brand,name,itemName,price);
        
        div.append(div2,div3);
        document.querySelector("#container3").append(div);
      
        
        
    });
    
    