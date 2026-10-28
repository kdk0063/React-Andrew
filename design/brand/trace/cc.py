import sys
from collections import deque
def load(src):
    with open(src,'rb') as f:
        f.readline(); w,h=map(int,f.readline().split()); d=f.read()
    rb=(w+7)//8
    px=bytearray(w*h)
    for y in range(h):
        for x in range(w):
            if d[y*rb+(x>>3)]&(128>>(x&7)): px[y*w+x]=1
    return w,h,px
def comps(src):
    w,h,px=load(src); lab=[0]*(w*h); out=[]; n=0
    for i in range(w*h):
        if px[i] and not lab[i]:
            n+=1; q=deque([i]); lab[i]=n; xs=[];ys=[];cnt=0;x0=y0=10**9;x1=y1=0;sx=0
            while q:
                j=q.popleft(); y,x=divmod(j,w); cnt+=1; sx+=x
                x0=min(x0,x);x1=max(x1,x);y0=min(y0,y);y1=max(y1,y)
                for k in (j-1,j+1,j-w,j+w):
                    if 0<=k<w*h and px[k] and not lab[k] and abs((k%w)-x)<=1: lab[k]=n; q.append(k)
            out.append((n,cnt,x0,y0,x1,y1,sx//cnt))
    return w,h,px,lab,out
if __name__=='__main__':
    for s in sys.argv[1:]:
        w,h,px,lab,out=comps(s)
        print(s,[o for o in out if o[1]>200])
