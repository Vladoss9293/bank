import React from 'react'
import { MainLayout } from '../../../shared/layouts'
import styles from '../styles/RegisterPage.module.scss'
import { RegistrationForm } from '../../../features/auth/registration'

export function RegisterPage() {
  return (
    <MainLayout>
      <div style={{ border: "1px dotted red" }} className={styles.contentWrapper}>
        <RegistrationForm />
      </div>
    </MainLayout>
  )
}
