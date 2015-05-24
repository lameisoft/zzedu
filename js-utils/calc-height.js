function setParentIframeHeight(doc,id){
	alert("Here");
	var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
	var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
	var height  = Math.max(cHeight, sHeight)
	parent.document.getElementById(id).style.height=height+"px";
}
