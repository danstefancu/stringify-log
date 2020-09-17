function errorReplacer(key: string, value: { [key: string]: any }) {
    if (value instanceof Error) {
        let error: { [key: string]: any } = {};
        // just for tsc sake
        value = value as { [key: string]: any };

        Object.getOwnPropertyNames(value).forEach(function (key: string) {
            error[key] = value[key];
        });

        return error;
    }

    return value;
}

export function stringify(thing: any, excludeStack: boolean = false) {
    let string;

    switch (typeof thing) {
        case "object":
            if (Array.isArray(thing)) {
                string = `${thing.length}:${JSON.stringify(thing)}`;
            } else if (thing instanceof Error) {
                if (excludeStack)
                    delete thing.stack;
                string = JSON.stringify(thing, errorReplacer);
            } else {
                string = JSON.stringify(thing);
            }
            break;
        case "string":
            string = thing;
            break;
        default:
            string = JSON.stringify(thing);
            break;
    }

    return string;
}
