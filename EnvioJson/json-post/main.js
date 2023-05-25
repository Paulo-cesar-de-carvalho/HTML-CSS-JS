// Funções auxiliares para executar get/put usando fetch

async function getForm(form) {
    const response = await fetch(form.action)
    return await response.json()
}

async function putForm(form) {
    // Converte form para objeto que pode ser convertido para JSON
    const data = Object.fromEntries(new FormData(form).entries())

    const response = await fetch(form.action, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    return await response.json()
}

async function deleteForm(form) {
    // Converte form para objeto que pode ser convertido para JSON
    const data = Object.fromEntries(new FormData(form).entries())

    const response = await fetch(`${form.action}/${data.id}`, {method: 'DELETE'})

    return await response.json()
}

// Callbacks dos forms HTML

async function putFormCallback(event) {
    // Impede a página de redirecionar para form.action
    event.preventDefault()

    const response = await putForm(event.target)

    alert(response)
}

async function deleteFormCallback(event) {
    // Impede a página de redirecionar para form.action
    event.preventDefault()

    const response = await deleteForm(event.target)

    alert(response)
}

async function getFormCallback(event) {
    // Impede a página de redirecionar para form.action
    event.preventDefault()

    const response = await getForm(event.target)

    document.getElementById('form-get-response').innerHTML = JSON.stringify(response.Items)
}

document.getElementById('form-put').onsubmit = e => putFormCallback(e)
document.getElementById('form-get').onsubmit = e => getFormCallback(e)
document.getElementById('form-delete').onsubmit = e => deleteFormCallback(e)
