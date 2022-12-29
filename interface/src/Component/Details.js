import React, {useEffect} from 'react'
import axios from 'axios';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      courseData: []
      
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: `http://localhost:3000/class/view/${this.props.index}`,
    }).then((result) => this.setState({ courseData: result.data }));
  }
   


  render() {
    console.log(this.state.courseData)
    return (
      <div>
          <h1>{this.state.courseData.name}</h1>
          
      </div>
    )
  }
}

export default Details