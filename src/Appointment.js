import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


export const Appointment = () => {
    const fullname = useRef();
    const contact = useRef();
    const feel = useRef();

    const navigate = useNavigate();


    // Submit
    const submitInfo = (e) => {
        e.preventDefault();

        console.log(fullname.current.value);
        console.log(contact.current.value);
        console.log(feel.current.value);

        const uploadData = new FormData();
        uploadData.append('name', fullname.current.value);
        uploadData.append('contact', contact.current.value);
        uploadData.append('feel', feel.current.value);



        fetch('http://127.0.0.1:8000/api/', {
            method: "POST",
            body: uploadData
        })
            .then(res => {
            return res.json();
            })
            .then(data => {
            // console.log(data)
            navigate('/successful')
            })
            .catch(err => {
                console.log(err)
                alert("Invalid Input")
    })

    }


    return (
        <div className="background__image">

            <div class="container py-5 h-100 ">
                <div class="row d-flex justify-content-center align-items-center h-100 ">
                    <div class="col-xl-10 ">
                        <div class="card rounded-3 text-black ">
                            <div class="row g-0 ">
                                <div class="col-lg-6 ">
                                    <div class="card-body p-md-5 mx-md-4 ">

                                        <div class="text-center ">
                                            <h1>HEALTHIFY</h1>

                                        </div>

                                        <form action="login.php " method="post" onSubmit={(e) => submitInfo(e)}>

                                            <p style={{ color: 'green' }}>Book an AP now</p>

                                            {/* Name */}
                                            <div class="form-outline mb-4 ">
                                                <label class="form-label " for="form2Example11 ">Full Name</label>
                                                <input ref={fullname} type="text " id="form2Example11 " class="form-control " placeholder="Enter Name" name="email " required />
                                            </div>

                                            {/* Tel */}
                                            <div class="form-outline mb-4 ">
                                                <label class="form-label " for="form2Example22 ">Contact</label>
                                                <input ref={contact} type="tel" id="form2Example22 " class="form-control " name="password " placeholder="Enter Contact" required/>
                                            </div>

                                            {/* Description */}
                                            <div class="form-outline mb-4 ">
                                                <label class="form-label " for="form2Example22 ">How do you feel?</label>
                                                <textarea ref={feel}  style={{ border: '1px solid grey' }} id="w3review" name="w3review" rows="6" cols="38" required></textarea>
                                            </div>

                                            <div class="text-center pt-1 mb-5 pb-1 ">
                                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ">Book AP</button>
                                                <a class="text-muted ">This is augent</a>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4 ">
                                                <p class="mb-0 me-2 ">An Emergency?</p>
                                                <a href="./signup.html " class="btn btn-outline-danger ">Argently</a>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center gradient-custom-2 ">
                                    <div class="text-white px-3 py-4 p-md-5 mx-md-4 ">
                                        <h4 class="mb-4 ">Get your health care directly from healthify</h4>
                                        <p class="small mb-0 "></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
