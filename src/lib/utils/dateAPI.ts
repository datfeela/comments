import { dateType } from "./../../components/StoreProvider/StoreProvider-types";
export const getDate = () => {
    const now = new Date();

    const date: dateType = {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate(),
        hour: now.getHours(),
        minutes: now.getMinutes(),
    };

    return date;
};
