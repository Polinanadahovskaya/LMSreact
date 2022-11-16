import './Test/Test.scss';
import { useState } from 'react';

const Test = () => {
  const questions = [
    {
      questionText: 'Что такое реляционные базы данных:',
      answerOptions: [
        {
          answerText:
            'База данных, в которой одна ни с чем не связанная таблица',
          isCorrect: false,
        },
        {
          answerText: 'Любая база данных - реляционная',
          isCorrect: false,
        },
        {
          answerText:
            'База данных, в которой информация хранится в виде двумерных таблиц, связанных между собой',
          isCorrect: true,
        },
        {
          answerText: 'Совокупность данных, не связанных между собой',
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        'Как выглядит запрос, для вывода ВСЕХ значений из таблицы Orders:',
      answerOptions: [
        {
          answerText: 'select ALL from Orders;',
          isCorrect: false,
        },
        {
          answerText: 'select % from Orders;',
          isCorrect: false,
        },
        {
          answerText: 'select * from Orders;',
          isCorrect: true,
        },
        {
          answerText: 'select *.Orders from Orders;',
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        'Какие данные мы получим из этого запроса: select id, date, customer_name from Orders',
      answerOptions: [
        {
          answerText: 'Никакие, запрос составлен неверно',
          isCorrect: false,
        },
        {
          answerText:
            'Номера и даты всех заказов с именами заказчиков, отсортированные по первой колонке',
          isCorrect: false,
        },
        {
          answerText:
            'Неотсортированные номера и даты всех заказов с именами заказчиков',
          isCorrect: true,
        },
        {
          answerText:
            'Номера и даты всех заказов с именами заказчиков, отсортированные по всем колонкам, содержащим слово Order',
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="test">
      {showScore ? (
        <div className="section__score">
          <div>
            Правильных ответов {score} из {questions.length}
          </div>
        </div>
      ) : (
        <div className="quizz">
          <div className="question__section">
            <div className="question__count">
              <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className="question__text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <button
                type="button"
                onClick={() => handleAnswerOptionClick(item.isCorrect)}
              >
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
