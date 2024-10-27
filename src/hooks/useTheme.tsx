import { ThemeContext } from "../context/ThemProvider";
import { useContext } from "react";


export function useTheme() {
    const theme = useContext(ThemeContext);

    return theme;
}