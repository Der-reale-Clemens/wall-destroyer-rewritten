// It's literally just Object.keys, but this is necessary since it doesn't have proper typing 
export const objectKeys = <T extends {}>(obj: T): Array<keyof T> => 
    Object.keys(obj) as Array<keyof T>

export const objectEntries = <
    T extends Record<PropertyKey, unknown>,
    K extends keyof T,
    V extends T[K]
  >(o: T) => 
    Object.entries(o) as [K, V][];

export const createObjectFromKeys = <T extends {[key:string]: any}, R>(keys: T, initilizer: (_:keyof T) => R): Record<keyof T, R> => 
    Object.keys(keys)
    .reduce((acc:any, key:string) => ({...acc, [key]: initilizer(key)}), {})

export const anyMatch = <T>(array:Array<T>, predicate: (_:T) => boolean): boolean => 
    array.reduce((acc: boolean, cur:T) => acc ? true : predicate(cur), false)

export const everyMatch = <T>(array: Array<T>, predicate: (_:T) => boolean): boolean =>
    array.reduce((acc: boolean, cur: T) => acc ? predicate(cur) : false, true)

export const sum = (array: Array<number>) => 
    array.reduce((acc, cur) => acc + cur, 0)

/**
 * Applies a mapping function to each value of an object and returns a new object with the same keys but mapped values.
 *
 * @template O - The type of the input object. The keys are strings and values are of type T.
 * @template T - The type of the values in the input object.
 * @template R - The type of the values in the resulting object after applying the map function.
 * 
 * @param {O} obj - The input object to be mapped.
 * @param {(value: T) => R} map - A mapping function that takes a value of type T and returns a value of type R.
 * 
 * @returns {Record<keyof O, R>} - A new object with the same keys as the input object but with values mapped using the provided function.
 * 
 * @example
 * const input = { a: 1, b: 2, c: 3 };
 * const result = objectMap(input, x => x * 2);
 * console.log(result); // { a: 2, b: 4, c: 6 }
 */
export const objectMap = <O extends {[key: string]: T}, T, R>(obj: O, map: (_:T) => R) 
    : Record<keyof O, R> => {
    const temp: any = {}
    objectKeys(obj)
        .forEach(key => temp[key] = map(obj[key]))
    return temp
}
   


/**
 * Computes the mathematical set difference A-B
 * @param setA 
 * @param setB 
 */
export const setDifference = <A>(setA: Array<A>, setB: Array<A>) => 
    setA.filter(e1 => everyMatch(setB, e2 => e1 !== e2))