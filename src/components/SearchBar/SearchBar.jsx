import css from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function SearchBar({ onSearch }) {
  return (
    <>
      <Toaster />
      <header className={css.header}>
        <form
          className={css.form}
          onSubmit={(e) => {
            e.preventDefault();
            if (e.target.elements.query.value.trim() === "") {
              ErrorMessage("Enter text to search for images!");
              return;
            } else {
              onSearch(e.target.elements.query.value);
            }
          }}
        >
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            <GoSearch size={24} />
          </button>
        </form>
      </header>
    </>
  );
}
