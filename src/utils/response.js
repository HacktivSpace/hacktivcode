
const response = async ({ prompt = 'Hey, how are you?' }) => {
    // const baseUrl = process.env.VERCEL_URL
    let data = ''
    let error = ''
    try {
        console.log('Response');
        let bodyContent = JSON.stringify({
            "prompt": prompt,
        });
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        let response = await fetch(`/api`, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        }).then((response) => { return response.json() });
        data = response.res;
        console.log('data', data);

        console.log('Response end');

    } catch (error) {
        error = error;
    } finally {

        return { data, error }
    }


}

export { response }