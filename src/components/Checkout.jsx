import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { dataBase } from '../service/firebase'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, getTotalPrice, clearCart } = useContext(CartContext)

    const finalizarCompra = (dataForm) => {


        let order = {
            comprador: {
                name: dataForm.name,
                lastname: dataForm.lastname,
                address: dataForm.address,
                email: dataForm.email
            },
            compras: cart,
            total: getTotalPrice(),
            date: serverTimestamp()
        }

        const sales = collection(dataBase, 'orders');
        // Agregar un documento
        addDoc(sales, order)
            .then((res) => {
                setOrderId(res.id)
                clearCart()
            })
            .catch((error) => console.error(error))

    }


    return (
        <>
            {
                orderId ?
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Compra realizada con éxito</h2>
                        <p>Id de la compra: {orderId}</p>
                        <br />
                        <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Volver al inicio</Link>
                    </div >
                    : <div>
                        <h1>Complete con sus datos</h1>
                        <form onSubmit={handleSubmit(finalizarCompra)}>
                            <input className='form-control' type="text" name='name' placeholder='Ingrese su nombre' {...register('name', { required: true, minLength: 3 })} />
                            {errors?.name?.type === 'required' && <span style={{ color: 'red' }}>Por favor, complete este campo</span>}
                            {errors?.name?.type === 'minLength' && <span style={{ color: 'red' }}>Este campo debe tener tres caracteres como mínimo</span>}

                            <input className='form-control' type="text" name='lastname' placeholder='Ingrese su apellido' {...register('lastname', { required: true, minLength: 2 })} />
                            {errors?.lastname?.type === 'required' && <span style={{ color: 'red' }}>Por favor, complete este campo</span>}
                            {errors?.lastname?.type === 'minLength' && <span style={{ color: 'red' }}>Este campo debe tener dos caracteres como mínimo</span>}

                            <input className='form-control' type="text" name='address' placeholder='Ingrese su dirección' {...register('address', { required: true, minLength: 10, maxLength: 35 })} />
                            {errors?.address?.type === 'required' && <span style={{ color: 'red' }}>Por favor, complete este campo</span>}
                            {errors?.address?.type === 'minLength' && <span style={{ color: 'red' }}>Este campo debe tener 10 caracteres como mínimo</span>}
                            {errors?.address?.type === 'maxLength' && <span style={{ color: 'red' }}>EL campo dirección es demasiado largo</span>}

                            <input className='form-control' type="email" name='email' placeholder='Ingrese su correo' {...register('email', { required: true })} />
                            {errors?.email?.type === 'required' && <span style={{ color: 'red' }}>Por favor, complete este campo</span>}

                            <input className='form-control' type="email" name='second-email' placeholder='Repita su correo' {...register('secondemail', { required: true, validate: { matchedEmails: secondEmail => secondEmail === getValues().email } })} />
                            {errors?.secondemail?.type === 'matchedEmails' && <span style={{ color: 'red' }}>Los emails deben ser iguales</span>}

                            <button className='btn-form' type='submit' disabled={!cart.length} >Enviar</button>
                        </form>
                    </div>
            }

        </>
    )
}

export default Checkout
