export default class Question {
    constructor(data) {
        console.log("Model")
        this.question = data.question
        this.answer = data.answer
    }

    get Template() {

        return /*html*/ `
        <div class="col-6 border rounded shadow-lg">
            <h1>${this.question}</h1>
            <h5>${this.answer}</h5>
        </div>
        `
    }
}