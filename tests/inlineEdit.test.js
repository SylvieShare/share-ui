import { createRenderer, h, nextTick } from 'vue'
import * as Vue from 'vue'
import { describe, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { parse, compileScript } from '@vue/compiler-sfc'
import { compile } from '@vue/compiler-dom'
import InlineEdit from '../src/components/InlineEdit.vue'
const { descriptor } = parse(readFileSync(new URL('../src/components/InlineEdit.vue', import.meta.url), 'utf8'))
const script = compileScript(descriptor, { id: 'inline' })
InlineEdit.render = new Function('Vue', compile(descriptor.template.content, { mode: 'function', prefixIdentifiers: true, bindingMetadata: script.bindings }).code)(Vue)
const flush = async () => { await nextTick(); await Promise.resolve(); await nextTick() }
function mount(props = {}) {
  const node = (type, text = '') => ({ type, text, props: {}, children: [], parent: null, focus() {} })
  const renderer = createRenderer({
    setScopeId() {},
    createElement: type => node(type), createText: text => node('#text', text), createComment: text => node('#comment', text),
    setText: (el, text) => { el.text = text }, setElementText: (el, text) => { el.text = text; el.children = [] },
    patchProp: (el, key, previous, value) => { el.props[key] = value },
    parentNode: el => el.parent, nextSibling: el => el.parent?.children[el.parent.children.indexOf(el) + 1] || null,
    insert(el, parent, anchor = null) {
      if (el.parent) el.parent.children.splice(el.parent.children.indexOf(el), 1)
      el.parent = parent
      const index = anchor ? parent.children.indexOf(anchor) : -1
      if (index < 0) parent.children.push(el); else parent.children.splice(index, 0, el)
    },
    remove(el) { if (el.parent) el.parent.children.splice(el.parent.children.indexOf(el), 1) },
  })

  const root = node('root'), update = vi.fn()
  const app = renderer.createApp({ render: () => h(InlineEdit, { modelValue: 'Before', label: 'Name', 'onUpdate:modelValue': update, ...props }) })
  app.provide(Vue.ssrContextKey, { modules: new Set() }); app.mount(root)
  function all(test, el = root) { return [...(test(el) ? [el] : []), ...el.children.flatMap(child => all(test, child))] }
  return { all, label: name => all(el => el.props['aria-label'] === name)[0], update, unmount: () => app.unmount() }
}
describe('InlineEdit interactions', () => {
  it('cancels a local draft and preserves value, then saves a retry', async () => {
    const persist = vi.fn().mockResolvedValue(true), form = mount({ persist })
    await form.label('Name').props.onClick(); await flush()
    form.all(el => el.type === 'input')[0].props.onInput({ target: { value: 'Changed' } }); await flush()
    form.label('Cancel').props.onClick(); await flush()
    expect(form.update).not.toHaveBeenCalled(); expect(persist).not.toHaveBeenCalled()
    await form.label('Name').props.onClick(); await flush()
    expect(form.all(el => el.type === 'input')[0].props.value).toBe('Before')
    form.all(el => el.type === 'input')[0].props.onInput({ target: { value: 'Saved' } }); await flush()
    await form.label('Confirm').props.onClick(); await flush()
    expect(persist).toHaveBeenCalledWith('Saved'); expect(form.update).toHaveBeenCalledWith('Saved')
    expect(form.all(el => el.type === 'input')).toHaveLength(0); form.unmount()
  })
  it('keeps rejected drafts open and prevents duplicate submission while pending', async () => {
    let reject
    const persist = vi.fn(() => new Promise((_, fail) => { reject = fail })), form = mount({ persist })
    await form.label('Name').props.onClick(); await flush()
    const pending = form.label('Confirm').props.onClick(); await flush()
    await form.label('Confirm').props.onClick(); expect(persist).toHaveBeenCalledTimes(1)
    reject(new Error('Offline')); await pending; await flush()
    expect(form.all(el => el.props.role === 'alert')[0].text).toBe('Offline')
    expect(form.all(el => el.type === 'input')[0].props.value).toBe('Before'); form.unmount()
  })
  it('preserves numeric enum values and places both actions inside the editor', async () => {
    const form = mount({ modelValue: 1, options: [{ value: 1, label: 'First' }, { value: 2, label: 'Second' }] })
    await form.label('Name').props.onClick(); await flush()
    const select = form.all(el => el.type === 'select')[0]
    expect(form.label('Confirm').parent.parent).toBe(select.parent)
    expect(form.label('Cancel').parent.parent).toBe(select.parent)
    select.props.onChange({ target: { value: '2' } }); await flush()
    await form.label('Confirm').props.onClick(); await flush()
    expect(form.update).toHaveBeenCalledWith(2); form.unmount()
  })
  it('passes changes immediately in a full form', async () => {
    const form = mount({ forceOpen: true })
    form.label('Name').props.onInput({ target: { value: 'Full draft' } }); await flush()
    expect(form.update).toHaveBeenCalledWith('Full draft'); expect(form.label('Confirm')).toBeUndefined(); form.unmount()
  })
})
