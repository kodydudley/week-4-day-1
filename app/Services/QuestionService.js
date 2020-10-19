import {
  ProxyState
} from "../AppState.js";
import Question from "../Models/Question.js";
import {
  api
} from "./AxiosService.js";

class QuestionService {
  constructor() {
    console.log("Service");
  }
}

export const questionService = new QuestionService();