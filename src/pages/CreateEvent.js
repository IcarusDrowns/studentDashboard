import React from "react";
import 'tachyons';
import './CreateEvent.css';
import CreateButton from '../CreateButton.svg';
function CreateEvent(){
        return(
            <div>
                <div className="create_heading tc ma3"> Create Event</div>
                <div className="create_inputrow">
                    <div className="create_input_left">
                        Event Name
                        <div><input type='text'/></div>
                    </div>
                    
                    <div className="create_input_right">
                        Club Incharge
                        <div><input type='text'/></div>
                    </div>
                </div>
                <div className="create_input_row">
                    <div className="create_input_left">
                        Tag-Line
                        <div className="textareabox"><textarea rows={5}/></div>
                    </div>
                    
                    <div className="create_input_right">
                        About
                        <div className="textareabox"><textarea rows={5}/></div>
                    </div>
                </div>
                <div className="create_input_row">
                    <div className="create_input_all">
                        <div className="mv2">Event-Description</div>
                        <div className="textareabox"><textarea rows={5}/></div>
                    </div>
                </div>
                <div className="create_input_row">
                    <div className="create_input_all">
                        <div className="mv2">Rules/Procedure</div>
                        <div className="textareabox"><textarea rows={5}/></div>
                    </div>
                </div>
                <div className="create_input_row">
                    <div className="create_input_all">
                        Reward Details
                        <div className="textareabox"><textarea rows={5}/></div>
                    </div>
                </div>
                <div className="create_inputrow">
                    <div className="create_input_left">
                        Dates Of Events
                        <div><input type='text'/></div>
                        <div className='create_input_left mv3'>Event Type
                           <span className="checkbox ma3 " >
                           <input className="mh2"type='radio' name="comp"/><span className="checkwritebox">Free</span>
                           <input type='radio' className="mh2" name="comp"/><span className="checkwritebox">Paid</span>
                           <input type='radio' className="mh2" name="comp"/><span className="checkwritebox">Members</span>
                           </span>
                        </div>
                        <div className='create_input_left mv3' style={{width:'60vw'}}>Event Scale
                           <span className="checkbox ma3 " >
                           <input className="mh2"type='radio' name="comp1"/><span className="checkwritebox">Inter-College</span>
                           <input type='radio' className="mh2" name="comp1"/><span className="checkwritebox">Pan-India</span>
                           <input type='radio' className="mh2" name="comp1"/><span className="checkwritebox">International</span>
                           </span>
                        </div>                    
                    </div>
                    
                    <div className="create_input_right checkbox">
                        Event Topics
                        <div className="checkboxxing">
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Coding</span></div>
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Coding</span></div>
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Designing</span></div>
                        </div>
                        <div className="checkboxxing">
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Coding</span></div>
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Coding</span></div>
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Designing</span></div>
                        </div>
                        <div className="checkboxxing">
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Coding</span></div>
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Coding</span></div>
                        <div style={{marginRight:'40px'}}><input type='checkbox'/><span className="checkwritebox">Designing</span></div>
                        </div>
                    </div>
                </div>
                <div className="uploadfiles tc ma4">
                    Upload Recquired Files
                </div>
                <div className="uploading">
                    <div className="upload_data_left tc">
                        Poster of the Event <button className="pointer grow">Upload</button>
                    </div>
                    <div className="upload_data_right">
                           Club-Logo <button className="pointer grow">Upload</button>
                    </div>
                </div>
                <div className="tc grow pointer ma5">
                    <img src={CreateButton} style={{width:'30vw',margin:'10px'}}/>
                </div>

            </div>
        )
}

export default CreateEvent;