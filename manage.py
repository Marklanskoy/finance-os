"""Access codes are for closed-beta users. Never send OpenAI API keys to them."""
import argparse,secrets
from main import connect,digest
p=argparse.ArgumentParser();sp=p.add_subparsers(dest='command',required=True)
a=sp.add_parser('create-user');a.add_argument('--label',default='tester')
r=sp.add_parser('revoke-user');r.add_argument('id')
sp.add_parser('list-users')
a=p.parse_args();c=connect()
if a.command=='create-user':
 uid=secrets.token_hex(12);code=secrets.token_urlsafe(32)
 c.execute('INSERT INTO users(id,label,code_hash) VALUES(?,?,?)',(uid,a.label[:64],digest(code)))
 print('User ID:',uid);print('Personal access code (show once):',code)
 print('Keep it private. This is NOT an OpenAI key. Revoke by user ID.')
elif a.command=='revoke-user':
 c.execute('UPDATE users SET enabled=0 WHERE id=?',(a.id,));c.execute('DELETE FROM sessions WHERE user_id=?',(a.id,));print('Revoked:',a.id)
else:
 for row in c.execute('SELECT id,label,enabled FROM users'):print(*row,sep=' | ')
c.close()
