
// It's literally just Object.keys, but this is necessary since it doesn't have proper typing 
export const objectKeys = <T extends {[key: string]: any}>(obj: T): Array<keyof T> => {
    return Object.keys(obj)
}

//Copied from idle-game-creation-library
export const createObjectFromKeys = <T extends {[key:string]: any}, R>(keys: T, initilizer: (_:keyof T) => R): Record<keyof T, R> => 
    Object.keys(keys)
    .reduce((acc:any, cur:string) => ({...acc, [cur]: initilizer(cur)}), {})