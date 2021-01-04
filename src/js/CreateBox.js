import { getText } from './api';

export default class CreateBox {
    constructor() {
        this.text = [];
        this.image = 'https://picsum.photos/1920/1088';
    }

    async init() {
        const app = document.querySelector("#app");
        
        const saleText = `Sale <br/> up to <span class="animate"></span> off`;
        const texts = await getText();
        const splitText = texts[0].split(" ");

        let counter = 1;

        while (counter <= 10) {
            if (counter === 1 || counter === 6) {
                this.text.push(saleText);
            } else {
                console.log(splitText[counter])
                this.text.push(splitText[counter]);
            }
            counter++;
        }
    
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
