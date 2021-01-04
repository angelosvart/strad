import CreateBox from './CreateBox';

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