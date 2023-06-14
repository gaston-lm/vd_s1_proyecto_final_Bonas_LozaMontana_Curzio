import json

with open("canciones.json","r") as file:
    data=json.load(file)    

playlist=data['canciones']


for canciones in playlist:
    if canciones["valence"]<=0.3 and canciones["energy"]<=0.3:
        canciones["categoria"]=11
    if canciones["valence"]<=0.3 and 0.3<canciones["energy"]<=0.6:
        canciones["categoria"]=12
    if canciones["valence"]<=0.3 and 0.6<canciones["energy"]<=1:
        canciones["categoria"]=13
    
    if 0.3<canciones["valence"]<=0.6 and canciones["energy"]<=0.3:
        canciones["categoria"]=21
    if 0.3<canciones["valence"]<=0.6 and 0.3<canciones["energy"]<=0.6:
        canciones["categoria"]=22
    if 0.3<canciones["valence"]<=0.6 and 0.6<canciones["energy"]<=1:
        canciones["categoria"]=23

    if 0.6<canciones["valence"]<=1 and canciones["energy"]<=0.3:
        canciones["categoria"]=31
    if 0.6<canciones["valence"]<=1 and 0.3<canciones["energy"]<=0.6:
        canciones["categoria"]=32
    if 0.6<canciones["valence"]<=1 and 0.6<canciones["energy"]<=1:
        canciones["categoria"]=33

    

with open("/home/linux/Documents/VD/Final/vd_s1_proyecto_final_Bonas_LozaMontana_Curzio/canciones/canciones.json","w") as file:
    json.dump(data,file)    