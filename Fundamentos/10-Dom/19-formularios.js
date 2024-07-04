const form = document.getElementById('orderForm')

form.addEventListener('submit', function (event){
    event.preventDefault()

    const name = document.querySelector('input[name="nome"]').value
    const address = document.querySelector('input[name="endereco"]').value
    const breadType = document.querySelector('select[name="tipoPao"]').value
    const meatType = document.querySelector('input[name="opcoesCarne"]').value
    const observation = document.querySelector('textarea[name="observacao"]').value

    let salad = ''
    document.querySelectorAll('input[name="salada"]:checked').forEach(function (item){
        salad += ' - ' + item.value + '\n'
    })

    console.log({name, address, breadType, meatType, observation, salad})

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + meatType + "\n" + salad +
        "Observações: " + observation
    )
})