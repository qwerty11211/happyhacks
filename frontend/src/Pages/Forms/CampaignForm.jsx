import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import { Component } from "react";
import { Form, Button, Card, CardHeader } from "reactstrap";
import InputForm from "./InputForm";
import "./style.css";
import { set_access_token } from "../utils/accessToken";
import axios from "axios";

class CampaignForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentStep: 1,
         campaignname: "",
         description: "",
         type: "",
         status: "",
         startdate: "",
         enddate: "",
         contactinfo: "",
         targetamount: 0,
         upi: "",
         verification_documents: "",
      };

      // Bind the submission to handleChange()
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
      set_access_token();
   }
   componentDidUpdate() {
      set_access_token();
   }

   handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

   handleSubmit(event) {
      axios
         .post(
            "http://localhost:8000/campaigns/",
            {
               name: this.state.campaignname,
               images: this.state.images,
               description: this.state.description,
               type: this.state.type,
               status: "Pending",
               start_at: "2022-06-05T20:07:56.892Z",
               end_date: "2022-07-05T20:07:56.892Z",
               target_amount: this.state.targetamount,
               likes: 0,
               contact_info: this.state.contactinfo,
               organiser_id: 0,
               qrcode_url: "dsd",
               upi_id: this.state.upi,
               verification_documents: this.state.verification_documents,
               is_verified: true,
            },
            { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } }
         )
         .then(function (res) {
            console.log(res);
         })
         .catch(function (err) {
            console.log(err);
         });
      event.preventDefault();
   }

   render() {
      return (
         <div className='main'>
            <Container>
               <Row>
                  <div className=' wh pt-28 pl-20'>
                     <Form onSubmit={this.handleSubmit}>
                        <Card>
                           <CardHeader className='header heading text-center'>Create campaign</CardHeader>

                           <InputForm name='Campaign' currentStep={this.state.currentStep} handleChange={this.handleChange} campaignname={this.state.campaignname} discription={this.state.discription} type={this.state.type} images={this.state.images} />
                        </Card>
                     </Form>
                  </div>
               </Row>
            </Container>
         </div>
      );
   }
}

export default CampaignForm;
