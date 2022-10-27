import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Result } from './components/Result';
import { SingleQuestion } from './components/SingleQuestion';
import { SurveyAnswer, skinTypeSurvey, SurveyItem } from './survey';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  height: 100vh;

  background: var(--white);
`;

const Counter = styled.h2`
    margin: 0;
    color: var(--green);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`;

const PreviousButton = styled.div`
  color: var(--green);
  font-size: 16px;
  margin-top: 32px;
  text-transform: uppercase;
  cursor: pointer;
`;

function App() {
  const [answers, setAnswers] = useState<Map<number, number>>(new Map());
  const [currentItem, setCurrentItem] = useState(0);
  const [isDone, setDone] = useState(false);

  useEffect(() => {

  }, []);

  const handlePrevious = () => {
    setCurrentItem((previousValue) => {
      if (previousValue > 0) {
        return previousValue - 1;
      }

      return 0;
    })
  }
  const handleAnswer = (item: SurveyItem, answer: SurveyAnswer) => {
    setAnswers(answers => {
      answers.set(item.id, answer.id);
      return answers;
    });
    if (item.id === skinTypeSurvey.items.length - 1) {
      setDone(true);
      return;
    }
    setCurrentItem(currentItem + 1);
  }

  return (
    <>
      {
        !isDone ? (
          <Container>
            <Counter>{currentItem + 1 }/{skinTypeSurvey.items.length }</Counter>
            <SingleQuestion item={skinTypeSurvey.items[currentItem]} onSelectAnswer={handleAnswer} selectedAnswer={answers.get(currentItem)} />
            {currentItem != 0 && (
              <PreviousButton onClick={handlePrevious}>Poprzednie pytanie</PreviousButton>
            )}
          </Container >
        ) : (
          <Result survey={skinTypeSurvey} answers={answers}/>
        )
      }
    </>
  );
}

export default App;
