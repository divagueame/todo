import { homeTab } from './homeTab.js';
import { menuTab } from './menuTab.js';
import { offersTab } from './offersTab.js';
import { aboutTab } from './aboutTab.js';

const headLoader = ()=>{
    
    const container = document.querySelector(".container");

    const navDiv = document.createElement("div");
    navDiv.classList.add("navDiv");



    navDiv.innerHTML = `
                        <h2 class="display-4 text-center py-5 my-2">DISPLAY 4</h2>

                        <nav class="nav justify-content-center nav-pills flex-column flex-md-row">
                            <a href="#home" class="nav-link active" data-toggle="tab">Home</a>
                            <a href="#menu" class="nav-link" data-toggle="tab">Menu</a>
                            <a href="#offers" class="nav-link" data-toggle="tab">Special offers</a>
                            <a href="#about" class="nav-link" data-toggle="tab">About us</a>
                        </nav>
                    </div>
            
                    <div class="tab-content py-5">
                        <div class="tab-pane active" id="home">${homeTab}</div>
                        <div class="tab-pane" id="menu">${menuTab}</div>
                        <div class="tab-pane" id="offers">${offersTab}</div>
                        <div class="tab-pane" id="about">${aboutTab}</div>
                    </div>
                    `;

    container.appendChild(navDiv)
}

export {
    headLoader
}