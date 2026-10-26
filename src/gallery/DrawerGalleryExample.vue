<template>
  <div class="drawer-gallery">
    <p>AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.</p>
    <div class="drawer-gallery__actions">
      <button type="button" @click="basicOpen = true">Header / body / footer</button>
      <button type="button" @click="navigationOpen = true">Embedded AppSidebar</button>
      <ToggleSwitch v-model="swipeToClose" label="Swipe to close" />
    </div>
    <AppDrawer v-model="basicOpen" aria-label="Drawer example" :swipe-to-close="swipeToClose">
      <template #title><strong>AppDrawer</strong></template>
      <div class="drawer-gallery__content">
        <p>Тело прокручивается между фиксированными header и footer.</p>
        <button type="button" @click="nestedOpen = true">Nested drawer</button>
        <p v-for="index in 24" :key="index">Example row {{ index }}</p>
      </div>
      <template #footer="{ close }"><button type="button" @click="close">Close drawer</button></template>
    </AppDrawer>
    <AppDrawer v-model="nestedOpen" aria-label="Nested drawer" width="min(360px, 90vw)" :z-index="3100">
      <template #title><strong>Nested drawer</strong></template>
      <p class="drawer-gallery__content">Escape закрывает только верхний drawer; scroll остаётся заблокирован.</p>
    </AppDrawer>
    <AppDrawer v-model="navigationOpen" aria-label="Example navigation" :show-close="false" :swipe-to-close="swipeToClose">
      <AppSidebar :model-value="true" position="embedded" mobile-mode="top" :mobile-breakpoint="1200" :show-toggle="false">
        <template #brand>
          <SidebarBrand as="div" label="share-ui"><template #icon>◆</template></SidebarBrand>
          <button type="button" aria-label="Close navigation" @click="navigationOpen = false">×</button>
        </template>
        <SidebarGroup label="Navigation" />
        <SidebarNavItem as="button" label="Overview" active @click="navigationOpen = false" />
        <SidebarNavItem as="button" label="Components" @click="navigationOpen = false" />
        <template #account>
          <ActionMenu title="Account actions">
            <template #trigger><AccountMenu label="Example account" expanded /></template>
            <ActionMenuItem>Account action</ActionMenuItem>
          </ActionMenu>
        </template>
      </AppSidebar>
    </AppDrawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppDrawer from '../components/overlay/AppDrawer.vue'
import AppSidebar from '../components/navigation/AppSidebar.vue'
import SidebarBrand from '../components/navigation/SidebarBrand.vue'
import SidebarGroup from '../components/navigation/SidebarGroup.vue'
import SidebarNavItem from '../components/navigation/SidebarNavItem.vue'
import AccountMenu from '../components/navigation/AccountMenu.vue'
import ActionMenu from '../components/floating/ActionMenu.vue'
import ActionMenuItem from '../components/floating/ActionMenuItem.vue'
import ToggleSwitch from '../components/ToggleSwitch.vue'

const basicOpen = ref(false)
const nestedOpen = ref(false)
const navigationOpen = ref(false)
const swipeToClose = ref(false)
</script>

<style scoped>
.drawer-gallery__actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.drawer-gallery__content { padding: 16px; }
</style>
