import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Text from "../forms/Text";
import City from "../forms/City1";
import Comment from "../forms/Comment";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as yup from "yup";
import AxiosInstance from "../Axios";
import "./Register.css";
import registerImage from "../../assets/register.png";

const Register = () => {
  const navigate = useNavigate();

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    city: "",
    comment: "",
  };

  const schema = yup.object({
    first_name: yup.string().required("This is a required field"),
    last_name: yup.string(),
    email: yup.string().required("This is a required field"),
    phone_number: yup
      .string()
      .required("This is a required field")
      .matches(/^[0-9]+$/, "Must be only digits")
      .test(
        "is-positive",
        "Must be a positive number",
        (value) => Number(value) > 0
      )
      .test("is-integer", "Must be an integer", (value) =>
        Number.isInteger(Number(value))
      ),
    city: yup.string().required("This is a required field"),
  });

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".input", {
      y: -20,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.2,
    });
    tl.from(".button", {
      opacity: 0,
      scale: 0.2,
      duration: 0.3,
    });
    gsap.from(".register-image", {
      x: -1000,
      opacity: 0,
      dealy: 1,
      duration: 1,
    });
  });

  const submission = (data) => {
    AxiosInstance.post(`student/`, {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      city: data.city,
      comment: data.comment,
    });
    navigate("/thank-you");
  };

  return (
    <>
      <div className="register">
        <h1 className="h1">REGISTER NOW!</h1>
        <div className="register-page">
          <div className="register-image">
            <img
              src={registerImage}
              alt="Register"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="register-form">
            <div
              style={{
                backgroundColor: "#2d2c31",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form
                onSubmit={handleSubmit(submission)}
                style={{ maxWidth: "600px" }}
              >
                <div className="input">
                  <Text
                    label="First Name"
                    name="first_name"
                    control={control}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="input">
                  <Text
                    label="Last Name"
                    name="last_name"
                    control={control}
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="input">
                  <Text
                    label="Email"
                    name="email"
                    control={control}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input">
                  <Text
                    label="Phone Number"
                    name="phone_number"
                    control={control}
                    placeholder="(preferable WhatsApp)"
                  />
                </div>
                <div className="input">
                  <City
                    label="Choose Your Location"
                    name="city"
                    control={control}
                  />
                </div>
                <div className="input">
                  <Comment
                    label="Any questions for us?"
                    name="comment"
                    control={control}
                    placeholder="(optional)"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Button
                    className="button"
                    variant="contained"
                    size="large"
                    type="submit"
                    endIcon={<AppRegistrationIcon />}
                    style={{
                      backgroundColor: "#0d6dcf",
                      padding: "2rem 1rem",
                      fontSize: "1.5rem",
                      width: "100%",
                      maxWidth: "300px",
                    }}
                  >
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <section className="faq-background">
          <div className="faq-container">
            <h2 className="h2">Frequently Asked Questions</h2>
            <p className="p">
              Here are some of the most common frequently asked questions
            </p>
            <div className="questions">
              {[
                {
                  question: "Who is This Nexteen Program For?",
                  answer:
                    "This program is for students aged between the age of 13 to 19. We are looking for passionate students, ready to transform their outlook on business and become the next best problem-solvers. Whether an individual is in school or not, as long as they have the passion to learn and advance their business knowledge, they can sign up today!",
                },
                {
                  question: "What if I can’t afford it?",
                  answer:
                    "We believe that finances shouldn’t be a blockade for change-makers who want to take part in our business camp. In case you are in need of financial assistance, you can send us an email and we will look into your request. Our main goal is to motivate and support students, regardless of their background, so we will do the best we can to assist.",
                },
                {
                  question: "What is the attendance policy?",
                  answer:
                    "We want students to be able to optimise their program and that includes attending as many sessions as possible. We understand that in some situations, students may be unavailable due to unforeseen circumstances. For arrangements to be made from our side, students must let us know 48 hours before they miss a session. If they don’t provide notice or have a reason for lack of notice, they can email us and we will review the request.",
                },
                {
                  question: "How much is the program?",
                  answer:
                    "Our Hyderabad Hybrid Business Camp costs 9,000 rupees plus GST.",
                },
                {
                  question: "What happens in the sessions?",
                  answer:
                    "We provide Four types of sessions: \n1. Mindset Sessions \n2. Skill Sessions \n3. Exponential Technology Sessions \n4. Weekly Mentoring Sessions \nWe have designed all of these sessions to be interactive through group discussions and activities. Each session is generally 2-3 hours long. For more information, please check our hybrid program page.",
                },
                {
                  question: "When this program going to Commence from?",
                  answer: "We are starting off from June 28th 2022.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`individual-question ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <h4 className="h4" onClick={() => toggleQuestion(index)}>
                    <span>{item.question}</span>
                    <div
                      className={`arrow ${activeIndex === index ? "down" : ""}`}
                    >
                      <span>&#10549;</span>
                    </div>
                  </h4>
                  <p className="p">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
