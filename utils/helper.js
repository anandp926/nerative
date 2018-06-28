/**
 * Created by rozer on 6/26/2018.
 */
export function lowerCase (str = '') {
    return typeof str !== 'string'
        ? ''
        : str[0].toLowerCase() + str.slice(1)
}

export function upperCase (str = '') {
    return typeof str !== 'string'
        ? ''
        : str[0].toUpperCase() + str.slice(1)
}
