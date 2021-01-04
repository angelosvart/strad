import CreateBox from './CreateBox';

//Init function will create instance of CreateBox class and then use a promise to first 
//use the init method to load DOM elements and texts from the API and when resolved create observer to lazy load images
(() => {
    const createBox = new CreateBox();

    const initLoad = new Promise(async (resolve, reject) => {

        await createBox.init();

        if (document.querySelectorAll(".box").length) {
            resolve(createBox.loadImages())
        } else {
            reject(Error("Problem loading data"))
        }
    });
})();