let arrayofObject =
    [
        {
            Name: "Sachin Tendulkar",
            Image: "./images/sachin.jpg",
            Player: "Indian",
            Role: "AllRounder"
        },
        {
            Name: "Ricky Ponting",
            Image: "./images/ponting1.webp",
            Player: "Australia",
            Role: "Batsman"
        },
        {
            Name: "Rohit Sharma",
            Image: "./images/rohit.webp",
            Player: "Indian",
            Role: "Batsman"

        },
        {
            Name: "Virat Kohli",
            Image: "./images/kohli.jpg",
            Player: "Indian",
            Role: "Batsman"

        }
        // {
        //     id: 56,
        //     Title: "USA"
        // },
        // {
        //     id: 89,
        //     Title: "England"
        // },
        // {
        //     id: 89,
        //     Title: "England"
        // },
    ]
let html = ``;
//console.log(arrayofObject[0])

for (let i = 0; i < arrayofObject.length; i++) {
    let value = arrayofObject[i];
    html += `
    <div class="card m-5" id="view">
    <img class="card-img-top" src="${value.Image}" alt="Card image" style="width:100%">
    <div class="card-body" id="view">
   
    <h4 class="card-title">${value.Name}</h4>
    <h6 class="card-subtitle text-muted" id="id">Player:  ${value.Player}</h6>
    <p class="card-text p-y-1 " id="title">${value.Role}</p>
    <!-- <a href="#" class="card-link">link</a>
    <a href="#" class="card-link">Second link</a> -->
    </div>
    </div>
                
  `
    document.getElementById("view").innerHTML = html;



    // document.getElementById("id").innerHTML = "ID:-" + arrayofObject[i].id
    // console.log(arrayofObject[i])

}