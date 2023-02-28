import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <h1 className={s.header__title}>Harry Potter</h1>
          <h2 className={s.header__subtitle}>
            View all characters from the Harry Potter universe
          </h2>
          {/* ФОРМА С ИНПУТОМ И ВЫБОРОМ   */}
          <form className={s.header__form}>
            {/* INPUT   */}
            <label for="input">
              <span>Name</span>
              <input
                className={s.form__input}
                id="input"
                placeholder="Hermione"
              />
            </label>
            {/* SELECT   */}
            <label for="select">
              <span>School</span>
              <select className={`${s.form__input} ${s.select}`} id="select">
                <option value="">Choose one</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
              </select>
            </label>
          </form>
        </div>
      </header>
    </>
  );
};