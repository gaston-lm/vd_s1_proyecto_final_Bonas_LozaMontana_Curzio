import json

with open("canciones.json","r") as file:
    data=json.load(file)    

playlist=data['canciones']


for canciones in playlist:
    if canciones["valence"]<=0.3 and canciones["energy"]<=0.3:
        canciones["blob"] = "11.svg"
    if canciones["valence"]<=0.3 and 0.3<canciones["energy"]<=0.6:
        canciones["blob"]="12.svg"
    if canciones["valence"]<=0.3 and 0.6<canciones["energy"]<=1:
        canciones["blob"]="13.svg"
    
    if 0.3<canciones["valence"]<=0.6 and canciones["energy"]<=0.3:
        canciones["blob"]="21.svg"
    if 0.3<canciones["valence"]<=0.6 and 0.3<canciones["energy"]<=0.6:
        canciones["blob"]="22.svg"
    if 0.3<canciones["valence"]<=0.6 and 0.6<canciones["energy"]<=1:
        canciones["blob"]="23.svg"

    if 0.6<canciones["valence"]<=1 and canciones["energy"]<=0.3:
        canciones["blob"]="31.svg"
    if 0.6<canciones["valence"]<=1 and 0.3<canciones["energy"]<=0.6:
        canciones["blob"]="32.svg"
    if 0.6<canciones["valence"]<=1 and 0.6<canciones["energy"]<=1:
        canciones["blob"]="33.svg"

    

with open("canciones.json","w") as file:
    json.dump(data,file)    