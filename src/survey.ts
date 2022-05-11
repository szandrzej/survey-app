export interface SurveyAnswer {
    id: number;
        answer: string;
        value: string;
}

export interface SurveyItem {
    id: number;
    question: string;
    answers: SurveyAnswer[];
}

export interface Survey {
    name: string;
    items: SurveyItem[];
}

export const skinTypeSurvey: Survey = {
    name: 'Rodzaj skóry',
    items: [
        {
            id: 0,
            question: 'Jakie masz odczucia po umyciu twarzy?',
            answers: [
                {
                    id: 0,
                    answer: 'Dobre',
                    value: 'blue'
                },
                {
                    id: 1,
                    answer: 'Normalne',
                    value: 'green'
                },
                {
                    id: 2,
                    answer: 'Kiepskie',
                    value: 'red'
                }
            ]
        },
        {
            id: 1,
            question: 'Jakie masz ?',
            answers: [
                {
                    id: 0,
                    answer: 'Dobre 2',
                    value: 'blue'
                },
                {
                    id: 1,
                    answer: 'Normalne 2',
                    value: 'green'
                },
                {
                    id: 2,
                    answer: 'Kiepskie 2',
                    value: 'red'
                }
            ]
        }
    ]
}