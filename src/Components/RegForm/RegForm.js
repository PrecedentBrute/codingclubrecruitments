import React, { Component } from "react";
// import "./RegistrationForm.css";

export default class RegForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: {
              Name: "",
              Prefrence1: "",
              Prefrence2: "",
              Prefrence3: "",
              Prefrence4: "",
              Prefrence5: "",
              BitsEmail:"",
              BitsId: "",
              Gender: "",
              Email:"",
            }
          }
        }
      
        handleNameChanged(event) {
          var customer = this.state.customer;
          customer.Name = event.target.value;
      
          this.setState({ customer: customer });
        }
        
        handleBitsEmailChanged(event) {
            var customer    = this.state.customer;
            customer.BitsEmail = event.target.value;
        
            this.setState({ customer: customer });
          }
          handleEmailChanged(event) {
            var customer    = this.state.customer;
            customer.Email = event.target.value;
        
            this.setState({ customer: customer });
          }
          handleBitsIdChanged(event) {
            var customer    = this.state.customer;
            customer.BitsId = event.target.value;
        
            this.setState({ customer: customer });
          }
          handleGenderChanged(event) {
            var customer    = this.state.customer;
            customer.Gender = event.target.value;
        
            this.setState({ customer: customer });
          }
          handlePrefrence1Changed(event) {
            var customer    = this.state.customer;
            customer.Prefrence1 = event.target.value;
        
            this.setState({ customer: customer });
          }
          handlePrefrence2Changed(event) {
            var customer    = this.state.customer;
            customer.Prefrence2 = event.target.value;
        
            this.setState({ customer: customer });
          }
          handlePrefrence3Changed(event) {
            var customer    = this.state.customer;
            customer.Prefrence3 = event.target.value;
        
            this.setState({ customer: customer });
          }
          handlePrefrence4Changed(event) {
            var customer    = this.state.customer;
            customer.Prefrence4 = event.target.value;
        
            this.setState({ customer: customer });
          }
          handlePrefrence5Changed(event) {
            var customer    = this.state.customer;
            customer.Prefrence5 = event.target.value;
        
            this.setState({ customer: customer });
          }
          
        handleButtonClicked() {
          console.log(this.state.customer);
        }
      
render() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="w-full md:w-1/3 bg-white rounded-lg">
        <div className="flex font-bold justify-center mt-6">
          <img
            className="h-20 w-20"
            alt="#"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
          />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">
          Registration Form
        </h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Name}
                onChange={this.handleNameChanged.bind(this)}
                placeholder="Name"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"

              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
              <input
                type="text"
                value={this.state.customer.BitsEmail}
                onChange={this.handleBitsEmailChanged.bind(this)}
                placeholder="Bits Email"
                className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Email}
                onChange={this.handleEmailChanged.bind(this)}
                placeholder="Email"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Gender}
                onChange={this.handleGenderChanged.bind(this)}
                placeholder="Gender"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.BitsId}
                onChange={this.handleBitsIdChanged.bind(this)}
                placeholder="Bits Id"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Prefrence1}
                onChange={this.handlePrefrence1Changed.bind(this)}
                placeholder="Prefrence 1"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Prefrence2}
                onChange={this.handlePrefrence2Changed.bind(this)}
                placeholder="Prefrence 2"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Prefrence3}
                onChange={this.handlePrefrence3Changed.bind(this)}
                placeholder="Prefrence 3"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Prefrence4}
                onChange={this.handlePrefrence4Changed.bind(this)}
                placeholder="Prefrence 4"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.Prefrence5}
                onChange={this.handlePrefrence5Changed.bind(this)}
                placeholder="Prefrence 5"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          {/* <a href="login" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a> */}
          <button
            onClick={this.handleButtonClicked.bind(this)}
            className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

    }
}