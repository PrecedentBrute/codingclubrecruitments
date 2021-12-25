import React, { Component } from "react";
import axios from "axios";

import { ReOrderableItem, ReOrderableList } from 'react-reorderable-list'
import 'react-reorderable-list/dist/index.css'
import './RegForm.css';
export default class RegForm extends Component { 

  constructor(props) {
    super(props);
        this.state = {
            customer: {
              name: "",
              pr1: "cp",
              pr2: "be",
              pr3: "fe",
              pr4: "ap",
              pr5: "ui",
              password: "",
              bits_email:"",
              bits_id: "",
              gender: "M",
              email:"",
          },
          prlist: 
            [
              { id: 1, name: 'Competititve Programming' },
              { id: 2, name: 'Backend' },
              { id: 3, name: 'Frontend' },
              { id: 4, name: 'App Development' },
              { id: 5, name: 'UI/UX Development' }],          
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
          
  handleButtonClicked(e) {
          e.preventDefault();
          console.log(this.state.customer);


          // var config = {
          //   method: 'post',
          //   url: 'http://cc-api.eastus.cloudapp.azure.com/user-api/CandidateRegistration',
          //   headers: { 
          //     'Content-Type': 'application/json', 
          //   },
          //   data : this.state.customer
          // };

          // axios(config)
          // .then(function (response) {
          //   console.log(JSON.stringify(response.data));
          // })
          // .catch(function (error) {
          //   console.log(error);
          // });

        }
      
render() {
  return (
    <div className="w-full flex items-center justify-center mt-10 mb-10 p-8">
      <form className="w-full md:w-1/3" className="reg-form">
        {/* <div className="flex font-bold justify-center mt-6">
          <img
            className="h-20 w-20"
            alt="#"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
          />
        </div> */}
        <h2 className="text-3xl text-bold text-center text-black mb-4 py-5">
          Registration Form
        </h2>
        <div className="px-12 pb-10" >
          <div className="w-full mb-2 py-3" >
          
            <div className="flex items-center " >
            
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user "></i>
              
              <input
                type="text"
                value={this.state.customer.name}
                onChange={this.handleNameChanged.bind(this)}
                placeholder="Name"
                className="-mx-6 px-8  bg-transparent w-full border-b-2 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-black focus:outline-none " 
              />
            </div>
          </div>
          <div className="w-full mb-2 py-3">
          
            <div className="flex items-center">
              <i className="ml-3 fill-current text-black text-xs z-10 fas fa-lock"></i>
              <input
                type="text"
                value={this.state.customer.bits_email}
                onChange={this.handleBitsEmailChanged.bind(this)}
                placeholder="BITS Email (f2021XXPSXXXXP@bits-pilani.ac.in)"
                className="-mx-6 px-8  bg-transparent w-full border-b-2 border-black-900 p-8 rounded px-3 py-2 border-black text-black-900 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2 py-3">
          
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.email}
                onChange={this.handleEmailChanged.bind(this)}
                placeholder="Personal Email"
                className="-mx-6 px-8  bg-transparent w-full border-b-2 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-black focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2 py-3">
         
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.password}
                onChange={this.handlePasswordChanged.bind(this)}
                placeholder="Password"
                style={{color:"black"}}
                className="-mx-6 px-8  bg-transparent w-full border-b-2 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-black focus:outline-none"
              />
            </div>
          </div>
          Select Gender :
          <div className="inline-flex">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
            <div className="m-3">
              <select style={{background: "transparent", color: "black"}}  id="genderSelect" value={this.state.customer.gender} onChange={(e) => {
                var customer = this.state.customer;
                customer.gender = e.target.value;
                this.setState({ customer: customer });
              }}
                className="border border-black rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Non Binary</option>
            </select>
            </div>
          </div>
          <div className="w-full mb-2 py-3">
         
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.bits_id}
                onChange={this.handleBitsIdChanged.bind(this)}
                placeholder="BITS ID ex. (2021XXPSXXXXP)"
                className="-mx-6 px-8  bg-transparent w-full border-b-2 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-black focus:outline-none"
              />
            </div>
          </div>
        <div className="text-black mt-3 py-3">Arrange in the order of your preference (Draggable)</div> 
          <div style={{ display: 'flex', gap: '20px' }} className="text-black">
      <ReOrderableList
        //The unique identifier for this list. Should be unique from other lists and list groups.
        name='list2'
        //your list data
        list={this.state.prlist}
        //the list update callback
              onListUpdate={(newList) => {
                this.setState({ prlist: newList });
                var customer = this.state.customer;
                customer.pr1 = this.state.prlist[0].name;
                customer.pr2 = this.state.prlist[1].name;
                customer.pr3 = this.state.prlist[2].name;
                customer.pr4 = this.state.prlist[3].name;
                customer.pr5 = this.state.prlist[4].name;
                this.setState({ customer: customer });
              }
              }
        style={{
          width: '300px'
        }}
      >
        {this.state.prlist.map((data, index) => (
          <ReOrderableItem key={`item-${index}`}>
            <div
              className="px-8 mt-2 mb-2 bg-transparent border border-black rounded px-3 py-2 text-black-700 focus:outline-none"
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