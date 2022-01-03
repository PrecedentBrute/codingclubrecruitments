import React, { Component } from "react";
import axios from "axios";
import Fade from 'react-reveal/Fade';
import { ReOrderableItem, ReOrderableList } from 'react-reorderable-list'
import 'react-reorderable-list/dist/index.css'
import './RegForm.css';
export default class RegForm extends Component { 

  constructor(props) {
    super(props);
        this.state = {
            customer: {
              name: "",
              pr1: "ap",
              pr2: "fe",
              pr3: "be",
              pr4: "cp",
              pr5: "ui",
              pr6: "gd",
              pr7: "vi",
              github: "",
              bits_email:"",
              bits_id: "",
              gender: "M",
              branch: "A1",
              status: "PS",
              email:"",
          },
          prlist: 
            [
              { id: 1, name: 'App Development' },
              { id: 2, name: 'Frontend Development' },
              { id: 3, name: 'Backend Development' },
              { id: 4, name: 'Competitive Coding' },
              { id: 5, name: 'UI/UX Development' },
              { id: 6, name: 'Game Development' },
              { id: 7, name: 'Video Editing' },
            ],          
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
          handleStatusChanged(event) {
                    var customer    = this.state.customer;
                    customer.status = event.target.value;
                
                    this.setState({ customer: customer });
          }
          handleBranchChanged(event) {
              var customer    = this.state.customer;
              customer.branch = event.target.value;
          
              this.setState({ customer: customer });
            }
          handleGithubChanged(event) {
            var customer    = this.state.customer;
            customer.github = event.target.value;
        
            this.setState({ customer: customer });
          }
          
  
        depName(id) {
          if (id === 1) return "ap";
          else if (id === 2) return "fe";
          else if (id === 3) return "be";
          else if (id === 4) return "cp";
          else if (id === 5) return "ui";
          else if (id === 6) return "gd";
          else if (id === 7) return "vi";
        }
          
  handleButtonClicked(e) {
    e.preventDefault();

    if (this.state.customer.bits_id.length !== 4) {
      window.alert("Please enter the last four digits from your BITS ID");
    } else {
          const toSubmit = {
          github: this.state.customer.github,
          bits_id: `2021${this.state.customer.branch}${this.state.customer.status}${this.state.customer.bits_id}P`,
          gender: "M",
          pr1: this.state.customer.pr1,
          pr2: this.state.customer.pr2,
          pr3: this.state.customer.pr3,
          pr4: this.state.customer.pr4,
          pr5: this.state.customer.pr5,
          pr6: this.state.customer.pr6,
          pr7: this.state.customer.pr7,
        }
    
          console.log(toSubmit);
    }
    


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
    <div className="w-full flex items-center justify-center mt-10 mb-10 md:p-8">
      <Fade>
      <form className="reg-form">
        {/* <div className="flex font-bold justify-center mt-6">
          <img
            className="h-20 w-20"
            alt="#"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
          />
        </div> */}
        <h2 className="text-3xl text-bold text-center text-white py-5 mt-8">
          Preference Form
        </h2>
        <div className="md:px-12 px-4 md:px-8` pb-10 text-white" >
          <div className="w-full mb-2 py-3" >
          
            <div className="flex items-center " >
            
              <i className="ml-3 fill-current text-white text-xs z-10 fas fa-user "></i>
              
              <input
                type="text"
                value={this.state.customer.name}
                onChange={this.handleNameChanged.bind(this)}
                placeholder="Name"
                className="-ml-2 px-8  bg-transparent w-full border-b-2 border-red-500 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-white focus:outline-none " 
              />
            </div>
          </div>
          <div className="w-full mb-2 py-3">
          
            <div className="flex items-center">
              <i className="ml-3 fill-current text-white text-xs z-10 fas fa-lock"></i>
              <input
                type="text"
                value={this.state.customer.bits_email}
                onChange={this.handleBitsEmailChanged.bind(this)}
                placeholder="BITS Email (f2021XXPSXXXXP@bits-pilani.ac.in)"
                className="-ml-2 px-8  bg-transparent w-full border-b-2 border-red-500 border-black-900 p-8 rounded px-3 py-2 border-black text-white focus:outline-none"
              />
            </div>
          </div>
            {/*<div className="w-full mb-2 py-3">
          
            <div className="flex items-center">
              <i className="ml-3 fill-current text-white text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.email}
                onChange={this.handleEmailChanged.bind(this)}
                placeholder="Personal Email"
                className="-ml-2 px-8  bg-transparent w-full border-b-2 border-red-500 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-white focus:outline-none"
              />
            </div>
      </div>*/}
          <div className="w-full mb-2 py-3">
         
            <div className="flex items-center">
              <i className="ml-3 fill-current text-white text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                value={this.state.customer.github}
                onChange={this.handleGithubChanged.bind(this)}
                placeholder="GitHub link (optional)"
                className="-ml-2 px-8  bg-transparent w-full border-b-2 border-red-500 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-white focus:outline-none"
              />
            </div>
          </div>
          {/*Select Gender :
          <div className="inline-flex">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
            <div className="m-3">
              <select style={{background: "transparent", color: "white"}}  id="genderSelect" value={this.state.customer.gender} onChange={(e) => {
                var customer = this.state.customer;
                customer.gender = e.target.value;
                this.setState({ customer: customer });
              }}
                className="border-2 border-red-500 rounded h-10 pl-5 bg-black hover:border-gray-400">
              <option className="bg-ccblack" value="M">Male</option>
              <option className="bg-ccblack" value="F">Female</option>
              <option className="bg-ccblack" value="O">Non Binary</option>
            </select>
            </div>
            </div>*/}
            
          <div className="mb-2 mt-6 text-sm md:text-base">
            <div className="text-lg">BITS ID</div>
            <div className="flex items-center w-10/12">
                2021

                <div className="inline-flex">
                  <select style={{background: "transparent", color: "white"}}  id="branchSelect" value={this.state.customer.branch} onChange={(e) => {
                    var customer = this.state.customer;
                    customer.branch = e.target.value;
                    this.setState({ customer: customer });
                  }}
                    className="border-2 border-red-500 appearance-none rounded mx-1 p-1 md:mx-2 bg-black hover:border-gray-400">
                  <option className="bg-ccblack" value="A1">A1</option>
                  <option className="bg-ccblack" value="A2">A2</option>
                  <option className="bg-ccblack" value="A3">A3</option>
                  <option className="bg-ccblack" value="A4">A4</option>
                  <option className="bg-ccblack" value="A5">A5</option>
                  <option className="bg-ccblack" value="A7">A7</option>
                  <option className="bg-ccblack" value="A8">A8</option>
                  <option className="bg-ccblack" value="A9">A9</option>
                  <option className="bg-ccblack" value="AA">AA</option>
                  <option className="bg-ccblack" value="AB">AB</option>
                  <option className="bg-ccblack" value="B1">B1</option>
                  <option className="bg-ccblack" value="B2">B2</option>
                  <option className="bg-ccblack" value="B3">B3</option>
                  <option className="bg-ccblack" value="B4">B4</option>
                  <option className="bg-ccblack" value="B5">B5</option>
                </select>
                </div>
                
                <div className="inline-flex">
                  <select style={{background: "transparent", color: "white"}}  id="statusSelect" value={this.state.customer.status} onChange={(e) => {
                    var customer = this.state.customer;
                    customer.status = e.target.value;
                    this.setState({ customer: customer });
                  }}
                    className="border-2 border-red-500 appearance-none rounded mx-1 md:mx-2 p-1 bg-black hover:border-gray-400">
                  <option className="bg-ccblack" value="PS">PS</option>
                  <option className="bg-ccblack" value="TS">TS</option>
                </select>
                </div>
                
                <div className="special"><input
                  type="text"
                  value={this.state.customer.bits_id}
                  onChange={this.handleBitsIdChanged.bind(this)}
                  placeholder="FOUR DIGIT ID"
                  maxLength="4"
                  className="bg-transparent border-b-2 border-red-500 border-teal-600 bg-teal-400 p-2 rounded text-white focus:outline-none"
              /></div> P
            </div>
          </div>
        <div className="text-white mt-3 py-3">Arrange in decreasing order of your preference (Draggable)</div> 
          <div style={{ display: 'flex', gap: '20px', alignItems:'center', justifyContent:'center' }} className="text-white">
      <ReOrderableList
        //The unique identifier for this list. Should be unique from other lists and list groups.
        name='list2'
        //your list data
        list={this.state.prlist}
        //the list update callback
              onListUpdate={(newList) => {
                this.setState({ prlist: newList });
                var customer = this.state.customer;
                customer.pr1 = this.depName(newList[0].id);
                customer.pr2 = this.depName(newList[1].id);
                customer.pr3 = this.depName(newList[2].id);
                customer.pr4 = this.depName(newList[3].id);
                customer.pr5 = this.depName(newList[4].id);
                customer.pr6 = this.depName(newList[5].id);
                customer.pr7 = this.depName(newList[6].id);
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
              className="px-8 mt-2 mb-2 bg-transparent hover:border-gray-400 border-2 border-red-500 rounded px-3 py-2 text-white-700 focus:outline-none"
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
          
        
          {/* <a href="login" className="text-xs text-gray-500 float-right mb-4">Forgot github?</a> */}
          <button
            onClick={this.handleButtonClicked.bind(this)}
            className="w-full py-2 mt-5 rounded-full bg-red-500 text-gray-100  focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
      </Fade>
    </div>
  );

    }
}