const url = "data.json"

const jsonInformation = async () => {
    try{
        const dataResult = await fetch(url)

        if(!dataResult.ok) {
            throw new Error("request error")
        }

        return dataResult.json()

    } catch (err) {
        console.error("INTERNAL SERVER ERROR: ", err)
        return 1
    }

}

const htmlLoyout = async () => {
    const data = await jsonInformation()
    const withoutParsed = JSON.stringify(data, null, 2)

    const jsonData = JSON.parse(withoutParsed)
    const sectionSummary = document.getElementById("section-summary")

    jsonData.forEach(item => {
        const itemArticle = document.createElement('article')
        itemArticle.classList.add(item.category)

        const itemFigure = document.createElement('figure')
            const img = document.createElement('img')
            img.src = item.icon
            img.alt = "image about " + item.category

            const description = document.createElement('p')
            description.textContent = item.category

        const itemDiv = document.createElement('div')
            const score = document.createElement('p')
            score.classList.add("highlight")
            score.textContent = item.score

            const slash = document.createElement('p')
            slash.classList.add("numbers")
            slash.textContent = "/"

            const content = document.createElement('p')
            content.classList.add("numbers")
            content.textContent = "100"

        itemArticle.appendChild(itemFigure)
            itemFigure.appendChild(img)
            itemFigure.appendChild(description)

        itemArticle.appendChild(itemDiv)
            itemDiv.appendChild(score)
            itemDiv.appendChild(slash)
            itemDiv.appendChild(content)

        sectionSummary.appendChild(itemArticle)
    });

    const continueButton = document.createElement('p')
    continueButton.classList.add("continue")
    continueButton.textContent = "Continue"

    sectionSummary.appendChild(continueButton)
}


htmlLoyout()