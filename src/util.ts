
// It's literally just Object.keys, but this is necessary since it doesn't have proper typing 
export const objectKeys = <T extends {[key: string]: any}>(obj: T): Array<keyof T> => {
    return Object.keys(obj)
}