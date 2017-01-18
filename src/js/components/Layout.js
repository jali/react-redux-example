import React from "react"
import moment from "moment"
import { connect } from "react-redux"
import { fetchData } from "../actions/dataActions"

@connect((store) => {
  return {
    data: store.eventData,
  };
})

export default class Layout extends React.Component {
  constructor() {
    super();
    this.tournament = []
  }

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render() {
    const { data } = this.props;
     Object.keys(data).map((key, index) => {
      const { liveEvents } = data[key]
        for (var { tournamentName: tn, teamA: {team: {player1: p1}}, teamB: {team: {player1: p2}}, startTime:{time: t} } of liveEvents) {
          let ukTime = moment(t, 'HH:mmZ').utcOffset(0).format('HH:mm')
          this.tournament.push(<li class="list-group-item"> 
            <div>
              <h2>{tn}</h2>
              <small class="text-muted">Start time: {ukTime}</small>  
            </div> 
            <h3>{p1.firstName} {p1.lastName} <small>[{p1.country}]</small> <span class="badge">vs</span> {p2.firstName} {p2.lastName} <small>[{p2.country}]</small></h3></li>)
        }
    })
    
    return (
      <div class="container">
        <h1>Tournament</h1>
          <ul class="list-group">
           {this.tournament}
          </ul>
      </div>
      )
  }
}



