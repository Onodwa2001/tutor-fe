export default function filterEmptyProperties<T extends Record<string, any>>(obj: T): T {
    const filteredObj: Partial<T> = {};
    for (const [key, value] of Object.entries(obj)) {
        if (value !== null && value !== undefined && value !== '') {
            filteredObj[key as keyof T] = value;
        }
    }
    return filteredObj as T;
}