import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.scss'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
      <Affair // should work
        key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
        affair={a}
        deleteAffairCallback={props.deleteAffairCallback}
      />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')


    return (
      <div>

          {mappedAffairs}

          <button onClick={setAll} className={styles.priorityButton}>All</button>
          <button onClick={setHigh} className={styles.priorityButton}>High</button>
          <button onClick={setMiddle} className={styles.priorityButton}>Middle</button>
          <button onClick={setLow} className={styles.priorityButton}>Low</button>
      </div>
    )
}

export default Affairs
