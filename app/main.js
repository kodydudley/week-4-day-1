import AnswerController from "./Controllers/AnswerController.js";
import QuestionController from "./Controllers/QuestionController.js";

class App {
  questionController = new QuestionController();

  answerController = new AnswerController();
}

window["app"] = new App();