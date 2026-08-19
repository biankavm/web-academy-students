import Link from 'next/link'

export default function Register() {
  return (
    <main>
      <div className='container-fluid d-flex min-vh-100'>
        <div className='row min-vw-100'>
          <div className='col-12 col-md-4 bg-light d-flex flex-column justify-content-center align-items-center text-center p-4'>
            <h2>Bem vindo à WA Social!</h2>
            <p className='text-secondary'>
              Crie seu perfil e comece a seguir pessoas.
            </p>
          </div>
          <div className='col-12 col-md-8 d-flex justify-content-center align-items-center py-4'>
            <form>
              <h4 className='mb-4'>Criar conta</h4>

              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Nome
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='name'
                  aria-describedby='name'
                  required
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='usuario' className='form-label'>
                  Usuário
                </label>
                <div className='input-group input-group-lg'>
                  <span className='input-group-text'>@</span>
                  <input
                    type='text'
                    className='form-control'
                    id='usuario'
                    aria-describedby='usuario'
                    required
                  />
                </div>
              </div>

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
                <label htmlFor='confirmEmail' className='form-label'>
                  Confirmar e-mail
                </label>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  id='confirmEmail'
                  aria-describedby='confirmEmail'
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
                  Cadastrar
                </button>
              </div>

              <div className='text-center mt-3'>
                <Link href='/login' className='btn btn-link'>
                  já possuo cadastro
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
