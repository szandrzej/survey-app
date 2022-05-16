import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Survey } from '../survey';

export interface ResultProps {
    answers: Map<number, number>;
    survey: Survey;
}

const backgrounds: Record<string, string> = {
    'blue': `background-color: #FA8BFF;
    background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);`,
    'green': `background-color: #08AEEA;
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);`,
    'purple': `background-color: #FF3CAC;
    background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);`,
    'red': `background-color: #FF9A8B;
    background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);`
}

export const Container = styled.div<{ result: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;

    height: 100vh;
    color: white;

    ${({ result }) => css`${backgrounds[result]}`}
`;

export const Inner = styled.div`
    max-width: 768px;
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: normal;
    text-align: center;
`;

export const Subtitle = styled.h2`
    margin-top: 40px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`;

export const Text = styled.h2`
    margin-top: 64px;
    font-size: 32px;
    font-weight: normal;
    text-align: center;

    a { 
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    margin-top: 16px;
    font-size: 24px;
    line-height: 1.1;
    text-align: center;
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

    console.log({ result });
    return (
        <Container result={result.id}>
            <Inner>
                <Title>{result.description}</Title>
                <Subtitle>Proponowane zabiegi dla Twojej skóry:</Subtitle>
                <List>
                    {result.values.map((v, idx) => <ListItem key={idx}>{v}</ListItem>)}
                </List>
                <Text>
                    Wszystkie zabiegi możesz wykonać w naszym salonie <br />
                    <a href="https://bartoszwolak.pl/uslugi/instytut-piekna/" target="_blank">Instytut Piękna Bartosz Wolak</a>
                </Text>
            </Inner>
        </Container>
    );
}