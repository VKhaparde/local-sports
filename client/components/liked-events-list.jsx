import React from 'react';
import LikedEvent from './liked-event';

const eventInfo = [
  { id: 1, title: 'Soccer @ Irvine Spectrum', rating: 5, distance: 0.3 },
  { id: 2, title: 'Soccer @ Irvine Great Park', rating: 8, distance: 1.3 },
  { id: 3, title: 'Baseball @ Irvine Spectrum', rating: 7, distance: 0.3 }
];

class LikedEventsList extends React.Component {
  // constructor(props) {
  //   // super(props);
  //   // console.log(props);
  //   // this console should show an array of liked events instead of eventInfo
  // }

  // componentDidMount() {
  // fetch event data
  // }

  render() {
    return (
      <div className="LikedEvents">
        {
          eventInfo.map(event => {
            return (
              <LikedEvent
                key={event.id}
                title={event.title}
                rating={event.rating}
                distance={event.distance}/>
            );
          })
        }
      </div >
    );
  }
}

export default LikedEventsList;
