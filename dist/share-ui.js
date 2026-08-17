import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as k, b as ee, c as te, ct as ne, d as A, et as j, f as M, g as N, h as P, i as F, it as I, j as L, k as R, l as z, lt as B, m as V, n as H, nt as U, o as W, ot as G, p as K, q, r as J, rt as Y, s as re, st as X, t as ie, tt as ae, u as oe, ut as se, v as ce, w as le, x as ue, y as de, z as fe } from "./FormTextarea-2GcDQgyv.js";
import { computed as Z, onBeforeUnmount as pe, ref as Q } from "vue";
//#region src/composables/useSortable.js
var $ = 4;
function me(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function he(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = Q(!1), o = Q(null), s = Q(null), c = Q(-1), l = Q(null), u = Q(-1), d = Q(!1), f = null, p = 0, m = 0, h = null, g = 0, _ = null;
	function v(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (h = {
			x: e.clientX,
			y: e.clientY,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, document.addEventListener("pointermove", y), document.addEventListener("pointerup", C), document.addEventListener("pointercancel", C), window.addEventListener("keydown", w), e.preventDefault());
	}
	function y(e) {
		if (!a.value) {
			if (!h) return;
			let t = e.clientX - h.x, n = e.clientY - h.y;
			if (Math.hypot(t, n) < $) return;
			b();
		}
		x(e.clientX, e.clientY), S(e.clientX, e.clientY);
	}
	function b() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: d } = h, g = e.getBoundingClientRect();
		p = t - g.left, m = n - g.top;
		let _ = e.cloneNode(!0), v = _;
		if (e.tagName === "TR") {
			let t = Array.from(e.children).map((e) => e.getBoundingClientRect().width);
			Array.from(_.children).forEach((e, n) => {
				e.style.width = t[n] + "px", e.style.minWidth = t[n] + "px", e.style.maxWidth = t[n] + "px";
			});
			let n = document.createElement("table"), r = document.createElement("tbody");
			r.appendChild(_), n.appendChild(r), n.style.borderCollapse = "separate", n.style.tableLayout = "fixed", v = n;
		}
		Object.assign(v.style, {
			position: "fixed",
			top: "0",
			left: "0",
			width: g.width + "px",
			height: g.height + "px",
			pointerEvents: "none",
			zIndex: "99999",
			margin: "0",
			transition: "none",
			opacity: "0.92",
			boxShadow: "var(--shadow-lg)",
			cursor: "grabbing",
			transformOrigin: "top left"
		}), v.classList.add("sortable-ghost"), document.body.appendChild(v), f = v, o.value = i, s.value = r, c.value = d, l.value = i, u.value = d, a.value = !0, document.body.classList.add("sortable-dragging"), x(t, n);
	}
	function x(e, t) {
		f && (f.style.transform = `translate3d(${e - p}px, ${t - m}px, 0)`);
	}
	function S(e, r) {
		let a = document.elementsFromPoint(e, r), c = null, d = null;
		for (let e of a) {
			let n = e.getAttribute && e.getAttribute("data-sortable-container");
			if (n && t[n]) {
				let r = t[n];
				if (r.accepts && !r.accepts(s.value, o.value, n)) continue;
				c = e, d = n;
				break;
			}
		}
		if (!d) return;
		let f = s.value ? String(n(s.value)) : null, p = Array.from(c.querySelectorAll(":scope > [data-sortable-key]")).filter((e) => e.getAttribute("data-sortable-key") !== f), m = p.length;
		for (let e = 0; e < p.length; e++) {
			let t = p[e].getBoundingClientRect();
			if (r < t.top + t.height / 2) {
				m = e;
				break;
			}
		}
		i && !i({
			item: s.value,
			fromGroup: o.value,
			toGroup: d,
			toIndex: m
		}) || (l.value = d, u.value = m);
	}
	function C() {
		if (!a.value) {
			T();
			return;
		}
		let e = {
			item: s.value,
			fromGroup: o.value,
			fromIndex: c.value,
			toGroup: l.value,
			toIndex: u.value
		};
		T(), e.toGroup != null && r?.(e);
	}
	function w(e) {
		e.key === "Escape" && T();
	}
	function T() {
		let e = a.value;
		document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", C), document.removeEventListener("pointercancel", C), window.removeEventListener("keydown", w), f &&= (f.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, s.value = null, c.value = -1, l.value = null, u.value = -1, h = null, e && (g = Date.now() + 250, d.value = !0, clearTimeout(_), _ = setTimeout(() => {
			d.value = !1, _ = null;
		}, 250));
	}
	function E() {
		return Date.now() < g;
	}
	function D(e) {
		return a.value && s.value && n(s.value) === n(e);
	}
	function O(e) {
		let r = t[e];
		if (!r) return [];
		let i = r.items.value;
		if (!a.value) return i;
		let c = i;
		if (o.value === e) {
			let e = n(s.value);
			c = i.filter((t) => n(t) !== e);
		}
		if (l.value === e && s.value) {
			let e = Math.min(u.value, c.length);
			c = [
				...c.slice(0, e),
				s.value,
				...c.slice(e)
			];
		}
		return c;
	}
	return pe(() => {
		T(), clearTimeout(_), d.value = !1;
	}), {
		dragging: a,
		sourceItem: s,
		sourceGroup: o,
		targetGroup: l,
		targetIndex: u,
		suppressNextClick: d,
		startDrag: v,
		shouldSuppressClick: E,
		isSource: D,
		displayItems: O
	};
}
//#endregion
//#region src/composables/useSheetSubpages.js
var ge = "cubic-bezier(.2, 0, 0, 1)", _e = 320;
function ve() {
	let e = Q("detail"), t = Q(0), n = Q(!1), r = 1, i = null, a = Z(() => n.value ? `transform ${_e}ms ${ge}` : "none"), o = Z(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = Z(() => ({
		transform: `translateX(${((1 - t.value) * 100).toFixed(3)}%)`,
		transition: a.value
	}));
	function c(e, r) {
		clearTimeout(i), n.value = !0, t.value = e, i = setTimeout(() => {
			n.value = !1, r && r();
		}, 330);
	}
	function l(r) {
		e.value === "detail" && (n.value = !1, t.value = 0, e.value = r);
	}
	function u() {
		c(1);
	}
	function d() {
		e.value !== "detail" && c(0, () => {
			e.value = "detail";
		});
	}
	function f(e) {
		clearTimeout(i), n.value = !1, r = e || 1;
	}
	function p(e) {
		t.value = Math.min(1, Math.max(0, 1 - e / r));
	}
	function m(t, n) {
		t > r * .35 || n > .4 ? c(0, () => {
			e.value = "detail";
		}) : c(1);
	}
	return {
		view: e,
		pos: t,
		animating: n,
		detailStyle: o,
		subStyle: s,
		goSub: l,
		enterSub: u,
		backToDetail: d,
		dragStart: f,
		dragMove: p,
		dragEnd: m
	};
}
//#endregion
export { T as ACTION_MENU_GAP, w as ACTION_MENU_MARGIN, a as AccountMenu, u as ActionMenu, u as RowActionMenu, q as ActionMenuItem, q as RowActionItem, x as ActionMenuSubmenu, x as RowActionSubmenu, B as AddButton, K as AppModal, M as AppModalFrame, b as AppShell, r as AppSidebar, ne as AppSlider, C as BasePopover, se as BaseTile, fe as ColorPresetPicker, X as CompactCheckbox, A as ConfirmDialog, de as EditorPanel, D as EditorSection, ce as EditorSectionTitle, N as EditorTotal, re as FormActionButtons, F as FormField, J as FormNumberInput, H as FormSelect, W as FormTextInput, ie as FormTextarea, oe as ModalShell, te as MorphSheet, G as MultiToggle, n as PRESET_COLORS, O as PromptDialog, O as TextPromptDialog, E as ROW_ACTION_GAP, _ as ROW_ACTION_MARGIN, k as RemoveButton, h as RichContent, i as RichTextEditor, I as SectionLabel, Y as SegmentDonutChart, y as SidebarBrand, ue as SidebarGroup, ee as SidebarNavItem, le as SidebarToggle, U as SlidingTabs, ae as ToggleSwitch, v as ValueSelect, e as computeActionMenuPlacement, j as computeRowActionPlacement, R as createRichNodeHtml, t as decodeRichNodePayload, L as encodeRichNodePayload, p as escapeHtml, S as isValidHexColor, m as plainTextToRichHtml, c as randomPreset, g as readRichNode, me as reorderByDrop, V as restoreFocus, o as sanitizeRichHtml, l as sanitizeRichTextColor, f as sanitizeRichTextUrl, z as useContainerMorph, P as useFullscreenViewportHeight, s as useIsMobile, d as useMediaQuery, ve as useSheetSubpages, he as useSortable };
