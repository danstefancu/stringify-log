# stringify-log

Stringify as JSON in order to log: objects, arrays, errors.

## Usage

typescript:

```
import {stringify} from "stringify-log";

let str = stringify(new TypeError('hehe'));

// {"message": "hehe"}
```