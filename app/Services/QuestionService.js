import {
  ProxyState
} from "../AppState.js";
import Question from "../Models/Question.js";
import Answer from "../Models/Answer.js";
import {
  api
} from "./AxiosService.js";


class QuestionService {
  constructor() {
    console.log("Service");
    this.getQuestion()
  }

  getQuestion() {
    console.log(ProxyState.question);
    api.get().then(res => {
      console.log("request is back!", res.data[0]);
      ProxyState.question = new Question(res.data[0])
      ProxyState.answer = new Answer(res.data[0])
    }).catch(err => console.error(err))

  }
}

export const questionService = new QuestionService();