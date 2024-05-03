/**
 * 숫자를 받아서 세 자리마다 쉼표를 추가한 문자열을 반환합니다.
 *
 * @param {number} number - 쉼표를 추가할 숫자
 * @returns {string} - 쉼표가 추가된 문자열
 */
export function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 문자열에서 쉼표를 제거한 값을 반환합니다.
 *
 * @param {string} str - 쉼표를 제거할 문자열
 * @returns {string} - 쉼표가 제거된 문자열
 */
export function removeCommas(str) {
  return str.replace(/,/g, "");
}
