import { QuestionType } from 'utility/enums'
import { Question } from 'utility/interfaces'

export const questions: Array<Question> = [
  {
    type: QuestionType.Single,
    questionId: 1,
    correctAnswerId: 3,
    questionInfo: [
      { languageId: 1, title: 'What does "myReactApp" refer to in the following command?' },
      { languageId: 2, title: 'What does "myReactApp" refer to in the following command?' }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'A reference to an existing app' },
          { languageId: 2, title: 'A reference to an existing app' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'The type of app to create' },
          { languageId: 2, title: 'The type of app to create' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'The name you want to use for the new app' },
          { languageId: 2, title: 'The name you want to use for the new app' }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'The directory to create the new app in' },
          { languageId: 2, title: 'The directory to create the new app in' }
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
        title: 'Which operator can be used to conditionally render a React component?'
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
      { languageId: 2, title: 'What tool does React use to compile JSX?' }
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
      { languageId: 2, title: 'Which of the following hooks are provided by React?' }
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
      { languageId: 2, title: 'Which of the following is NOT a rule for React Hooks?' }
    ],
    optionsInfo: [
      {
        id: 1,
        languageInfo: [
          { languageId: 1, title: 'Hooks can only be called at the top level of a component' },
          { languageId: 2, title: 'Hooks can only be called at the top level of a component' }
        ]
      },
      {
        id: 2,
        languageInfo: [
          { languageId: 1, title: 'Hooks cannot be conditional' },
          { languageId: 2, title: 'Hooks cannot be conditional' }
        ]
      },
      {
        id: 3,
        languageInfo: [
          { languageId: 1, title: 'Hooks can only be called inside React Function components' },
          { languageId: 2, title: 'Hooks can only be called inside React Function components' }
        ]
      },
      {
        id: 4,
        languageInfo: [
          { languageId: 1, title: 'Hooks can be called in Class or Function components ' },
          { languageId: 2, title: 'Hooks can be called in Class or Function components ' }
        ]
      }
    ]
  }
]
