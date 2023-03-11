import React from "react";

import Header from "../../src/layouts/Header";

export const FAQ = () => {
  return (
    <>
      <Header />
      <div className="frequentlyAskedQuestions">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions.</h2>
          <div className="horizontal-line"></div>

          <div className="faq-content">
            <div className="faq-wrapper">
              <div className="bullet"></div>
              <div className="faq-question">
                <div className="faq-question-header">
                  <h3>What is your cancellation policy?</h3>
                  <p className="faq-answer" id="cancellation">
                    My time is valuable just like yours, and sometimes
                    appointments must be canceled because life happens!
                    <br /> <br /> If you need to cancel your appointment, please
                    let me know 48 hours or more in advance.
                    <br /> <br /> If you’re unable to cancel your appointment
                    within that time frame, the following fees will be charged:
                    $100 (balayage, highlights, bleach out) $40 (toner or
                    haircut)
                    <br /> <br /> If you have paid a non-refundable deposit upon
                    booking an appointment, it will be applicable as credit for
                    future bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-content">
            <div className="faq-wrapper">
              <div className="bullet"></div>
              <div className="faq-question">
                <div className="faq-question-header">
                  <h3>What should I do before getting my hair done?</h3>
                  <p className="faq-answer">
                    Coming in with clean hair will ensure the best possible
                    results.
                    <br /> <br />A good rule of thumb is to shampoo your hair at
                    least 24 to 48 hours before your coloring session. To help
                    me envision your hair goal, please come prepared with
                    inspiration photos or videos!
                    <br /> <br />
                    Timing is inevitable, but it is always better to have more
                    time than not enough time! If possible, clear out your
                    schedule in advance to avoid conflicting plans and rushed
                    timing.
                    <br /> <br /> Lastly, come in with a full stomach or feel
                    free to bring food and drinks! The last thing you want is to
                    feel hungry and dehydrated while sitting in a chair for
                    hours.
                    <br /> <br /> If you wish to bring a book or your laptop,
                    you&rsquo;re more than welcome!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-content">
            <div className="faq-wrapper">
              <div className="bullet"></div>
              <div className="faq-question">
                <div className="faq-question-header">
                  <h3>What service should I book for?</h3>
                  <p className="faq-answer">
                    It&rsquo;s totally normal to feel unsure about what hair
                    service to book with a stylist.
                    <br /> <br /> Here&rsquo;s a couple of things you can do to
                    help you make a decision. Firstly, think about what you want
                    to achieve with your hair. Then, think about your hair type,
                    goals and budget.
                    <br /> <br /> If you&rsquo;re still feeling unsure,
                    don&rsquo;t worry! You can always consult with me before
                    booking your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-content">
            <div className="faq-wrapper">
              <div className="bullet"></div>
              <div className="faq-question">
                <div className="faq-question-header">
                  <h3>How often should I return for a touch-up?</h3>
                  <p className="faq-answer">
                    The frequency of hair touch-ups depends on the type of
                    hairstyle and the rate of hair growth.
                    <br /> <br />
                    For most people, hair grows about half an inch per month,
                    which means that they may need a touch-up every four to six
                    weeks for short hairstyles or every six to twelve weeks for
                    longer hairstyles,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
