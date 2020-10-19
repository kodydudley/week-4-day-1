export default class Answer {
  constructor(data) {
    console.log("Model")
    this.answer = data.answer
  }

  get answerTemplate() {
    return /*html*/ `
      <div class="col border rounded shadow-lg">
          <h5>${this.answer}</h5>
      </div>
      `
  }
}