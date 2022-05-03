let arrayofObject =
    [
        {
            id: 28,
            Title: "Sweden"
        },
        {
            id: 56,
            Title: "USA"
        },
        {
            id: 89,
            Title: "England"
        },
        {
            id: 89,
            Title: "England"
        },

        {
            id: 89,
            Title: "England"
        }
    ]
let html = ``;
//console.log(arrayofObject[0])

for (let i = 0; i < arrayofObject.length; i++) {
    let value = arrayofObject[i];
    html += `
    <div class="card" id="view">
    <div class="card-block" id="view">
   
    <h4 class="card-title">Employee</h4>
    <h6 class="card-subtitle text-muted" id="id">Id:-${value.id}</h6>
    <p class="card-text p-y-1" id="title">Title:-${value.Title}</p>
    <!-- <a href="#" class="card-link">link</a>
    <a href="#" class="card-link">Second link</a> -->
    </div>
    </div>
                
  `
    document.getElementById("view").innerHTML = html;



    // document.getElementById("id").innerHTML = "ID:-" + arrayofObject[i].id
    // console.log(arrayofObject[i])

}