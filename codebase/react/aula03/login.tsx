'use client'

import Link from 'next/link'

export default function Login() {
  return (
    <main>
      <div className='container-fluid d-flex min-vh-100'>
        <div className='row min-vw-100'>
          <div className='col-12 col-md-4 bg-light d-flex flex-column justify-content-center align-items-center text-center p-4'>
            <h2>Bem vindo à WA Social!</h2>
            <p className='text-secondary'>
              Encontre pessoas e acompanhe o que elas publicam.
            </p>
          </div>
          <div className='col-12 col-md-8 d-flex justify-content-center align-items-center'>
            <form>
              <h4 className='mb-4'>Entrar</h4>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  E-mail
                </label>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  id='email'
                  aria-describedby='email'
                  required
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Senha
                </label>
                <input
                  type='password'
                  className='form-control form-control-lg'
                  id='password'
                  required
                />
              </div>

              <div className='d-grid col-12'>
                <button type='submit' className='btn btn-primary btn-lg'>
                  Entrar
                </button>
              </div>

              <div className='text-center mt-3'>
                <Link href='/register' className='btn btn-link'>
                  não tenho cadastro
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
