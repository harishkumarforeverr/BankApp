const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';
export const TYPES = {
  DEPOSIT,
  WITHDRAW
};
export function withdraw(amount, details) {
  return { type: WITHDRAW, amount, details };
}
export function deposit(amount, details) {
  return { type: DEPOSIT, amount, details };
}
