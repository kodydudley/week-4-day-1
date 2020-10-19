import {
  ProxyState
} from "../AppState.js";
import {
  answerService
} from "../Services/AnswerService.js";


//Private
function _draw() {
  let template = ""
  template = ProxyState.answer.answerTemplate
  document.getElementById("answer").innerHTML = template
  console.log("Answer");
}

//Public
export default class AnswerController {
  constructor() {

  }
  getAnswer() {
    answerService.getAnswer()
    _draw()
  }

}