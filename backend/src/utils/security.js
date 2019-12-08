// Dependencies
import crypto from 'crypto'

// Confguration
import { $security } from '../../config'

export function encrypt(str) {
    return crypto
    .createHash('sha1')
    .update(`${$security().secetKey}${str.toString()}`)
    .digest('hex')
}