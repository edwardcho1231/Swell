import React, { Component } from 'react';

import * as actions from '../../actions/actions';
import GraphContainer from './GraphContainer.jsx';
import ReqResContainer from './ReqResContainer.jsx';
import TabContainer from '../display/TabContainer.jsx';

class Contents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={'contents'}>
        {/* ContentsContainer */}
        <GraphContainer/>
        <ReqResContainer/>
        <TabContainer></TabContainer>

      </div>
    )
  }
}

export default (Contents);