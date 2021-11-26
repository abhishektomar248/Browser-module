let fontFamily=cellObject.fontFamily;
fontFamilyInput.value=fontFamily;
let textColorInput=cellObject.color;
textColorHInput.value=textColorInput;
let backgroundColor=cellObject.backgroundColor;
backgroundHInput.value=backgroundColor;




tobeChangedCell.style.fontFamily = fontFamily;
let { rid, cid } = getRidCidFromAddress(address);
let cellObject = db[rid][cid];
cellObject.fontFamily = fontFamily;
