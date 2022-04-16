import React from 'react';
import styles from './Card.module.css';

const Card = ({ id, name, age, address, phone, type, deleteFunc }) => {
  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundColor: type === 'girl' ? 'pink' : 'green' }}
    >
      <div>or the another phone inconnexion the another phone inconnexionme:{name}</div>
      <div>Age: {age}</div>
      <div>Adress: {address}</div>
      <div>Phone: {phone}</div>
      <button
        className={styles.deleteBtn}
        onClick={(event) => deleteFunc(event, id)}
      >
        x
      </button>
    </div>
  );
};

export default Card;
