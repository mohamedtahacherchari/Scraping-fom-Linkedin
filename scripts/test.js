function buildUI(data){
  chrome.storage.local.get(["len"], data=>{
  document.write(data.len)
  })
}