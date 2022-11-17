
// rules = {
//     name: [
//         { required: true }
//     ],
//     email: [
//         { required: true },
//         { regex: 'email' }
//     ],
//     phone: [
//         { required: true },
//         { regex: 'phone' }
//     ]
// }


// forms = {
//     name: 'Dang Thuyen Vuong',
//     email: 'dangthuyenvuong@gmail.com',
//     phone: '0949816596'
// }

// errorObj = {
//     name: 'Please fill in this field'
// }


const REGEXP = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
}

const ERROR_MESSAGE = {
    required: 'Please fill in this field',
    regexp: 'Field not like format'
}

/**
 * 
 * @param {*} rules
 * @param {*} form 
 * @returns plan error object
 */
export const validate = (rules, forms) => {
    const errorObject = {}
    for (let name in rules) {
        for (let rule of rules[name]) {
            if (rule.required) {
                if (!forms[name]?.trim()) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.required
                    break;
                }
            }


            if (rule.regexp && forms[name]) {
                let regexp = rule.regexp
                if (regexp in REGEXP) {
                    regexp = REGEXP[regexp]
                } else if (!(regexp instanceof RegExp)) {
                    regexp = new RegExp()
                }

                console.log(regexp);
                if (!regexp.test(forms[name])) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.regexp
                }
            }
        }
    }

    return errorObject
}

export const required = (message) => ({
    required: true,
    message
})

export const regexp = (pattern, message) => ({
    regexp: pattern,
    message
})