import {
  ProxyState
} from "../AppState.js";
import Question from "../Models/Question.js";
import Answer from "../Models/Answer.js";
import {
  api
} from "./AxiosService.js";

class AnswerService {
  constructor() {
    console.log("Service");
    this.getAnswer()
  }

  getAnswer() {
    console.log(ProxyState.answer);
    ProxyState.answer = ProxyState.answer

  }
}

export const answerService = new AnswerService();