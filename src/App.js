//Inicio nuevo formulario Formik
//importando libreria 
import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import swal from 'sweetalert';

const App = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const alerta=()=>{swal({ title: "Inicio de sesión exitoso"})}
  return (
      <>
       <Formik
       initialValues={{
        emailField: '', pswField:''
       }}
       validate={(values) => {
        let errors = {}; 
        if(!values.emailField){errors.emailField = 'Campo requerido'}
        else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.emailField)){errors.emailField = 'El nombre de usuario debe ser un correo electrónico'}
        if(!values.pswField){errors.pswField = 'Campo requerido'}
        else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.pswField)){errors.pswField = 'La contraseña debe ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo'}
        
        return errors;

       }} 
       onSubmit={(values, {resetForm}) => {
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 2000);
        }}
        >
        {( {errors} ) => (
          <Form className="app">
          <div>
          <label htmlFor="emailField">Nombre de Usuario</label>
          <Field type="email" id="emailField" name="emailField" placeholder="email@email.com"></Field>
          <ErrorMessage name='emailField' component={() => (<div className='error'>{errors.emailField}</div>)}></ErrorMessage>
          </div>
          <div>
          <label htmlFor="pswField">Contraseña</label>
          <Field type="password" id="pswField" name="pswField" placeholder="minimo 4 caracteres"></Field>
          <ErrorMessage name='pswField' component={() => (<div className='error'>{errors.pswField}</div>)}></ErrorMessage>
          </div>
          <button type="submit" id="submitBtn" name="submitBtn">Enviar</button>
          {formularioEnviado && alerta()}
         </Form>

        )}
        
       </Formik>
       
      </>
  );
}
export default App;


//Ejemplo original de formulario profesor Abel MIT
/*import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {name: '', email: '', password: ''},
    onSubmit: values =>{console.log('form:', values);
  },
  validate: values => {
    let errors = {};
    if (!values.name) errors.name = 'Campo Requerido';
    if (!values.email) errors.email = 'Campo Requerido';
    return errors;
  }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Nombre</div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div>: null}
        <div>Contraseña</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;*/
