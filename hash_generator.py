import hashlib

password = input('Password:\n')
algorithm = input('Hash algorithm (md5,sha1,sha512):\n')

if algorithm == "md5": 
    hash = hashlib.md5(password.encode('utf-8')).hexdigest()

if algorithm == "sha1": 
    hash = hashlib.sha1(password.encode('utf-8')).hexdigest()

if algorithm == "sha512": 
    hash = hashlib.sha512(password.encode('utf-8')).hexdigest()

print(hash)