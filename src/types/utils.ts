export type Maybe<T> = T | null;
export const isExist = <T>(data: Maybe<T>): data is T => {
  return Boolean(data);
};

export enum Status {
  fulfilled,
  pending,
  rejected,
  idle,
}

export type NonEmptyArray<T> = [T, ...T[]];
export const isNonEmptyArray = <T>(arr: T[]): arr is NonEmptyArray<T> =>
  arr.length > 0;
