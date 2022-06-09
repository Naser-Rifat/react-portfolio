import React from 'react';
import emailjs from 'emailjs-com';

export const Contactme = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'My Default Template', e.target, 'user_a2HniJicFrlhUrUh55Yfa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="row py-10">
      <div className=" col-lg-5">
        <div className="text-start ml-24  "> <h2 className=" my-5 text-black text-7xl font-bold">Contact Me</h2>
          <h3 className='text-3xl text-bold mb-4'> Get in touch <i class="  fas fa-arrow-right"></i>
          </h3>
          <p className='text-2xl '>
            Feel free to reach out to me any time. I'd love to hear from
            you.
            <br />
            Simply fill the from and send me an email.
          </p>
          <div className='mt-5 '>
            <i class=" text-3xl fas fa-phone"></i>
            <span className='ml-2 text-2xl'>+880 18276-02049</span>
          </div>
          <div className='mt-2 '>
            <i class="text-3xl fas fa-at"></i>
            <span className='ml-2 text-2xl'>dev.abunaserrifat@gmail.com</span>
          </div>

        </div>



      </div>
      <div className=" col-lg-7 ">
        <div data-aos="fade-up" className="w-100 mx-auto">
          <form onSubmit={sendEmail}>
            <div className="row py-5 ">
              <div className="col-8 form-group mx-auto ">
                <input type="text" className="form-control p-4 " placeholder="Name" name="name" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="email" className="form-control p-4 " placeholder="Email Address" name="email" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control p-4 " placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea className="form-control p-3 " id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              </div>
              <div className="col-8 p-3 mx-auto">
                <button type="submit" className="btn text-xl p-2  btn-dark" >Send Message <i class="far fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
