function flip(){var result=flipString(document.hellcat.original.value);document.hellcat.changed.value=result;}
function flipString(aString){var last=aString.length-1;var result=new Array(aString.length)
for(var i=last;i>=0;--i){var c=aString.charAt(i)
var r=flipTable[c]
result[i]=r}
return result.join('')}
var flipTable={'ơ':'͇͇O͇͇','Ơ':'͇͇O͇͇','ó':'͇͇O͇͇','Ó':'͇͇O͇͇','ò':'͇͇O͇͇','Ò':'͇͇O͇͇','ọ':'͇͇O͇͇','Ọ':'͇͇O͇͇','ỏ':'͇͇O͇͇','Ỏ':'͇͇O͇͇','õ':'͇͇O͇͇','Õ':'͇͇O͇͇','ớ':'͇͇O͇͇','Ớ':'͇͇O͇͇','ờ':'͇͇O͇͇','Ờ':'͇͇O͇͇','ợ':'͇͇O͇͇','Ợ':'͇͇O͇͇','ở':'͇͇O͇͇','Ở':'͇͇O͇͇','ỡ':'͇͇O͇͇','Ỡ':'͇͇O͇͇','ô':'͇͇O͇͇','Ô':'͇͇O͇͇','ố':'͇͇O͇͇','Ố':'͇͇O͇͇','ồ':'͇͇O͇͇','Ồ':'͇͇O͇͇','ộ':'͇͇O͇͇','Ộ':'͇͇O͇͇','ổ':'͇͇O͇͇','Ổ':'͇͇O͇͇','ỗ':'͇͇O͇͇','Ỗ':'͇͇O͇͇','ú':'͇͇U͇͇','Ú':'͇͇U͇͇','ù':'͇͇U͇͇','Ù':'͇͇U͇͇','ụ':'͇͇U͇͇','Ụ':'͇͇U͇͇','ủ':'͇͇U͇͇','Ủ':'͇͇U͇͇','ũ':'͇͇U͇͇','Ũ':'͇͇U͇͇','ư':'͇͇U͇͇','Ư':'͇͇U͇͇','ứ':'͇͇U͇͇','Ứ':'͇͇U͇͇','ừ':'͇͇U͇͇','Ừ':'͇͇U͇͇','ự':'͇͇U͇͇','Ự':'͇͇U͇͇','ử':'͇͇U͇͇','Ử':'͇͇U͇͇','ữ':'͇͇U͇͇','Ữ':'͇͇U͇͇','â':'͇͇A͇͇','Â':'͇͇A͇͇','á':'͇͇A͇͇','Á':'͇͇A͇͇','à':'͇͇A͇͇','À':'͇͇A͇͇','ạ':'͇͇A͇͇','Ạ':'͇͇A͇͇','ả':'͇͇A͇͇','Ả':'͇͇A͇͇','ã':'͇͇A͇͇','Ã':'͇͇A͇͇','ấ':'͇͇A͇͇','Ấ':'͇͇A͇͇','ầ':'͇͇A͇͇','Ầ':'͇͇A͇͇','ậ':'͇͇A͇͇','Ậ':'͇͇A͇͇','ẩ':'͇͇A͇͇','Ẩ':'͇͇A͇͇','ẫ':'͇͇A͇͇','Ẫ':'͇͇A͇͇','ă':'͇͇A͇͇','Ă':'͇͇A͇͇','ắ':'͇͇A͇͇','Ắ':'͇͇A͇͇','ằ':'͇͇A͇͇','Ằ':'͇͇A͇͇','ặ':'͇͇A͇͇','Ặ':'͇͇A͇͇','ẳ':'͇͇A͇͇','Ẳ':'͇͇A͇͇','ẵ':'͇͇A͇͇','Ẵ':'͇͇A͇͇','ế':'͇͇E͇͇','Ế':'͇͇E͇͇','ề':'͇͇E͇͇','Ề':'͇͇E͇͇','ệ':'͇͇E͇͇','Ệ':'͇͇E͇͇','ể':'͇͇E͇͇','Ể':'͇͇E͇͇','ễ':'͇͇E͇͇','Ễ':'͇͇E͇͇','é':'͇͇E͇͇','É':'͇͇E͇͇','è':'͇͇E͇͇','È':'͇͇E͇͇','ẹ':'͇͇E͇͇','Ẹ':'͇͇E͇͇','ẻ':'͇͇E͇͇','Ẻ':'͇͇E͇͇','ẽ':'͇͇E͇͇','Ẽ':'͇͇E͇͇','ê':'͇͇E͇͇','Ê':'͇͇E͇͇','í':'͇͇I͇͇','Í':'͇͇I͇͇','ì':'͇͇I͇͇','Ì':'͇͇I͇͇','ỉ':'͇͇I͇͇','Ỉ':'͇͇I͇͇','ĩ':'͇͇I͇͇','Ĩ':'͇͇I͇͇','ị':'͇͇I͇͇','Ị':'͇͇I͇͇','ý':'͇͇I͇͇','Ý':'͇͇I͇͇','ỳ':'͇͇I͇͇','Ỳ':'͇͇I͇͇','ỷ':'͇͇I͇͇','Ỷ':'͇͇I͇͇','ỹ':'͇͇I͇͇','Ỹ':'͇͇I͇͇','ỵ':'͇͇I͇͇','Ỵ':'͇͇I͇͇','đ':'͇͇D͇͇','Đ':'͇͇D͇͇',1:'͇͇1͇͇',2:'͇͇2͇͇',3:'͇͇3͇͇',4:'͇͇4͇͇',5:'͇͇5͇͇',6:'͇͇6͇͇',7:'͇͇7͇͇',8:'͇͇8͇͇',9:'͇͇9͇͇',0:'͇͇0͇͇',a:'͇͇A͇͇',b:'͇͇B͇͇',c:'͇͇C͇͇',d:'͇͇D͇͇',e:'͇͇E͇͇',f:'͇͇F͇͇',g:'͇͇G͇͇',h:'͇͇H͇͇',i:'͇͇I͇͇',j:'͇͇A͇͇',k:'͇͇K͇͇',o:'͇͇O͇͇',m:'͇͇M͇͇',n:'͇͇N͇͇',q:'͇͇Q͇͇',r:'͇͇R͇͇',i:'͇͇I͇͇',p:'͇͇P͇͇',l:'͇͇L͇͇',z:'͇͇Z͇͇',x:'͇͇X͇͇',u:'͇͇U͇͇',t:'͇͇T͇͇',s:'͇͇S͇͇',v:'͇͇V͇͇',w:'͇͇W͇͇',y:'͇͇Y͇͇',A:'͇͇A͇͇',B:'͇͇B͇͇',C:'͇͇C͇͇',D:'͇͇D͇͇',E:'͇͇E͇͇',F:'͇͇F͇͇',G:'͇͇G͇͇',H:'͇͇H͇͇',I:'͇͇I͇͇',J:'͇͇J͇͇',K:'͇͇K͇͇',O:'͇͇O͇͇',M:'͇͇M͇͇',N:'͇͇N͇͇',Q:'͇͇Q͇͇',R:'͇͇R͇͇',I:'͇͇I͇͇',P:'͇͇P͇͇',L:'͇͇L͇͇',Z:'͇͇Z͇͇',X:'͇͇X͇͇',U:'͇͇U͇͇',T:'͇͇T͇͇',S:'͇͇S͇͇',V:'͇͇V͇͇',W:'͇͇W͇͇',Y:'͇͇Y͇͇',' ':' ','.':'͇͇:͇͇','[':'͇͇[͇͇','(':'͇͇(͇͇','{':'͇͇{͇͇','?':'͇͇?͇͇','!':'͇͇!͇͇',"\'":'͇͇\'͇͇','<':'͇͇<͇͇','_':'͇͇_͇͇',';':'͇͇;͇͇','\u203F':'͇͇\u203F͇͇','\u2045':'͇͇\u2045͇͇','\u2234':'͇͇\u2234͇͇','\r':'͇͇\r͇͇'}
for(i in flipTable){flipTable[flipTable[i]]=i}
function about() { alert("Copy Nhớ Ghi Tác Giả HellCat\r\nCông Cụ Viết Chữ Gạch Dưới\r\nPhiên bản 6.9\r\nTác giả: HellCat\r\nTrang chủ:https://www.facebook.com/hellcat.info")};