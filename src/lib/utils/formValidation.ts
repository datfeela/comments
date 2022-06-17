export function validateEmail(value: string) {
    let error: string | undefined;
    if (!value) {
        error = "Обязательное поле";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Некорректный E-mail адрес";
    }
    return error;
}

export function validateURL(value: string) {
    let error: string | undefined;
    if (!value) {
        error = "Обязательное поле";
    } else if (!/^(https?:\/\/)?([A-Z]+\.)?[A-Z]+\.[A-Z]+\/.+$/i.test(value)) {
        error = 'Некорректный URL-адрес. Введите URL-адрес в формате "https://site.com/..."';
    }
    return error;
}

export function validateText(value: string) {
    let error: string | undefined;
    if (!value) {
        error = "Обязательное поле";
    }
    return error;
}
