import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Productos.css';
import CocinaCeroLogo from '../images/CocinaCeroLogo.png';
import ItemListContainer from '../components/ItemList';
import FetchApi from '../components/FetchApi';


class Productos extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: '1',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: '2',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '3',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      });
    }, 2000);
  }

  render() {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={CocinaCeroLogo}
                alt="CocinaCero Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/new" className="btn btn-primary">
              Page Not Found
            </Link>
          </div>

          <ItemListContainer badges={this.state.data} />
          <FetchApi/>
        </div>
      </React.Fragment>
      
    );
  }
}

export default Productos;
