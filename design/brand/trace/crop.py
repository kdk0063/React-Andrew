import sys
def crop(src,dst,y0,y1):
    with open(src,'rb') as f:
        assert f.readline().strip()==b'P4'
        w,h=map(int,f.readline().split()); data=f.read()
    rb=(w+7)//8
    out=data[y0*rb:y1*rb]
    open(dst,'wb').write(b'P4\n%d %d\n'%(w,y1-y0)+out)
crop('marker.pbm','marker-word.pbm',600,1260)
crop('brush-adk.pbm','brush-adk-word.pbm',640,1270)
