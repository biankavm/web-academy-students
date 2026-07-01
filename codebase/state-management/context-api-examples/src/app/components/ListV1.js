import { useContext } from "react";
import { ThemeContext } from "../pagev1";

export default function List() {
  const themeConfig = useContext(ThemeContext);

  return (
    <div
      style={{
        color: themeConfig.textColor,
        backgroundColor: themeConfig.backgroundColor,
        border: "5px orange solid",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h1>Lista</h1>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}
