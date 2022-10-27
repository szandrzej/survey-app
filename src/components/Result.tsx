import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Survey } from '../survey';
export interface ResultProps {
    answers: Map<number, number>;
    survey: Survey;
}

export const Container = styled.div<{ result: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;

    height: 100vh;
    color: var(--green);
    background: var(--white);
`;

export const Inner = styled.div`
    max-width: 768px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: normal;
    text-align: center;
`;

export const BoldTitle = styled.h1`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`;

export const Subtitle = styled.h3`
    margin-top: 16px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const Text = styled.h3`
    font-size: 24px;
    font-weight: normal;
    text-align: center;

    a { 
        margin-top: 16px;
        color: var(--green);
        text-decoration: none;
        font-weight: bold;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    display: grid;
    grid-gap: 16px;
    padding: 0;
    margin: 0;
    padding: 16px;
    background: var(--pink);
    border-radius: 16px;
    color: var(--white)
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    margin: 32px 0;
`;

export const ListItem = styled.li`
    font-size: 24px;
    line-height: 1.1;
    text-align: center;
    color: var(--white);
`;

export const Result = ({ answers, survey }: ResultProps) => {
    const result = useMemo(() => {
        const resultsMap = survey.items.reduce<{ [key: string]: number }>((sum, next) => {
            const answerId = answers.get(next.id);
            const answerValue = next.answers.find(ans => ans.id === answerId)?.value;
            if (!answerValue) {
                return sum;
            }
            const answerValueCount = sum[answerValue];
            if (!answerValueCount) {
                sum[answerValue] = 1;
            } else {
                sum[answerValue] = answerValueCount + 1;
            }

            return sum;
        }, {});

        const highestAnswer = Math.max(...Object.values<number>(resultsMap));
        const highestAnswerValue = Object.keys(resultsMap).find(key => resultsMap[key] === highestAnswer);
        const suggestedResult = survey.results.find(res => res.id === highestAnswerValue);

        if (!suggestedResult) {
            throw new Error('suggestion not found!');
        }

        return {
            ...suggestedResult
        }
    }, [survey, answers]);

    return (
        <Container result={result.id}>
            <Inner>
                <BoldTitle>Wynik</BoldTitle>
                <Title>{result.description}</Title>
                <Subtitle>Proponowane zabiegi dla Twojej skóry:</Subtitle>
                <List>
                    {result.values.map((v, idx) => <ListItem key={idx}>{v}</ListItem>)}
                </List>
                <Text>
                    Wszystkie zabiegi możesz wykonać w naszym salonie
                </Text>
                <Text>
                    <a href="https://bartoszwolak.pl/uslugi/instytut-piekna/" target="_blank">Instytut Piękna Bartosz Wolak</a>
                </Text>
            </Inner>
        </Container>
    );
}