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


  // getCharacters() {
  //   api.get("people").then(res => {
  //     console.log("request is back!", res.data);
  //     ProxyState.next = res.data.next
  //     ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
  //     // console.log(ProxyState.characters);
  //   }).catch(err => console.error(err))
  //   // console.log("run immediately before request comes back");
  // }

  getQuestion() {
    console.log(ProxyState.questions);
    api.get("question").then(res => {
      console.log("request is back!", res.data);
      ProxyState.questions = res.data.results.map(rawQuestionData => new Question(rawQuestionData))
    }).catch(err => console.error(err))

  }
}

export const questionService = new QuestionService();