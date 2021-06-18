import React from 'react';
import './styles/ItemList.css';

class ItemListContainer extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.item.name}
          alt={`${this.props.item.name} `}
        />

        <div>
          <strong>
            {this.props.item.name} 
          </strong>
          <br />@
          <br />
          {this.props.item.jobTitle}
        </div>
      </div>
    );
  }
}

export default ItemListContainer