export async function getText() {
    try {
        const response = await fetch("https://baconipsum.com/api/?type=all-meat&paras=1", {method: 'GET'});
        const apiData = await response.json();

        return apiData;
    } catch (err) {
        console.log('Failed to fetch', err);
    }
}
