// It's literally just Object.keys, but this is necessary since it doesn't have proper typing 
export const objectKeys = <T>(obj: T): Array<keyof T> => 
    Object.keys(obj) as Array<keyof T>

export const createObjectFromKeys = <T extends {[key:string]: any}, R>(keys: T, initilizer: (_:keyof T) => R): Record<keyof T, R> => 
    Object.keys(keys)
    .reduce((acc:any, cur:string) => ({...acc, [cur]: initilizer(cur)}), {})

export const anyMatch = <T>(array:Array<T>, predicate: (_:T) => boolean): boolean => 
    array.reduce((acc: boolean, cur:T) => acc ? true : predicate(cur), false)

export const everyMatch = <T>(array: Array<T>, predicate: (_:T) => boolean): boolean =>
    array.reduce((acc: boolean, cur: T) => acc ? predicate(cur) : false, true)

export const sum = (array: Array<number>) => 
    array.reduce((acc, cur) => acc + cur, 0)


/**
 * Computes the mathematical set difference A-B
 * @param setA 
 * @param setB 
 */
export const setDifference = <A>(setA: Array<A>, setB: Array<A>) => 
    setA.filter(e1 => everyMatch(setB, e2 => e1 !== e2))