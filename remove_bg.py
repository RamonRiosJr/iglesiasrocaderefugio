from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # Check if the pixel is white or light gray (the checkerboard pattern)
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_background('Iglesias Roca de Refugio/Logo Iglesia Roca De Refugio Halo.jpg', 'public/assets/images/logo-transparent.png')
