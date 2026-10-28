from cc import comps
def write(name,w,h,px,lab,keep):
    rb=(w+7)//8; b=bytearray(rb*h)
    for i in range(w*h):
        if px[i] and lab[i] in keep:
            y,x=divmod(i,w); b[y*rb+(x>>3)]|=128>>(x&7)
    open(name,'wb').write(b'P4\n%d %d\n'%(w,h)+bytes(b))
w,h,px,lab,out=comps('marker-word.pbm')
write('marker-A.pbm',w,h,px,lab,{o[0] for o in out if o[6]<720 and o[0]!=1})
write('marker-star.pbm',w,h,px,lab,{o[0] for o in out if o[0]!=1 and o[6]>1350})
w,h,px,lab,out=comps('brush-adk-word.pbm')
write('brushadk-A.pbm',w,h,px,lab,{o[0] for o in out if o[6]<780 and o[0] not in (2,3)})
write('brushadk-star.pbm',w,h,px,lab,{o[0] for o in out if o[0] not in (1,2,3) and o[6]>1460})
