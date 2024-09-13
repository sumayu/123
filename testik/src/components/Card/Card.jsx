import MyComponent from "../../pages/page1/pages1-6/click";
import Styles from "./Card.module.css";
import { info } from './info';

export const Card = ({ setinfo }) => {
    const { title, image } = info(setinfo); // Получаем текст и изображение

    return (
        <article className={Styles["card"]}>
            {image && <img src={image} alt={title} className={Styles["card__image"]} />}
            <div className={Styles["card__content-block"]}>
                {title && <h3 className={Styles["card__title"]}>{title}</h3>}
                <p className={Styles["card__description"]}></p>
                <div className={Styles["card__info-container"]}>
                    <p className={Styles["freak"]}><MyComponent/></p>
                    <p className={Styles["vodka"]}></p>
                </div>
            </div>
        </article>
    );
};
