'use strict'

const load = document.getElementById('load')
const loadText = document.getElementById('load-text')
const respPT = document.getElementById('resp-pt')
const resText = document.getElementById('respostaText')
const perText = document.getElementById('perguntaText')
const resTextEn = document.getElementById('responseText')
const perTextEn = document.getElementById('questionText')

const loadAnimation = () => {
    let time = 700

    for (let text of loadText.children){

        setTimeout(() => {
                text.classList.remove('opacity-0')
            
        }, time);

        time+=700
    }

    setTimeout(() => {
        load.classList.add('hidden')
    }, time);

}

const translate = async(text) => {

    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=pt-br|en`
    const response = await fetch(url)
    const data = await response.json()
    return data.responseData.translatedText

}


const consultaGemini = (question) => {

    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;


    const questionTreatment = question + ' faça uma resposta bem resumida'

    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${questionTreatment}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(requestData)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const responseTextIa = data.candidates[0].content.parts[0].text
        respostaIa(responseTextIa)
    })
    .catch(error => console.error('Error: ', error))
}


const respostaIa = async(responseTextIa) => {
    resText.textContent = responseTextIa
    perText.textContent = respPT.value  

    const resTranslated = await translate(responseTextIa)
    const perTranslated = await translate(respPT.value)

    resTextEn.textContent = resTranslated
    perTextEn.textContent = perTranslated 

}


respPT.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        const question = respPT.value
        consultaGemini(question)
    }
})

window.addEventListener('load', () => {
    loadAnimation()
    load.classList.add('hidden')

})