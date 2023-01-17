import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useForm } from "react-hook-form";

const messages = {
    required: "Este campo es obligatorio",
    name: "El formato introducido no es el correcto",
    mail: "Debes introducir una dirección correcta",
    phone: "Debes introducir un número correcto"
};

const patterns = {
    name: /^[A-Za-z]+$/i,
    mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[0-9]+$/i
};

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (userInfo) => console.log(userInfo);

    return (
        <div className="formulario">

            <form className="containerform" onSubmit={handleSubmit(onSubmit)}>
                <div className="label">
                    <label htmlFor="name">Nombre completo</label>
                    <input id="type"
                        name="name"
                        type="text"
                        className={errors.name && "error"}
                        {...register("name", {
                            required: messages.required,
                            pattern: {
                                value: patterns.name,
                                message: messages.name
                            }
                        })}
                    />
                    {errors.name && <p className="errorP">{errors.name.message}</p>}
                </div>
                <div className="label">
                    <label htmlFor="email">Email</label>
                    <input id="type"
                        name="mail"
                        type="text"
                        className={errors.mail && "error"}
                        {...register("mail", {
                            required: messages.required,
                            pattern: {
                                value: patterns.mail,
                                message: messages.mail
                            }
                        })}
                    />
                    {errors.mail && <p className="errorP">{errors.mail.message}</p>}
                </div>
                <div className="label">
                    <label htmlFor="phone">Telefono</label>
                    <main class="telefono">
                        <div>
                            <select class="countryselector">
                                <option value="+99">US</option>
                                <option value="+34">ESPAÑA</option>
                                <option value="+52">MEXICO</option>
                            </select>
                        </div >
                        <input id="type"
                            name="phone"
                            type="tel"
                            placeholder="+34"
                            className={errors.phone && "error"}
                            {...register("phone", {
                                required: messages.required,
                                minLength: {
                                    value: 9,
                                    message: messages.phone
                                },
                                maxLength: {
                                    value: 9,
                                    message: messages.phone
                                },
                                pattern: {
                                    value: patterns.phone,
                                    message: messages.phone
                                }
                            })}
                        />
                        {errors.phone && <p className="errorP">{errors.phone.message}</p>}

                    </main>
                </div>

                <div>
                    <textarea class="textarea" className={errors.phone && "error"} {...register("textarea", { required: messages.req })} name="help" rows="6" cols="60" min="0" max="15" placeholder="¿En que podemos ayudarte?"></textarea>
                </div>
                <div>
                    <label class="checkbox"><input type="checkbox" id="" value="" />Acepto la
                        Politica de
                        <a href="checkbox">
                            Privacidad</a> y los <a href="checkbox" />Terminos y condiciones</label>
                </div>
                <button className="send1" type="submit">Sign Up</button>
            </form >
        </div >
    );
}


export default Form;