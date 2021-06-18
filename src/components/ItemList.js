import React from 'react';
import './styles/ItemList.css';
import ItemListContainer from './ItemListContainer';

class ItemList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
//importante el id en el key
                  <li key={badge.id}>
                <ItemListContainer Container badge={badge} />
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

export default ItemList;