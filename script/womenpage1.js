
    var data = [
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/67/88/41/17678841_38810350_600.jpg",
            brand:"New Season",
            name:"Versace",
            itemName:"Medusa-plaque sandals",
            price:"$1364",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/16/04/86/02/16048602_30276723_600.jpg",
            brand:"New Season",
            name:"Marni",
            itemName:"embellished strappy sandals",
            price:"$1214",
           
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/40/22/97/18402297_39430367_600.jpg",
            brand:"New Season",
            name:"Gianvito Rossi",
            itemName:"buckle-detail 90mm sandals",
            price:"$1459",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/59/04/90/17590490_38776069_600.jpg",
            brand:"New Season",
            name:"Off-White",
            itemName:"NEW TREK SANDAL GREEN FUCHSIA",
            price:"$774",
           
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
            window.location.href = "womensData.html";
        })
       
        div3.append(btn);
       
        
        
        div.append(image);
        div2.append(brand,name,itemName,price);
        
        div.append(div2,div3);
        document.querySelector("#container3").append(div);
      
        
        
    });
    
    