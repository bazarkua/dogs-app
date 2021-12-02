import React from "react";
import "./Dogs.css";
import Navbar from "../Navbar/Navbar";
import DogsDashBoard from "../testApi/DogsDashBoard";

class Dogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: {
        breed: '',
        breedType: '',
        origin: '',
        popularity: '',
        temperament: '',
        hypoallergenic: '',
        intelligence: '',
        photo: ''
      },
      isLoading: false,
      isError: false,
    };
  }
  notifications = (serverRes) => {
    switch (serverRes) {
      case 500:
      {
        this.notifyErr();
        break;
      }
      case 200:
      {
        this.notify();
        break;
      }
      case 404:
      {
        this.notifyErr();
        break;
      }

      default:
        this.notify();
    }

  }

  handleNameChanged(event) {
    let dog      = this.state.user;
    dog.breed = event.target.value;

    this.setState({ customer: dog });
  }

  handleActiveChanged(event) {
    let dog = this.state.user;
    dog.breedType  = event.target.value;

    this.setState({ dog: dog });
  }

  handlePhoneChanged(event) {
    console.log(event);
    let dog    = this.state.user;
    dog.origin = event.target.value;

    this.setState({ dog: dog });
  }

  handlePinChanged(event) {
    let dog    = this.state.user;
    dog.popularity = event.target.value;

    this.setState({ dog : dog  });
  }
  handleTemperamentChanged(event) {
    let dog    = this.state.dog ;
    dog.temperament = event.target.value;

    this.setState({ dog : dog  });
  }
  handleAllergicChanged(event) {
    let dog     = this.state.dog ;
    dog.hypoallergenic = event.target.value;

    this.setState({ dog : dog  });
  }
  handleIntelligenceChanged(event) {
    let dog    = this.state.dog;
    dog.intelligence = event.target.value;

    this.setState({ dog: dog });
  }
  handlePhotoChanged(event) {
    let dog    = this.state.dog;
    dog.photo = event.target.value;

    this.setState({ dog: dog });
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Navbar pathname="/Dogs" pathnameTitle="Dog Breeds Dashboard" />
        <div className="container font-lighter bg-transparent">
          <div className="row d-flex justify-content-end">

          </div>
          <DogsDashBoard/>
        </div>
      </div>
    );
  }
}
export default Dogs;
