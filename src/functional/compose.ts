import { Function_ } from './contracts';

export function compose<T, R extends any>(...funcs: Function_[]) {
  return function(source: T): R {
    let carry = source as R;
    for (const func of funcs) {
      carry = func(carry);
    }
    return carry;
  };
}

export function reverseCompose<T>(...funcs: Function_[]) {
  return (source: T) => {
    let carry = source;
    for (const func of funcs.reverse()) {
      carry = func(carry);
    }
    return carry;
  };
}
