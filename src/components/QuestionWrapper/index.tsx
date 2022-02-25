import MultiChoiceQuestion from 'components/MultiChoiceQuestion'
import SingleChoiceQuestion from 'components/SingleChoiceQuestion'
import { useQuiz } from 'context/quiz'
import React, { useEffect, useState } from 'react'
import { QuestionType } from 'utility/enums'
import { SimplifiedQuestion } from 'utility/interfaces'

const QuestionWrapper: React.FC<{ questionId: number }> = ({ questionId }) => {
  const { getQuestion } = useQuiz()
  const [data, setData] = useState<SimplifiedQuestion | null>(null)

  useEffect(() => {
    const res = getQuestion(questionId)
    setData(res)
  }, [])

  if (!data) {
    return <div>Loading ...</div>
  }

  return (
    <div>
      {data.type === QuestionType.Single ? (
        <SingleChoiceQuestion data={data} />
      ) : (
        <MultiChoiceQuestion data={data} />
      )}
    </div>
  )
}

export default QuestionWrapper
