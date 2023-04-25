def start():
    while True:    
        encrypt_or_decrypt = input('Do you want to encrypt or decrypt some text?(e/d) ')
        if encrypt_or_decrypt == 'e':
            encrypt_function()
            break
        elif encrypt_or_decrypt == 'd':
            decrypt_function()
            break
        else:
            print('Please input a valid answer') 
            
shift = 3
def encrypt_function():
    user_text = input('Please input some text to encrypt: ')
    encrypted_text = caesar_cipher(user_text, shift)
    print(encrypted_text)

def decrypt_function():
    user_text = input('Please input some text to decrypt: ')
    decrypted_text = caesar_cipher_d(user_text, shift)
    print(decrypted_text)

def caesar_cipher(text, shift):
    result = ''
    for char in text:
        if char.isalpha():
            new_code = ord(char) + shift
            if char.isupper():
                if new_code > ord('Z'):
                    new_code -= 26
                elif new_code < ord('A'):
                    new_code += 26
            else:
                if new_code > ord('z'):
                    new_code -= 26
                elif new_code < ord('a'):
                    new_code += 26
            result += chr(new_code)
        else:
            result += char
    return result
    
def caesar_cipher_d(text, shift):
    result = ''
    for char in text:
        if char.isalpha():
            new_code = ord(char) - shift
            if char.isupper():
                if new_code < ord('A'):
                    new_code += 26
            else:
                if new_code < ord('a'):
                    new_code += 26
            result += chr(new_code)
        else:
            result += char
    return result

start()