import { AtSign, MapPin, Phone } from "iconoir-react";

import styles from "./ContactInfoList.module.css";

const ContactInfoList = (): JSX.Element => {
  return (
    <div className={styles.contactListContainer}>
      <h3 className="heading3">Medios de contacto:</h3>
      <ul>
        <li>
          <MapPin />
          <span className="paragraph">Dirección de las oficinas:</span>
          <p className="paragraph">Calle 125 #25N-75</p>
        </li>
        <li>
          <Phone />
          <span className="paragraph">Teléfonos oficinas:</span>
          <div>
            <p className="paragraph">1. 35465165155461</p>
            <p className="paragraph">2. 35465165155465</p>
          </div>
        </li>
        <li>
          <AtSign />
          <span className="paragraph">Correo electrónico:</span>
          <p className="paragraph">dosecomsel@gmail.com</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfoList;
