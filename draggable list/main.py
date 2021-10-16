d,s = input("enter the distance and the speed: ").split()
propdelay=int(d)/int(s)
print(d,s)
lenmsg = int(input("Enter the Length of message: "))
band = int(input("Enter Bandwidth: "))
tradelay=lenmsg/band
noStat = int(input('Enter no.of links from source to destination: '))
qDelay = int(input('Enter Queuing delay: '))
pDelay = int(input('Enter processing delay: '))

total=propdelay+tradelay+pDelay+qDelay;
endTo=noStat*total

print("Propagation delay: ",propdelay)
print("Transmission delay: ",tradelay)
print("Processing delay: ",pDelay)
print("Queuing delay: ",qDelay)
print("Total delay: ",total)
print("End to End delay: ",endTo)
