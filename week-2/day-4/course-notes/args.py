def full_info(*info):
    out = ''
    for data in info:
        out += data + '\n'
    return out

print(full_info('lea','30','TLV','israel') ) 
