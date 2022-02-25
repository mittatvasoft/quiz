import Paper from '@mui/material/Paper'
import { useQuiz } from 'context/quiz'
import React, { useEffect, useState } from 'react'
import { ReportState } from 'utility/interfaces'
import { PieChart, Pie, Cell, ResponsiveContainer, PieLabel } from 'recharts'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { AnswerType } from 'utility/enums'

const colors = ['#28a745', '#dc3545', '#6c757d']
const RADIAN = Math.PI / 180

const renderCustomizedLabel: PieLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const ReportPage: React.FC = () => {
  const [report, setReport] = useState<ReportState>()
  const { generateReport, state } = useQuiz()

  useEffect(() => {
    const res = generateReport()
    setReport(res)
  }, [])

  if (!report) {
    return <div>Loading ...</div>
  }
  return (
    <Paper elevation={6} sx={{ padding: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <ResponsiveContainer className="chart-container">
            <PieChart>
              <Pie
                data={report.chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {report.chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2}>
        {report.chartData.map((cd, i) => (
          <Grid item key={i}>
            <Grid container>
              <Box marginRight={1} sx={{ backgroundColor: colors[i], height: 20, width: 20 }} />
              <Typography>{cd.name}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <br />
      <Stack spacing={2}>
        <Paper sx={{ padding: 2 }} elevation={6}>
          <Typography variant="h5">Name: {state.user?.name}</Typography>
          <Typography>Result: {report.percentage}%</Typography>
        </Paper>
        {report.questionAnswers.map((qa) => (
          <Paper elevation={6} key={qa.id} sx={{ padding: 2 }}>
            <Typography variant="h6" color={qa.status === AnswerType.Correct ? 'green' : 'red'}>
              #{qa.id}: {qa.status}
            </Typography>
            <Typography>Question: {qa.question}</Typography>
            {qa.status === AnswerType.Correct ? (
              <Typography>Your Answer : {qa.correctAnswer}</Typography>
            ) : (
              <>
                <Typography>Correct Answer : {qa.correctAnswer}</Typography>
                <Typography>Your Answer : {qa.selectedAnswer}</Typography>
              </>
            )}
          </Paper>
        ))}
      </Stack>
    </Paper>
  )
}

export default ReportPage
