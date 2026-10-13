import { Button, FontsEnum, Label, Modal, TextAlignEnum, TextInput, VariantsEnum } from '@/ui'
import { useState } from 'react'

import styles from '../UiKit.module.scss'

export const ModalStory = () => {
  const [modal, setModal] = useState('')

  const props = {
    width: 450,
    setIsOpen: () => setModal(''),
    closeOnClickOutside: true,
  }

  return (
    <div className={styles.story}>
      <h4>8) Modal </h4>
      <small>We have modal with 2 sizes S and M, it has title, body and footer</small>

      <code>
        {
          '<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Modal Title" body={<div>Modal Body</div>} />'
        }
      </code>
      <Button onClick={() => setModal('Login')} label='Open Modal Login' />
      <Button onClick={() => setModal('Register')} label='Open Modal Register' />
      <Modal
        isOpen={modal === 'Login'}
        bodyPadding
        {...props}
        title='Login'
        body={
          <div>
            <Label
              font={FontsEnum.Text16}
              linesCount={3}
              textAlign='center'
              label='Enter your email'
            />
            <TextInput label='Email' type='email' placeholder='Email address' />
          </div>
        }
        actions={
          <div style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
            <Button label='Continue with Email' width={'100%'} />
            or
            <Button label='Continue with Gmail' variant={VariantsEnum.Secondary} width={'100%'} />
          </div>
        }
      />
      <Modal
        isOpen={modal === 'Register'}
        bodyPadding
        {...props}
        title='Register'
        variant={VariantsEnum.Secondary}
        body={
          <div style={{ gap: 16, display: 'flex', flexDirection: 'column' }}>
            <Label
              font={FontsEnum.Text16}
              linesCount={3}
              textAlign='center'
              label='Welcome to farid.sh69@gmail.com!'
            />
            <TextInput label='Name' placeholder='Name' />
            <TextInput label='Date of birth' type='date' placeholder='Email address' />
            <TextInput
              label='Password'
              type='text'
              placeholder='Password'
              hideable
              hint='Password must be between 6-8 characters'
            />
          </div>
        }
        actions={
          <div>
            <Button label='Create an account' width={'100%'} />
            <Label
              font={FontsEnum.Text12}
              label='Terms of Use, Privacy Policy & Content Policy'
              textAlign={TextAlignEnum.Center}
            />
          </div>
        }
      />
    </div>
  )
}
