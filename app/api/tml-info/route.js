export async function GET() {

    const url = 'https://tmlapi.pythonanywhere.com/api/tml/?format=json'

    // const url = 'https://tml-api.pw.deisi.ulusofona.pt/api/tml/?format=json'
    // const url = 'https://tml25.pythonanywhere.com/tml/'

    return fetch(url)
    .then(res => res.json())
    .then(data => {
        
        return Response.json(data)})
}