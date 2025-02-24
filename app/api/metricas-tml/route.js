export async function GET() {
    return fetch('https://tml25.pythonanywhere.com/metricas-tml/')
    .then(res => res.json())
    .then(data => Response.json(data))
}