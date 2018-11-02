import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteNote } from '../actions'
import { status } from '../constants'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  deleteNote = (e) => {
    this.props.deleteNote(this.props.taskId, e.target.id)
  }

  render() {
    let statusKey = Object.keys(status).find(key => status[key] === this.props.status)
    return (
      <div className={`task-note ${statusKey}-color`}>
        <i className={`material-icons ${statusKey}-icon`}>{this.props.status}</i>
        <p>{this.props.text}</p>
        <i className="material-icons icon-delete icon-delete-note"
          id={this.props.id}
          onClick={this.deleteNote}
          >close</i>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteNote }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)
