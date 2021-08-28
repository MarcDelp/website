import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'

const useStyles = makeStyles((theme) => ({
  noMargin: {
    margin: 0
  },
  paper: {
    padding: '6px 16px'
  }
}))

export default function TimelineEntry ({ addConnector = true, entry, isLastEntry = false, oppositeContent = true }) {
  const classes = useStyles()

  return (
    <TimelineItem>
      {
        oppositeContent && <TimelineOppositeContent>
          <Paper className={ classes.paper }>
            <h4 className={ classes.noMargin }>{ entry.company }</h4>
            <hr />
            <h6 className={ classes.noMargin }>{ entry.time }</h6>
          </Paper>
        </TimelineOppositeContent>
      }
      <TimelineSeparator>
        <TimelineDot
          color='secondary'
          variant={ isLastEntry ? 'default' : 'outlined' }
        />
        { addConnector && <TimelineConnector /> }
      </TimelineSeparator>
      <TimelineContent>
        {
          !oppositeContent && <h4 className={ classes.noMargin }>
            { entry.company } ({ entry.time })
          </h4>
        }
        { !oppositeContent && <hr/> }
        <h4 className={ classes.noMargin }>
          { entry.title }
        </h4>
        {
          entry.description.map((desc, idx) => (
            <p key={ idx }>{ desc }</p>
          ))
        }
      </TimelineContent>
    </TimelineItem>
  )
}

TimelineEntry.propTypes = {
  addConnector: PropTypes.bool,
  entry: PropTypes.shape({
    company: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isLastEntry: PropTypes.bool,
  oppositeContent: PropTypes.bool
}
