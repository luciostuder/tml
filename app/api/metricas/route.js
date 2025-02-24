export async function GET() {
    return fetch('https://tml25.pythonanywhere.com/metricas/')
    .then(res => res.json())
    .then(data => Response.json(data))
}