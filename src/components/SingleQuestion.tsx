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
    color: var(--green);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`;

const AnswerContainer = styled.div<{isSelected: boolean}>`
    padding: 8px 16px;
    transition: all 225ms;
    cursor: pointer;
    background: var(--pink);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    

    ${({isSelected}) => isSelected && css`
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    `}

    &:hover {
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

const AnswerText = styled.h3`
    margin: 0;
    padding: 16px 32px;
    color: var(--white);
    font-size: 20px;
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

