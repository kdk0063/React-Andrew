def cols(src):
    with open(src,'rb') as f:
        f.readline(); w,h=map(int,f.readline().split()); d=f.read()
    rb=(w+7)//8; c=[0]*w
    for y in range(h):
        row=d[y*rb:(y+1)*rb]
        for x in range(w):
            if row[x>>3]&(128>>(x&7)): c[x]+=1
    bands=[];s=-1
    for x,n in enumerate(c+[0]):
        if n>0 and s<0:s=x
        if n==0 and s>=0:bands.append((s,x));s=-1
    print(src,w,h,[b for b in bands if b[1]-b[0]>4])
for s in ['marker-word.pbm','brush-adk-word.pbm','star-a.pbm','brush-a.pbm']: cols(s)
