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
            <form
              onSubmit={handleSubmit(onSubmit)}
              name='Contact'
              method='POST'
              netlify-honeypot='bot-field'
              data-netlify='true'
              action='/'
            >
              <p className='form__group'>
                <input
                  className='form__input'
                  type='text'
                  name='name'
                  placeholder={'お名前'}
                  ref={register({
                    required: true,
                    max: 255,
                    min: 3,
                    maxLength: 80,
                  })}
                />
                {errors.name && '名前を入力してください'}
              </p>
              <p className='form__group'>
                <input
                  className='form__input'
                  type='email'
                  name='email'
                  placeholder={'メールアドレス'}
                  ref={register({
                    required: true,
                    max: 41,
                    min: 4,
                    maxLength: 255,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && 'メールアドレスを入力してください'}
              </p>
              <p className='form__group'>
                <textarea
                  className='form__input'
                  rows='7'
                  name='message'
                  placeholder={'メッセージ'}
                  ref={register({
                    required: true,
                    max: 1000,
                    min: 10,
                    maxLength: 7,
                  })}
                />
                {errors.message && 'メールアドレスを入力してください'}
              </p>
              <p className='form__group form-submit'>
                <div className='form__group'>
                  <button type='submit' className='btn btn--green'>
                    送信
                  </button>
                </div>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
