import React, { useState, useEffect } from 'react'

import { ExampleRequestService } from '_services'

import styles from './styles.css'

const ExampleRequestComponent = () => {
  const [name, setName] = useState('No Name')

  useEffect(() => {
    ExampleRequestService.getUserInfo()
      .then(res => {
        const { login } = res.data

        setName(login)
      })
      .catch(err => {
        console.error('Error on Request', err)
      })
  }, [name])

  return (
    <div>
      <span className={styles.text}>{name}</span>
    </div>
  )
}

export default ExampleRequestComponent
