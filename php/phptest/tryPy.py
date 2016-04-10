import re
'''definitions = [
   ['name' => 'Serial Number', 'length' => 16, 'type' => 'int'],
    ['name' => 'Language', 'length' => 3, 'type' => 'string'],
    ['name' => 'Business Name', 'length' => 32, 'type' => 'string'],
    ['name' => 'Business Code', 'length' => 8, 'type' => 'string'],
    ['name' => 'Authorization Code', 'length' => 8, 'type' => 'string'],
    ['name' => 'Timestamp', 'length' => 20, 'type' => 'timestamp'],
]'''
fhand = open('data.txt')
for line in fhand:
    print line.strip()
