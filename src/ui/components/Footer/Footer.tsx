'use client'

import { ColorsEnum, FontsEnum, SizesEnum, VariantsEnum } from '@/ui/enums/enums'

import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import styles from './Footer.module.scss'

export const Footer = () => {
  const handleClickPath = (path: string) => {
    alert(path)
  }

  const buttonProps = {
    variant: VariantsEnum.Text,
    size: SizesEnum.S,
    font: FontsEnum.Text16,
  }

  return (
    <div className='layout'>
      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.column}>
            <Button {...buttonProps} label={'Home'} />
            <Button {...buttonProps} label={'Frontend'} />
            <Button {...buttonProps} label={'Backend'} />
            <Button {...buttonProps} label={'How to'} />
            <Button {...buttonProps} label={'Documents'} />
            <Button {...buttonProps} label={'Blog'} />
          </div>
          <div className={styles.column}>
            <Button {...buttonProps} label={'Home'} />
            <Button {...buttonProps} label={'Frontend'} />
            <Button {...buttonProps} label={'Backend'} />
            <Button {...buttonProps} label={'How to'} />
            <Button {...buttonProps} label={'Documents'} />
            <Button {...buttonProps} label={'Blog'} />
          </div>
          <div className={styles.column}>
            <Button {...buttonProps} label={'Home'} />
            <Button {...buttonProps} label={'Frontend'} />
            <Button {...buttonProps} label={'Backend'} />
            <Button {...buttonProps} label={'How to'} />
            <Button {...buttonProps} label={'Documents'} />
            <Button {...buttonProps} label={'Blog'} />
          </div>
          <div className={styles.actions}>{/* <Image src={footerImage} alt={'image'} /> */}</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <Label
              label={'Copyright © 2026 farid.sh69@gmail.com. All rights reserved'}
              color={ColorsEnum.White}
              font={FontsEnum.Text12}
            />
          </div>
          <Button {...buttonProps} label='Terms of Use' onClick={() => handleClickPath('Terms')} />
          <Button
            {...buttonProps}
            label='Privacy Policy'
            onClick={() => handleClickPath('Privacy Policy')}
          />
          <Button
            {...buttonProps}
            label='Cookie Policy'
            onClick={() => handleClickPath('Cookie Policy')}
          />
          <Button
            {...buttonProps}
            label='Content Policy'
            onClick={() => handleClickPath('Content Policy')}
          />
          <Button {...buttonProps} label='Sitemap' onClick={() => handleClickPath('Sitemap')} />
        </div>
      </div>
    </div>
  )
}
