import React from 'react';
import './styles/ItemList.css';
import ItemListContainer from './ItemListContainer';

class ItemList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.item.map(item => {
            return (
//importante el id en el key
                  <li key={item.id}>
                <ItemListContainer Container item={item} />
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

export default ItemList;