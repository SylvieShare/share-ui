import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it, vi } from 'vitest'
import FormNumberInput from '../src/components/form/FormNumberInput.vue'

async function setup(props) {
  const emit = vi.fn()
  let input
  await renderToString(createSSRApp({ setup() {
    input = FormNumberInput.setup({ value: 0, step: 1, ...props }, { emit, expose() {} })
    return () => h('span')
  } }))
  return { input, emit }
}
it('preserves default integer parsing and one-unit buttons', async () => {
  const { input, emit } = await setup({ value: 8.25 })
  input.onChange({ target: { value: '3.9' } })
  expect(emit).toHaveBeenLastCalledWith('change', 3)
  input.increment(1)
  expect(emit).toHaveBeenLastCalledWith('change', 9)
})
it('retains entered fractions without snapping and steps from the current fraction', async () => {
  const { input, emit } = await setup({ value: 8.25, step: 0.1, min: -10, max: 10 })
  input.onChange({ target: { value: '-1.275' } })
  expect(emit).toHaveBeenLastCalledWith('change', -1.275)
  input.increment(1)
  expect(emit).toHaveBeenLastCalledWith('change', 8.35)
  input.increment(-1)
  expect(emit).toHaveBeenLastCalledWith('change', 8.15)
  input.onChange({ target: { value: '12.5' } })
  expect(emit).toHaveBeenLastCalledWith('change', 10)
})
it('removes arithmetic noise and clamps fractional button values', async () => {
  const { input, emit } = await setup({ value: 0.2, step: 0.1, min: 0.15, max: 0.25 })
  input.increment(1)
  expect(emit).toHaveBeenLastCalledWith('change', 0.25)
  input.increment(-1)
  expect(emit).toHaveBeenLastCalledWith('change', 0.15)
  const decimal = await setup({ value: 0.2, step: 0.1 })
  decimal.input.increment(1)
  expect(decimal.emit).toHaveBeenLastCalledWith('change', 0.3)
})
it('forwards the declared step to the native input', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(FormNumberInput, { value: 1.25, step: 0.1 }) }))
  expect(html).toMatch(/<input[^>]*step="0.1"/)
})
