import React, { Component } from "react";
import "./editPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";

// decided to use a class here since it was easier to granularly update the state
class EditPage extends Component {
  state = {
    id: 0,
    name: "",
    email: "",
    channel: "",
    address: "",
    postal: "",
    city: "",
    province: "",
    country: "",
  };

  // calls the API get function when edit page mounts
  componentDidMount() {
    // normally I would hide the API key in ENV variables, again here no real need in this case
    axios
      .get(
        `https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json`
      )
      .then((res) => {
        // set state to the response given the id that matches the params
        let customers = res.data.customers[this.props.match.params.id];
        this.setState({
          id: customers.id,
          name: customers.name,
          email: customers.email,
          channel: customers.channel,
          address: customers.address,
          postal: customers.postal,
          city: customers.city,
          province: customers.province,
          country: customers.country,
        });
      })
      // Here i'm just console logging the error, we could change it to do something more specific
      .catch((err) => {
        console.log(err);
      });
  }
  // handle functions to update specific customer information
  handleName = async (e) => {
    await this.setState({
      name: e.target.value,
    });
  };

  handleEmail = async (e) => {
    await this.setState({
      email: e.target.value,
    });
  };

  handleChannel = async (e) => {
    await this.setState({
      channel: e.target.value,
    });
  };

  handleAddress = async (e) => {
    await this.setState({
      address: e.target.value,
    });
  };

  handlePostal = async (e) => {
    await this.setState({
      postal: e.target.value,
    });
  };

  handleCity = async (e) => {
    await this.setState({
      city: e.target.value,
    });
  };

  handleProvince = async (e) => {
    await this.setState({
      province: e.target.value,
    });
  };

  handleCountry = async (e) => {
    await this.setState({
      country: e.target.value,
    });
  };

  // submission function that logs the newly updated customer info in the console and redirects to previous page
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    alert("Customer info updated, check status in console");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="editPage">
        <div className="editPage__top">
          <Link to="/" className="editPage__back">
            Back
          </Link>
        </div>
        <h1 className="editPage__title">Edit Customer</h1>
        <form
          className="editPage__form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          {/* NAME */}
          <div className="editPage__core">
            <div className="editPage__field">
              <label htmlFor="name" className="editPage__label">
                Name:
              </label>
              <input
                className="editPage__input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleName}
                required
              ></input>
            </div>
            {/* EMAIL */}
            <div className="editPage__field">
              <label htmlFor="email" className="editPage__label">
                Email:
              </label>
              <input
                className="editPage__input"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleEmail}
                required
              ></input>
            </div>
            {/* ADDRESS */}
            <div className="editPage__field">
              <label htmlFor="address" className="editPage__label">
                Address:
              </label>
              <input
                className="editPage__input"
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleAddress}
                required
              ></input>
            </div>
            {/* POSTAL */}
            <div className="editPage__field">
              <label htmlFor="postal" className="editPage__label">
                Postal:
              </label>
              <input
                className="editPage__input"
                type="text"
                name="postal"
                value={this.state.postal}
                onChange={this.handlePostal}
                required
              ></input>
            </div>
            {/* CITY */}
            <div className="editPage__field">
              <label htmlFor="city" className="editPage__label">
                City:
              </label>
              <input
                className="editPage__input"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleCity}
                required
              ></input>
            </div>
            {/* PROVINCE */}
            <div className="editPage__field">
              <label htmlFor="province" className="editPage__label">
                Province:
              </label>
              <input
                className="editPage__input"
                type="text"
                name="province"
                value={this.state.province}
                onChange={this.handleProvince}
                required
              ></input>
            </div>
            {/* COUNTRY */}
            <div className="editPage__field">
              <label htmlFor="country" className="editPage__label">
                Country:
              </label>
              <input
                className="editPage__input"
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.handleCountry}
                required
              ></input>
            </div>
            {/* CHANNEL */}
            <div className="editPage__field">
              <label
                htmlFor="channel"
                className="editPage__label editPage__label--channel"
              >
                Channel:
              </label>
              <select
                className="editPage__input"
                name="channel"
                selected={this.state.channel}
                onChange={this.handleChannel}
                required
              >
                <option value="Website">Website</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Word-of-mouth">Word-of-mouth</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="editPage__bottom">
            <button type="submit" className="btn">
              Submit
            </button>
            <Link to="/" className="btn">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default EditPage;
