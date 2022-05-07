
    var data = [
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3521178/data/c63801e9dc1d98635994b96e9107d917.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"THE MODERN FEMININITY EDIT",
            itemName:"Dreamy silhouetted and muted palettes",
          
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3521198/data/af1fbf093ab89fd5993b9e57e461df59.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"THE CLASSIC EDIT",
            itemName:"Timeless prices to love forever",
           
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3521220/data/9cbdc35d68d5cfee46d6343c22ba63fa.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"THE EPRESSIONIST EDIT",
            itemName:"Cult collaborations and exciting launches",
        }
    ]
    
    
    
    data.map(function(elem) {
        
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        
        var image = document.createElement("img");
        image.setAttribute("src",elem.imgUrl);
        
        var name = document.createElement("p");
        name.textContent = elem.name;
        
        var itemName = document.createElement("p");
        itemName.textContent = elem.itemName;
                        
        
        div.append(image);
        div2.append(name,itemName);
        
        div.append(div2);
        document.querySelector("#container6").append(div);
      
        
        
    });
    
    