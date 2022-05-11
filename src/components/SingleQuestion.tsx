import React from 'react';
import { SurveyAnswer, SurveyItem } from '../survey';
import styled, {css} from 'styled-components';

export interface SingleQuestionProps {
    item: SurveyItem;
    selectedAnswer?: number;
    onSelectAnswer: (item: SurveyItem, selectedAnswer: SurveyAnswer) => void;
}

const Container = styled.div`
    display: grid;
    gap: 16px;
    width: 100%;

    @media (min-width: 600px) {
        width: 550px
    }
`;

const QuestionContainer = styled.div`
    padding: 8px 16px;
`;

const QuestionText = styled.h2`
    margin: 0;
    padding: 16px 32px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
`;

const AnswerContainer = styled.div<{isSelected: boolean}>`
    border: 1px solid white;
    padding: 8px 16px;
    transition: all 225ms;
    cursor: pointer;

    ${({isSelected}) => isSelected && css`
        background-color: #fff4;
    `}

    &:hover{
        background-color: #fff4;
    }
`;

const AnswerText = styled.h3`
    margin: 0;
    padding: 16px 32px;
    color: white;
    font-size: 24px;
    text-align: center;
`;


export const SingleQuestion = ({ item, selectedAnswer, onSelectAnswer}: SingleQuestionProps) => {
    return (
        <Container>
            <>
                <QuestionContainer>
                    <QuestionText>
                        {item.question}
                    </QuestionText>
                </QuestionContainer>
                {
                    item.answers.map((answer) => (
                        <AnswerContainer
                            isSelected={answer.id === selectedAnswer}
                            onClick={() => onSelectAnswer(item, answer)}
                            key={answer.id}>
                            <AnswerText>{answer.answer}</AnswerText>
                        </AnswerContainer>
                        
                    ))
                }
            </>
        </Container>
    );
}

