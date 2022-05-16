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

export interface ResultItem {
    id: string;
    description: string;
    values: string[];
}

export interface Survey {
    name: string;
    items: SurveyItem[];
    results: ResultItem[];
}


export const skinTypeSurvey: Survey = {
    name: 'Rodzaj skóry',
    results: [
        {
            id: 'green',
            description: 'Skóra problematyczna w kierunku przetłuszczającej się',
            values: [
                'Peeling medyczny Biorepeel',
                'Peeling medyczny migdałowy/mlekowy',
                'Oczyszczanie manualne',
                'Oczyszczanie wodorowe',
                'Zabieg głęboko nawilżający',
                'Dermapen'
            ]
        },
        {
            id: 'red',
            description: 'Skóra uwrażliwona, naczyniowa',
            values: [
                'Peeling kawitacyjny',
                'Zabieg głęboko nawilżający',
                'Mezoterapia bezigłowa',
                'Zabieg głęboko nawilżający'
            ]
        },
        {
            id: 'blue',
            description: 'Skóra sucha z tendencją do  przetłuszczania w okolicy T',
            values: [
                'Zabieg głęboko nawilżający',
                'Mezoterapia bezigłowa',
                'Mezoterapia igłowa',
                'Zabieg z witaminą C hydropeptide',
                'Zabieg z maską dyniową'
            ]
        },
        {
            id: 'purple',
            description: 'Skóra zmęczona, dojrzała z licznymi zmarszczkami',
            values: [
                'Mezoterapia bezigłowa',
                'Mezoterapia igłowa ',
                'Fala radiowa',
                'Złoty zabieg intensywnie napinający z witaminą A',
                'Dermapen',
                'Firmowy masaż liftingujący',
                'PRX – peeling rewitalizujący',
                'Zabieg kawiorowy'
            ]
        }
    ],
    items: [
        {
            id: 0,
            question: 'Jakie masz odczucia po umyciu twarzy?',
            answers: [
                {
                    id: 0,
                    answer: 'Odczuwam delikatny dyskomfort w niektórych partiach',
                    value: 'blue'
                },
                {
                    id: 1,
                    answer: 'Nie odczuwam nic',
                    value: 'green'
                },
                {
                    id: 2,
                    answer: 'Silny dyskomfort, skóra jest ściągnięta',
                    value: 'red'
                }
            ]
        },
        {
            id: 1,
            question: 'Czy Twoja skóra się świeci?',
            answers: [
                {
                    id: 0,
                    answer: 'Tak, zdecydowanie',
                    value: 'green'
                },
                {
                    id: 1,
                    answer: 'Wyłącznie w strefie T',
                    value: 'purple'
                },
                {
                    id: 2,
                    answer: 'Nie błyszczy się w ogóle',
                    value: 'blue'
                }
            ]
        },
        {
            id: 2,
            question: 'Czy Twoja skóra się przesusza?',
            answers: [
                {
                    id: 0,
                    answer: 'Tak',
                    value: 'purple'
                },
                {
                    id: 1,
                    answer: 'Tylko strefie T',
                    value: 'red'
                },
                {
                    id: 2,
                    answer: 'Nie mam takiego problemu',
                    value: 'blue'
                }
            ]
        },
        {
            id: 3,
            question: 'Czy na Twojej skórze pojawiają się wypryski?',
            answers: [
                {
                    id: 0,
                    answer: 'Tak',
                    value: 'green'
                },
                {
                    id: 1,
                    answer: 'Tylko pod wpływem czynników zewnętrznych i wewnętrznych ( zmiana diety, miesiączka, stres)',
                    value: 'purple'
                },
                {
                    id: 2,
                    answer: 'Nie',
                    value: 'blue'
                }
            ]
        },
        {
            id: 4,
            question: 'Jak wygląda Twoja skóra twarzy?',
            answers: [
                {
                    id: 0,
                    answer: 'Blizny potrądzikowe, zaczerwienienia, przebarwienia, skóra problematyczna',
                    value: 'green'
                },
                {
                    id: 1,
                    answer: 'Skóra sucha, matowa',
                    value: 'purple'
                },
                {
                    id: 2,
                    answer: 'Liczne rozszerzone naczynka, skóra lekko zaróżowiona',
                    value: 'red'
                },
                {
                    id: 3,
                    answer: 'Skóra dojrzała, liczne zmarszczki',
                    value: 'purple'
                }
            ]
        },
        {
            id: 5,
            question: 'Jak oceniasz grubość swojej skóry?',
            answers: [
                {
                    id: 0,
                    answer: 'Gruba',
                    value: 'green'
                },
                {
                    id: 1,
                    answer: 'Normalna',
                    value: 'purple'
                },
                {
                    id: 2,
                    answer: 'Cienka',
                    value: 'red'
                }
            ]
        },
        {
            id: 6,
            question: 'Jak wygląda Twoja twarz po spacerze na mrozie?',
            answers: [
                {
                    id: 0,
                    answer: 'Jest mocno zaczerwieniona',
                    value: 'red'
                },
                {
                    id: 1,
                    answer: 'Policzki i nos są zaczerwienione',
                    value: 'purple'
                },
                {
                    id: 2,
                    answer: 'Normalnie, bez większych zmian',
                    value: 'green'
                }
            ]
        },
        {
            id: 7,
            question: 'Twoja cera jest:',
            answers: [
                {
                    id: 0,
                    answer: 'Ściągnięta i sucha',
                    value: 'red'
                },
                {
                    id: 1,
                    answer: 'Szara i mało jędrna',
                    value: 'purple'
                },
                {
                    id: 2,
                    answer: 'Strefa T pokryta jest często tłustą powłoką',
                    value: 'blue'
                },
                {
                    id: 3,
                    answer: 'Cała twarz często się błyszczy',
                    value: 'green'
                }
            ]
        },
        {
            id: 8,
            question: 'Jak często pojawiają Ci się na skórze wypryski?',
            answers: [
                {
                    id: 0,
                    answer: 'Rzadko',
                    value: 'purple'
                },
                {
                    id: 1,
                    answer: 'Czasem na brodzie lub czole',
                    value: 'blue'
                },
                {
                    id: 2,
                    answer: 'Często',
                    value: 'green'
                }
            ]
        },
        {
            id: 9,
            question: 'Który problem jest Ci najbliszy',
            answers: [
                {
                    id: 0,
                    answer: 'Alergia na kosmetyki',
                    value: 'red'
                },
                {
                    id: 1,
                    answer: 'Przesuszenie',
                    value: 'blue'
                },
                {
                    id: 2,
                    answer: 'Brak napięcia i elastyczności',
                    value: 'purple'
                },
                {
                    id: 3,
                    answer: 'Trądzik',
                    value: 'green'
                }
            ]
        },
    ]
}