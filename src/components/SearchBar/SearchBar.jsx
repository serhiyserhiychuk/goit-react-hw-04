import css from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";

export default function SearchBar(onSubmit) {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit" onSubmit={onSubmit}>
          <GoSearch size={24} />
        </button>
      </form>
    </header>
  );
}
