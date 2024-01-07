import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const InputForm = (props) => {
   return (
      <>
         <FormGroup>
            <div>
               <Label className='textFeild' className='outline-none py-2 pr-4 white block w-full textstyle'>
                  {" "}
                  Name
               </Label>

               <Input type='text' name='campaignname' placeholder='Enter name' className='outline-none py-2 pr-4 white block w-full textstyle' required value={props.campaignname} onChange={props.handleChange} />

               <Label className='textFeild'>Description</Label>
               <textarea name='description' cols={40} rows={3} placeholder='Enter details ' className='outline-none white py-2 pr-4  block w-full textstyle' required value={props.description} onChange={props.handleChange} />
               <Label className='textFeild'>Image </Label>

               <Input type='text' name='images' placeholder='Enter image link' className='outline-none py-2 pr-4 white block w-full textstyle' required value={props.images} onChange={props.handleChange} />

               <Label className=' textFeild white float-left pt-12'>Contact info</Label>

               <Input type='text' name='contactinfo' placeholder='Enter your contact info' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.contactinfo} onChange={props.handleChange} />
               <Label className=' textFeild white float-left pt-12 '>Target {props.target}</Label>

               <Input type='number' name='targetamount' placeholder='Enter your target' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.targetamount} onChange={props.handleChange} />
            </div>

            <div className=' date'>
               <Label className=' textFeild white float-left  pt-12'>End Date : </Label>
               <Input type='date' name='enddate' placeholder='Enter your end date' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.enddate} onChange={props.handleChange} />
            </div>
            <br />

            <Label className=' textFeild white float-left pt-12'>Enter upi id</Label>
            <Input type='text' name='upi' placeholder='Enter upi id' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.upi} onChange={props.handleChange} />

            <Label className=' textFeild white float-left pt-12'>Upload Documents</Label>
            <Input type='text' name='verification_documents' placeholder='Paste your document link here' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.verification_documents} onChange={props.handleChange} />
            <br />
            <br />
         </FormGroup>
      </>
   );
};

export default InputForm;
