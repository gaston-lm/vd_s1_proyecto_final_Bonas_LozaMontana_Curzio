import json

with open("/home/linux/Documents/VD/Final/vd_s1_proyecto_final_Bonas_LozaMontana_Curzio/data/canciones.json","r") as file:
    data=json.load(file)    

playlist=data['canciones']


for canciones in playlist:
    if canciones["valence"]<=0.3 and canciones["energy"]<=0.3:
        canciones["blob"] = "medias/figuras/11.svg"
    if canciones["valence"]<=0.3 and 0.3<canciones["energy"]<=0.6:
        canciones["blob"]="medias/figuras/12.svg"
    if canciones["valence"]<=0.3 and 0.6<canciones["energy"]<=1:
        canciones["blob"]="medias/figuras/13.svg"
    
    if 0.3<canciones["valence"]<=0.6 and canciones["energy"]<=0.3:
        canciones["blob"]="medias/figuras/21.svg"
    if 0.3<canciones["valence"]<=0.6 and 0.3<canciones["energy"]<=0.6:
        canciones["blob"]="medias/figuras/22.svg"
    if 0.3<canciones["valence"]<=0.6 and 0.6<canciones["energy"]<=1:
        canciones["blob"]="medias/figuras/23.svg"

    if 0.6<canciones["valence"]<=1 and canciones["energy"]<=0.3:
        canciones["blob"]="medias/figuras/31.svg"
    if 0.6<canciones["valence"]<=1 and 0.3<canciones["energy"]<=0.6:
        canciones["blob"]="medias/figuras/32.svg"
    if 0.6<canciones["valence"]<=1 and 0.6<canciones["energy"]<=1:
        canciones["blob"]="medias/figuras/33.svg"

    

with open("pruebas.json","w") as file:
    json.dump(data,file)    