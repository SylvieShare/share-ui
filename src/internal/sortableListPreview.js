export function sortableListPreview(items,{getKey,sourceItem,removeSource,insertAt}) {
  if(!sourceItem || (!removeSource && insertAt == null))return items
  const key=getKey(sourceItem),result=items.filter(item=>getKey(item)!==key)
  if(insertAt == null)return result
  const index=Math.max(0,Math.min(insertAt,result.length))
  return [...result.slice(0,index),sourceItem,...result.slice(index)]
}
