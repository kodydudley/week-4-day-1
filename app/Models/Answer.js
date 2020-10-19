export default class Answer {
  constructor(data) {
    console.log("Model")
    this.answer = data.answer
  }

  get answerTemplate() {
    return /*html*/ `
      <div class="col bg-light border rounded shadow-lg">
          <h1>${this.answer}</h1>
      </div>
      `
  }
}