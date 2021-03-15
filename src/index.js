module.exports = function check(str, bracketsConfig) {
  let yes = 0;
  let bracketsConfigString = "";
  for(let i = 0; i < bracketsConfig.length; i++){
      bracketsConfigString += bracketsConfig[i][0];
      bracketsConfigString += bracketsConfig[i][1];
  }
  str +=bracketsConfigString;
  let strparam  = str.split("");
  let i = 0;
  for(let y = 0;y < strparam.length;y++){
      if(strparam[y] === "(" && strparam[y+1] === ")"){
          strparam.splice(y,2);
          y = -1;
      }
      else if(strparam[y] === "[" && strparam[y+1] === "]"){
          strparam.splice(y,2);
          y = -1;
      }
      else if(strparam[y] === "{" && strparam[y+1] === "}"){
          strparam.splice(y,2);
          y = -1;
      }
      else if(strparam[y] === "|" && strparam[y+1] === "|"){
          strparam.splice(y,2);
          y = -1;
      }
  }
  if(strparam[0] === undefined)
  return true;
  return false;
}
