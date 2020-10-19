import {
  ProxyState
} from "../AppState.js";
import {
  questionService
} from "../Services/QuestionService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById("question").innerHTML = template
  console.log("Question");
}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("questions", _draw);
    _draw()
  }

  getQuestion() {
    questionService.getQuestion()
  }

}