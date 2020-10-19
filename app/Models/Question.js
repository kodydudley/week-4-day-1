export default class Question {
    constructor(data) {
        console.log("Model")
        this.question = data.question
        this.answer = data.answer
    }

    get Template() {

        return /*html*/ `
        <div class="row">
            <div class="col border rounded shadow-lg">
                <h1>${this.question}</h1>
            </div>
        </div>
        `
    }
}