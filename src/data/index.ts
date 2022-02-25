import { QuestionType } from 'utility/enums'
import { Question } from 'utility/interfaces'

export const questions: Array<Question> = [
  {
    type: QuestionType.Single,
    questionId: 1,
    correctAnswerId: 3,
    questionInfo: [
      { languageId: 1, title: 'What does "myReactApp" refer to in the following command?' },
      { languageId: 2, title: 'À quoi "myReactApp" fait-il référence dans la commande suivante?' }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'A reference to an existing app' },
          { languageId: 2, title: 'Une référence à une application existante' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'The type of app to create' },
          { languageId: 2, title: "Le type d'application à créer" }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'The name you want to use for the new app' },
          {
            languageId: 2,
            title: 'Le nom que vous souhaitez utiliser pour la nouvelle application'
          }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'The directory to create the new app in' },
          { languageId: 2, title: 'Le répertoire dans lequel créer la nouvelle application' }
        ]
      }
    ]
  },
  {
    type: QuestionType.Single,
    questionId: 2,
    correctAnswerId: 2,
    questionInfo: [
      {
        languageId: 1,
        title: 'Which operator can be used to conditionally render a React component?'
      },
      {
        languageId: 2,
        title:
          'Quel opérateur peut être utilisé pour restituer conditionnellement un composant React?'
      }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: '??' },
          { languageId: 2, title: '??' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: '&&' },
          { languageId: 2, title: '&&' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: '::' },
          { languageId: 2, title: '::' }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: '||' },
          { languageId: 2, title: '||' }
        ]
      }
    ]
  },
  {
    type: QuestionType.Single,
    questionId: 3,
    correctAnswerId: 1,
    questionInfo: [
      { languageId: 1, title: 'What tool does React use to compile JSX?' },
      { languageId: 2, title: 'Quel outil React utilise-t-il pour compiler JSX ?' }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'Babel' },
          { languageId: 2, title: 'Babel' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'React Router' },
          { languageId: 2, title: 'React Router' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'React DOM' },
          { languageId: 2, title: 'React DOM' }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'JSX Compiler' },
          { languageId: 2, title: 'JSX Compiler' }
        ]
      }
    ]
  },
  {
    type: QuestionType.Multiple,
    questionId: 4,
    correctAnswerId: [2, 3],
    questionInfo: [
      { languageId: 1, title: 'Which of the following hooks are provided by React?' },
      { languageId: 2, title: 'Parmi les crochets suivants, lesquels sont fournis par React?' }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'useSelector()' },
          { languageId: 2, title: 'useSelector()' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'useReducer()' },
          { languageId: 2, title: 'useReducer()' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'useContext()' },
          { languageId: 2, title: 'useContext()' }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'useStore()' },
          { languageId: 2, title: 'useStore()' }
        ]
      }
    ]
  },
  {
    type: QuestionType.Single,
    questionId: 5,
    correctAnswerId: 4,
    questionInfo: [
      { languageId: 1, title: 'Which of the following is NOT a rule for React Hooks?' },
      {
        languageId: 2,
        title: "Lequel des éléments suivants n'est PAS une règle pour React Hooks?"
      }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'Hooks can only be called at the top level of a component' },
          {
            languageId: 2,
            title: "React Hooks crochets ne peuvent être appelés qu'au niveau supérieur d'un composant"
          }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'Hooks cannot be conditional' },
          { languageId: 2, title: 'React Hooks ne peuvent pas être conditionnels' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'Hooks can only be called inside React Function components' },
          { languageId: 2, title: 'React Hooks ne peut être appelé qu'à l'intérieur des composants React Function' }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'Hooks can be called in Class or Function components ' },
          { languageId: 2, title: 'React Hooks peut être appelé dans les composants Class ou Function ' }
        ]
      }
    ]
  }
]
