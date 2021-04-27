import React from 'react'
import {MessageType} from "./HW1";
import styles from "./Message.module.scss"



function Message(props:MessageType) {
    return (
        <div className={styles.MessageComponent_wrapper}>
            <div className={styles.avatar}><img src={props.avatar} alt=""/></div>
            <div className={styles.message_wrapper}>
                <div className={styles.userName}>{props.name}</div>
                <div className={styles.messageText}>{props.message}</div>
                <div className={styles.messageTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
