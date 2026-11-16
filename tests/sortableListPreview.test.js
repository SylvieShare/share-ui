import { expect,it } from 'vitest'
import { sortableListPreview } from '../src/internal/sortableListPreview'
it('moves an existing shared item in the target view without duplicating it',()=>{
  const a={id:'a'},b={id:'b'},c={id:'c'},items=[a,b,c],getKey=row=>row.id
  expect(sortableListPreview(items,{getKey,sourceItem:b,insertAt:2})).toEqual([a,c,b])
  expect(sortableListPreview(items,{getKey,sourceItem:b,removeSource:true})).toEqual([a,c])
  expect(sortableListPreview(items,{getKey,sourceItem:b})).toBe(items)
  expect(items).toEqual([a,b,c])
})
