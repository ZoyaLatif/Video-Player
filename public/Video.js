import React from 'react';

export class Video extends React.Component {
  render() {
    <video controls autostart autoPlay muted src={this.props.src}/>
    return (
      <div>
        <video controls autostart autoPlay muted />
      </div>
    );
  }
}
