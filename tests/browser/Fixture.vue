<template>
  <button id="opener" aria-controls="app-navigation-drawer" @click="open = true">Open drawer</button>
  <button id="background">Background</button>
  <button v-if="legacy" id="modal-opener" @click="modal = true">Open modal</button>
  <AppModal v-if="modal" aria-label="Legacy modal" @close="modal = false">
    <button id="modal-popover-anchor" ref="modalAnchor" @click="modalPopover = true">Modal popover</button>
    <BasePopover v-model:open="modalPopover" :anchor="modalAnchor" :z-index="4100">
      <button id="modal-popover-action">Popover action</button>
    </BasePopover>
    <ActionMenu title="Modal menu"><ActionMenuItem>Modal action</ActionMenuItem></ActionMenu>
  </AppModal>
  <AppShell v-if="navigation" :sidebar-mode="position === 'fixed' ? 'fixed' : 'column'" :mobile-breakpoint="breakpoint" :rail-width="88" :canvas="false">
    <template #sidebar>
      <AppSidebar :model-value="expanded" :mobile-breakpoint="breakpoint" :mobile-mode="mobileMode" :position="position" :show-toggle="!noToggle">
        <template #brand><SidebarBrand as="div" label="Brand" /></template>
        <SidebarGroup label="Group" />
        <SidebarNavItem as="button" label="First link" active />
        <SidebarNavItem as="button" label="Second link" />
        <template #account><AccountMenu label="Account" :expanded="expanded" /></template>
      </AppSidebar>
    </template>
    <div id="shell-content">Content</div>
    <template #rail>Rail</template>
  </AppShell>
  <AppDrawer
    v-if="mounted"
    v-model="open"
    id="app-navigation-drawer"
    aria-label="Test drawer"
    :z-index="drawerZ"
    :width="width"
    :show-close="!embedded"
    :swipe-to-close="swipe"
    @opened="opened++"
    @closed="closed++"
  >
    <template v-if="chrome" #header><strong>Custom header</strong></template>
    <template v-if="title" #title><strong>Title only</strong></template>
    <template v-if="chrome" #footer="{ close }"><button id="footer-close" @click="close">Footer close</button></template>
    <AppSidebar v-if="embedded" :model-value="true" position="embedded" mobile-mode="top" :mobile-breakpoint="1200" :show-toggle="false">
      <template #brand>
        <SidebarBrand as="div" label="Embedded brand" />
        <button id="brand-close" @click="open = false">Close navigation</button>
      </template>
      <SidebarGroup label="Embedded group" />
      <SidebarNavItem as="button" label="Embedded link" />
      <template #account><AccountMenu label="Embedded account" expanded /></template>
    </AppSidebar>
    <template v-else>
      <input id="drawer-input" aria-label="Drawer input">
      <button id="nested-open" @click="nested = true">Open nested</button>
      <button id="popover-anchor" ref="anchor" @click="popover = true">Open popover</button>
      <BasePopover v-model:open="popover" :anchor="anchor" :z-index="drawerZ === 100 ? undefined : 4100" aria-label="Child popover">
        <button id="popover-first">First popover action</button>
        <button id="popover-last">Last popover action</button>
      </BasePopover>
      <ActionMenu title="Child menu"><ActionMenuItem>Menu action</ActionMenuItem></ActionMenu>
      <div id="swipe-surface" style="height: 120px">Swipe surface</div>
      <div v-if="long" style="height: 1800px">Scrollable content</div>
      <button id="drawer-last">Last action</button>
      <AppDrawer v-model="nested" aria-label="Nested drawer" :z-index="4000" @closed="nestedClosed++">
        <input id="nested-input" aria-label="Nested input">
      </AppDrawer>
    </template>
  </AppDrawer>
</template>

<script setup>
import { ref } from 'vue'
import {
  AccountMenu, ActionMenu, ActionMenuItem, AppDrawer, AppModal, AppShell, AppSidebar,
  BasePopover, SidebarBrand, SidebarGroup, SidebarNavItem,
} from '../../dist/share-ui.js'

const params = new URLSearchParams(location.search)
const legacy = params.has('legacy')
const modal = ref(false)
const modalPopover = ref(false)
const modalAnchor = ref(null)
const open = ref(params.has('initial'))
const mounted = ref(true)
const nested = ref(false)
const popover = ref(false)
const anchor = ref(null)
const opened = ref(0)
const closed = ref(0)
const nestedClosed = ref(0)
const width = ref(params.get('width') || 288)
const drawerZ = Number(params.get('zIndex') || 3000)
const embedded = params.has('embedded')
const chrome = params.has('chrome')
const title = params.has('title')
const swipe = params.has('swipe')
const long = params.has('long')
const navigation = params.has('navigation')
const breakpoint = Number(params.get('breakpoint') ?? 768)
const mobileMode = params.get('mobileMode') || 'hide'
const position = params.get('position') || 'sticky'
const expanded = !params.has('collapsed')
const noToggle = params.has('noToggle')
window.fixture = { open, mounted, nested, popover, opened, closed, nestedClosed, width }
</script>

<style>
body { margin: 0; min-height: 2200px; }
#shell-content { min-height: 100vh; }
</style>
