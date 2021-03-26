import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

    return (
      <section className='section-book' id='book-now'>
        <div className='row'>
          <div className='book'>
            <div className='book__form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary' style={{ fontSize: '4rem' }}>
                  お問い合わせ
                </h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} data-netlify='true'>
                <p className='form__group'>
                  <input
                    className='form__input'
                    type='text'
                    name='お名前'
                    placeholder={'お名前'}
                    ref={register({ required: true })}
                  />
                </p>
                <p className='form__group'>
                  <input
                    className='form__input'
                    type='email'
                    name='メールアドレス'
                    placeholder={'メールアドレス'}
                    ref={register({ required: true })}
                  />
                </p>
                <p className='form__group'>
                  <textarea
                    className='form__input'
                    rows='7'
                    name='メッセージ'
                    placeholder={'メッセージ'}
                    ref={register({ required: true })}
                  />
                </p>
                <p className='form__group form-submit'>
                  <div classname='form__group'>
                    <input type='submit' className='btn btn--green' />
                  </div>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
