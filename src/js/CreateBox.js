import { getText } from './api';

export default class CreateBox {
    constructor() {
        this.text = [];
        //For the sake of the test getting random pics from Picsum
        this.image = 'https://picsum.photos/1920/1088';
    }

    //Init method will get texts from the API and create the boxes
    async init() {
        const app = document.querySelector("#app");
        
        //Adding sale text to create the CSS animation for excercise 4
        const saleText = `Sale <br/> up to <span class="animate"></span> off`;

        //For the sake of the test getting random text from an API and splitting it in single words
        const texts = await getText();
        const splitText = texts[0].split(" ");

        let counter = 1;

        //Add 10 texts to the array (including sale text in the respective boxes) for all boxes
        while (counter <= 10) {
            if (counter === 1 || counter === 6) {
                this.text.push(saleText);
            } else {
                //Sometimes the API returns double spaces, if so add the 1st item of the array so the box has always text
                if (splitText[counter].length === 0) {
                   this.text.push(splitText[0]);
                } else {
                    this.text.push(splitText[counter]);
                }
            }
            counter++;
        }
        
        //This loop will create all the elements for each box and mini boxes and append them to the DOM
        const div = document.createElement("div");
        div.classList.add("box");

        for (const item of this.text) {
            const a = document.createElement("a");
            const h2 = document.createElement("h2");
            const img = document.createElement("img");

            if (this.text.indexOf(item) < 6) {
                a.classList.add("box");
                a.href = `#`;
                img.dataset.src = `${this.image}?random=${this.text.indexOf(item)}`;
                //Adding lazy loading attr for supported browsers
                img.setAttribute("loading", "lazy");
                h2.innerHTML = item;
                a.appendChild(h2); 
                if (this.text.indexOf(item) === 0) {
                    const h3 = document.createElement("h3");
                    h3.innerText = "Shop";
                    a.appendChild(h3)
                }            
                a.appendChild(img);
                app.appendChild(a);
            } else {
                a.classList.add("box-mini");
                a.href = `#`;
                img.dataset.src = `${this.image}?random=${this.text.indexOf(item)}`;
                img.setAttribute("loading", "lazy");
                h2.innerHTML = item;
                a.appendChild(h2);
                a.appendChild(img);
                div.appendChild(a);
            }
        }
        app.appendChild(div);

    }
    //After loading the boxes in the DOM with the texts, using Intersection Observer API to lazy load images while scrolling
    loadImages() {
        let loadImages = document.querySelectorAll(".box img");

        let imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let image = entry.target;
                    image.src = image.dataset.src;
                    imageObserver.unobserve(image);
                }
            })
        });

        loadImages.forEach(image => {
            imageObserver.observe(image)
        });
    }
}
