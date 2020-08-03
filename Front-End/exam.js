

$(document).ready(function(){
    var sol_bar="";
    for (let i = 0; i < 4; i++) {

        if(i%2==0){
            badge="badge-success"
        }
        else{
            badge="badge-secondary"
        }

        sol_bar+=`
        <li id="sol-${i+1}" class="nav-item">
            <a class="nav-link" href="#">سوال<span class="badge ${badge}">${i+1}</span></a>
        </li>
        
        `
    }
    $(".sol-bar").append(sol_bar);
});