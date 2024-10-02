async function pizza() {
    const responce = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await responce.json();
    const result = data.recipes.map(function(user){
        return `
        <div class="user">
            <img src='${user.image_url}' >
             <h3>${user.recipe_id}</h3>
            <h2>${user.title}</h2>
            <p>${user.social_rank}</p>
           
        </div>
        `;
    }).join('');
   
    document.querySelector(".pizza-time .container .row").innerHTML=result;
}
pizza();
