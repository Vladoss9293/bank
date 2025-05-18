export function getCurrentTime(options?: Intl.DateTimeFormatOptions, locale = 'ru-RU'): string {
    const now = new Date();
    return new Intl.DateTimeFormat(locale, options).format(now);
}