export default class Question {
    constructor(data) {
        console.log("Model")
        this.question = data.question
        this.answer = data.answer
        this.category = data.category.title
    }

    get Template() {

        return /*html*/ `
        <div class="row">
            <div class="col bg-light border rounded shadow-lg">
                <h1>${this.question}</h1>
                <h4>Category: ${this.category}</h4>
            </div>
        </div>
        `
    }
}