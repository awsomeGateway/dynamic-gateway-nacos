import * as React from 'react'
import mobx from '../../mobx-data/mobxPlatform'
// import history from '../utils/history'

const { action: { platformAction } } = mobx

class Platform extends React.Component {
  render () {
    const platform = this.props.match.path
    return (
      <div>
        <iframe
          style={{ width: '100%', height: '90vh' }}
          src={platform.indexOf('nacos') !== -1
            ? process.env.REACT_APP_NACOS
            : platform.indexOf('sentinel') !== -1
              ? process.env.REACT_APP_SENTINEL
              : process.env.REACT_APP_SKYWALKING}
        />
      </div>

    )
  }
}

export default Platform