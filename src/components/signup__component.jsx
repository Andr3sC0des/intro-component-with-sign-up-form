import React from "react"
import Input from "./input__component";

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            firstname: false,
            lastname: false,
            password: false,
            email: false
        };
        this.ValidationForm = this.ValidationForm.bind(this)
    }

    ValidationForm(e) { // METODO PARA SUBMIT
        const firstnameErrormsg = document.querySelector("#msgerrorfirstname")
        const lastnameErrormsg = document.querySelector("#msgerrorlastname")
        const emailErrormsg = document.querySelector("#msgerroremail")
        const passwordErrormsg = document.querySelector("#msgerrorpassword")

        const firstnameErroricon = document.querySelector("#iconerrorfirstname")
        const lastnameErroricon = document.querySelector("#iconerrorlastname")
        const emailErroricon = document.querySelector("#iconerroremail")
        const passwordErroricon = document.querySelector("#iconerrorpassword")

        const form = document.querySelector(".card__form")



        if (this.state.firstname && this.state.lastname && this.state.password && this.state.email) {
            form.submit()
        }

        else {
            if (!this.state.firstname) {
                firstnameErrormsg.classList.add("error")
                firstnameErroricon.classList.add("error")
                if (document.querySelector("#firstname").value == "") {
                    firstnameErrormsg.innerHTML = "First Name is empty"
                }

            }
            if (!this.state.lastname) {
                lastnameErrormsg.classList.add("error")
                lastnameErroricon.classList.add("error")
                if (document.querySelector("#lastname").value == "") {
                    lastnameErrormsg.innerHTML = "Last Name is empty"
                }

            }
            if (!this.state.email) {
                emailErrormsg.classList.add("error")
                emailErroricon.classList.add("error")
                if (document.querySelector("#email").value == "") {
                    emailErrormsg.innerHTML = "Email is empty"
                }

            }
            if (!this.state.password) {
                passwordErrormsg.classList.add("error")
                passwordErroricon.classList.add("error")
                if (document.querySelector("#password").value == "") {
                    passwordErrormsg.innerHTML = "Password is empty"
                }

            }

        }

        e.preventDefault()

    }

    componentDidMount() {
        const Inputs = document.querySelectorAll(".card__input")

        const regex = {
            firstname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            password: /^.{8,12}$/,
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        }



        const conditionalValidation = (nametag, input, selector) => {
            if (nametag.test(input)) {
                    selector.classList.remove("error")
                    selector.nextElementSibling.classList.remove("error")
            } else {
                selector.classList.add("error")
                selector.nextElementSibling.classList.add("error")
            }
        }

        const validarFormulario = (e) => {



            switch (e.target.name) {
                case "firstname":
                    conditionalValidation(regex.firstname, e.target.value, e.explicitOriginalTarget.nextElementSibling)
                    if (regex.firstname.test(e.target.value)) {
                        this.setState({ firstname: true })
                    } else {
                        this.setState({ firstname: false })
                        e.explicitOriginalTarget.nextElementSibling.nextElementSibling.innerHTML = "The First Name is invalid"
                    }
                    break;
                case "lastname":
                    conditionalValidation(regex.lastname, e.target.value, e.explicitOriginalTarget.nextElementSibling)
                    if (regex.lastname.test(e.target.value)) {
                        this.setState({ lastname: true })
                    } else {
                        this.setState({ lastname: false })
                        e.explicitOriginalTarget.nextElementSibling.nextElementSibling.innerHTML = "The Last Name is invalid"
                    }
                    break;
                case "password":
                    conditionalValidation(regex.password, e.target.value, e.explicitOriginalTarget.nextElementSibling)
                    if (regex.password.test(e.target.value)) {
                        this.setState({ password: true })
                    } else {
                        this.setState({ password: false })
                        e.explicitOriginalTarget.nextElementSibling.nextElementSibling.innerHTML = "The Password is invalid"
                    }
                    break;
                case "email":
                    conditionalValidation(regex.email, e.target.value, e.explicitOriginalTarget.nextElementSibling)
                    if (regex.email.test(e.target.value)) {
                        this.setState({ email: true })
                    } else {
                        this.setState({ email: false })
                        e.explicitOriginalTarget.nextElementSibling.nextElementSibling.innerHTML = "The Email is invalid"
                    }
                    break;
            }

        }

        Inputs.forEach(input => {
            input.addEventListener("keyup", validarFormulario)
            input.addEventListener("blur", validarFormulario)
        })

    }

    render() {

        return (
            <div className="cardcon">
                <div className="subscribe">
                    <p className="subscribe__info"><span>Try it free 7 days</span> then $20/mo. there after</p>
                </div>
                <div className="card">
                    <form className="card__form">
                        <Input idicon="iconerrorfirstname" idmsg="msgerrorfirstname" id="firstname" type="text" name="firstname" placeholder="First Name" />
                        <Input idicon="iconerrorlastname" idmsg="msgerrorlastname" id="lastname" type="text" name="lastname" placeholder="Last Name" />
                        <Input idicon="iconerroremail" idmsg="msgerroremail" id="email" type="text" name="email" placeholder="Email Address" />
                        <Input idicon="iconerrorpassword" idmsg="msgerrorpassword" id="password" type="password" name="password" placeholder="Password" />
                        <button onClick={this.ValidationForm} className="card__button" type="submit">Claim your free trial</button>
                        <span className="card__terms">By clicking the button, you are agreeing to our <a href="/">Terms and Services</a></span>
                    </form>
                </div>
            </div>
        );

    }
}

export default Signup
