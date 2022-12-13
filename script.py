import urllib.request
import re

req = urllib.request.Request(
    url="https://easylist.to/easylist/easylist.txt",
    headers={'User-Agent': 'Mozilla/5.0'}
)
file = urllib.request.urlopen(req)
output_file = open('output_file.txt', 'w')
output_file.write("url_list = [" + "\n")
for line in file:
    decoded_line = str(line.decode("utf-8"))
    if '||' == decoded_line[0:2] and '^' in decoded_line and '*' not in decoded_line:
        last_index = decoded_line.index('^')
        url = '*://*.' + decoded_line[2:last_index].strip() + '/*'
        if re.search('[a-zA-Z]', url) is not None:
            output_file.write("\t" + "'" + url + "'," + "\n")
output_file.write("]")
