import React from "react";
import s from "./Header.module.css";

export const Header = ({ inputValue, setInput, selectValue, setSelect }) => {
  return (
    <>
      <header className={s.header}>
        <h1 className={s.header__title}>Harry Potter</h1>
        <h2 className={s.header__subtitle}>
          View all characters from the Harry Potter universe
        </h2>
        {/* ФОРМА С ИНПУТОМ И ВЫБОРОМ   */}
        <form className={s.header__form}>
          {/* INPUT   */}
          <label htmlFor="input">
            <span>Name</span>
            <input
              onChange={(ev) => setInput(ev.target.value)}
              className={s.form__input}
              value={inputValue}
              id="input"
              placeholder="Hermione"
            />
          </label>
          {/* SELECT   */}
          <label htmlFor="select">
            <span>School</span>
            <select
              onChange={(ev) => setSelect(ev.target.value)}
              className={`${s.form__input} ${s.select}`}
              // value={selectValue}
              id="select"
            >
              <option value="">Choose one</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </label>
        </form>
      </header>
    </>
  );
};
