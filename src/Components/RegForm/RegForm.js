import React, { Component } from "react";
import axios from "axios";
import { Listbox } from '@headlessui/react'

import { ReOrderableItem, ReOrderableList } from 'react-reorderable-list'
import 'react-reorderable-list/dist/index.css'

export default class RegForm extends Component {

    genders = [
      { id: 1, name: 'Male', unavailable: false },
      { id: 2, name: 'Female', unavailable: false },
      { id: 3, name: 'Non Binary', unavailable: false },
    ] 

    constructor(props) {
        super(props);
        this.state = {
            customer: {
              name: "",
              pr1: "",
              pr2: "",
              pr3: "",
              pr4: "",
              pr5: "",
              password: "",
              bits_email:"",
              bits_id: "",
              gender: "",
              email:"",
          },
          prlist: 
            [
              { id: 1, name: 'Competititve Programming' },
              { id: 2, name: 'Backend' },
              { id: 3, name: 'Frontend' },
              { id: 4, name: 'App Development' },
              { id: 5, name: 'UI/UX Development' }]
          }
          
        }
      
        handleNameChanged(event) {
          var customer = this.state.customer;
          customer.name = event.target.value;
          this.setState({ customer: customer });
        }
        
        handleBitsEmailChanged(event) {
            var customer    = this.state.customer;
            customer.bits_email = event.target.value;
        
            this.setState({ customer: customer });
          }
          handleEmailChanged(event) {
            var customer    = this.state.customer;
            customer.email = event.target.value;
        
            this.setState({ customer: customer });
          }
          handleBitsIdChanged(event) {
            var customer    = this.state.customer;
            customer.bits_id = event.target.value;
        
            this.setState({ customer: customer });
          }
          handleGenderChanged(event) {
            var customer    = this.state.customer;
            customer.gender = event.target.value;
        
            this.setState({ customer: customer });
          }
          handlePasswordChanged(event) {
            var customer    = this.state.customer;
            customer.password = event.target.value;
        
            this.setState({ customer: customer });
          }
          // handlePrefrence1Changed(event) {
          //   var customer    = this.state.customer;
          //   customer.pr1 = event.target.value;
        
          //   this.setState({ customer: customer });
          // }
          // handlePrefrence2Changed(event) {
          //   var customer    = this.state.customer;
          //   customer.pr2 = event.target.value;
        
          //   this.setState({ customer: customer });
          // }
          // handlePrefrence3Changed(event) {
          //   var customer    = this.state.customer;
          //   customer.pr3 = event.target.value;
        
          //   this.setState({ customer: customer });
          // }
          // handlePrefrence4Changed(event) {
          //   var customer    = this.state.customer;
          //   customer.pr4 = event.target.value;
        
          //   this.setState({ customer: customer });
          // }
          // handlePrefrence5Changed(event) {
          //   var customer    = this.state.customer;
          //   customer.pr5 = event.target.value;
        
          //   this.setState({ customer: customer });
          // }
  
        depName(id) {
          if (id === 1) return "cp";
          else if (id === 2) return "be";
          else if (id === 3) return "fe";
          else if (id === 4) return "ap";
          else if (id === 5) return "ui";
        }
          
        handleButtonClicked() {
          console.log(this.state.customer);


          var config = {
            method: 'post',
            url: 'http://cc-api.eastus.cloudapp.azure.com/user-api/CandidateRegistration',
            headers: { 
              'Content-Type': 'application/json', 
            },
            data : this.state.customer
          };

          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

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
                value={this.state.customer.name}
                onChange={this.handleNameChanged.bind(this)}
                placeholder="Name"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 border-black text-gray-700 focus:outline-none"

              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
              <input
                type="text"
                value={this.state.customer.bits_email}
                onChange={this.handleBitsEmailChanged.bind(this)}
                placeholder="BITS Email (f2021XXPSXXXXP@bits-pilani.ac.in)"
                className="-mx-6 px-8 w-full border rounded px-3 py-2 border-black text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.email}
                onChange={this.handleEmailChanged.bind(this)}
                placeholder="Personal Email"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 border-black text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.password}
                onChange={this.handlePasswordChanged.bind(this)}
                placeholder="Password"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 border-black text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.gender}
                onChange={this.handleGenderChanged.bind(this)}
                placeholder="Gender"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 border-black text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.bits_id}
                onChange={this.handleBitsIdChanged.bind(this)}
                placeholder="BITS ID ex. (2021XXPSXXXXP)"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 border-black text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        <div className="text-black mt-3">Arrange in the order of your preference (Draggable)</div> 
          <div style={{ display: 'flex', gap: '20px' }} className="text-black">
      <ReOrderableList
        //The unique identifier for this list. Should be unique from other lists and list groups.
        name='list2'
        //your list data
        list={this.state.prlist}
        //the list update callback
              onListUpdate={(newList) => {
                this.setState({ prlist: newList }); console.log(newList);
                this.setState({
                customer: {
                  pr1: this.depName(this.state.prlist[0].id),
                  pr2: this.depName(this.state.prlist[1].id),
                  pr3: this.depName(this.state.prlist[2].id),
                  pr4: this.depName(this.state.prlist[3].id),
                  pr5: this.depName(this.state.prlist[4].id)
                }
              });
              }
              }
        style={{
          width: '300px'
        }}
      >
        {this.state.prlist.map((data, index) => (
          <ReOrderableItem key={`item-${index}`}>
            <div
              className="px-8 mt-2 mb-2 border border-black rounded px-3 py-2 text-black-700 focus:outline-none"
              style={{
                cursor: 'pointer',
              }}
            >
              {data.name}
            </div>
          </ReOrderableItem>
        ))}
      </ReOrderableList>
    </div>
          
        
          {/* <a href="login" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a> */}
          <button
            onClick={this.handleButtonClicked.bind(this)}
            className="w-full py-2 mt-5 rounded-full bg-red-500 text-gray-100  focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

    }
}