// const URL = "http://localhost:4000"
const URL = "https://portfolio-tejo-backend.onrender.com"

export async function postContact(data) {
    return await fetch(`${URL}/contact`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => alert(err.message));
}