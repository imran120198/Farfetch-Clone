
    var data = [
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3521078/data/cd66b7ab33469575e46e924b286cdcf3.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"TRENDING BAGS",
            itemName:"Including the palm Beach by Palm Angles",
          
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3521100/data/1de28d1c8f8edf86fbbf97911b01b6fa.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"MAISON MARGIELA",
            itemName:"The Tabis,the bags,the denim",
           
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3521120/data/26366ae83bb4eb3cd6052e558fc2ae90.png?ratio=3x4_three-columns&minWidth=480",
            name:"CROPPED KINTS",
            itemName:"Alessandra Rich keeps it short and sweet",
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
        document.querySelector("#container2").append(div);
      
        
        
    });
    
    