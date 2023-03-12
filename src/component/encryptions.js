import Cryptojs from 'crypto-js'

export default class Encryptions{
    
    encryption(text){
        var iv   = Cryptojs.enc.Hex.parse("00000000000000000000000000000000");
        return Cryptojs.AES.encrypt(text,"secret",{iv:iv});
    }
    decryption(text){
        var iv   = Cryptojs.enc.Hex.parse("00000000000000000000000000000000");
        return Cryptojs.AES.decrypt(text,"secret",{iv:iv}).toString(Cryptojs.enc.Utf8);
    }
}