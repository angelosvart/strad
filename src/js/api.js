//Function will fetch random text from API
export async function getText() {
    try {
        const response = await fetch("https://baconipsum.com/api/?type=all-meat", {method: 'GET'});
        const apiData = await response.json();

        return apiData;
    } catch (err) {
        console.log('Failed to fetch', err);
    }
}
