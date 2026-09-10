import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as ee, b as te, c as k, ct as ne, d as A, dt as j, et as M, f as N, ft as P, g as F, h as I, i as L, it as R, j as z, k as B, l as V, lt as H, m as U, mt as W, n as G, nt as K, o as q, ot as J, p as Y, pt as re, q as X, r as ie, rt as ae, s as oe, st as se, t as ce, tt as le, u as ue, ut as de, v as fe, w as pe, x as me, y as he, z as Z } from "./SkeletonBlock-Bz0gRXPu.js";
import { computed as Q, onBeforeUnmount as ge, ref as $ } from "vue";
//#region src/composables/useSortable.js
var _e = 4;
function ve(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function ye(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function be(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = $(!1), o = $(null), s = $(null), c = $(-1), l = $(null), u = $(-1), d = $(!1), f = null, p = 0, m = 0, h = null, g = 0, _ = null;
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
			if (Math.hypot(t, n) < _e) return;
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
		let f = s.value ? String(n(s.value)) : null, p = ve(c, f), m = p.length;
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
	return ge(() => {
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
var xe = "cubic-bezier(.2, 0, 0, 1)", Se = 320;
function Ce() {
	let e = $("detail"), t = $(0), n = $(!1), r = 1, i = null, a = Q(() => n.value ? `transform ${Se}ms ${xe}` : "none"), o = Q(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = Q(() => ({
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
export { _ as ACTION_MENU_GAP, e as ACTION_MENU_MARGIN, B as AccountMenu, E as ActionMenu, E as RowActionMenu, w as ActionMenuItem, w as RowActionItem, d as ActionMenuSubmenu, d as RowActionSubmenu, P as AddButton, F as AppModal, I as AppModalFrame, h as AppShell, a as AppSidebar, j as AppSlider, X as BasePopover, W as BaseTile, c as ColorPresetPicker, de as CompactCheckbox, U as ConfirmDialog, y as EditorPanel, te as EditorSection, me as EditorSectionTitle, he as EditorTotal, ue as FormActionButtons, oe as FormField, q as FormNumberInput, O as FormSelect, V as FormTextInput, L as FormTextarea, ie as InlineEdit, G as LoadingIndicator, Y as ModalShell, A as MorphSheet, H as MultiToggle, x as PRESET_COLORS, k as PromptDialog, k as TextPromptDialog, M as ROW_ACTION_GAP, le as ROW_ACTION_MARGIN, ne as RemoveButton, z as RichContent, t as RichTextEditor, se as SectionLabel, re as SectionList, J as SegmentDonutChart, b as SidebarBrand, pe as SidebarGroup, r as SidebarNavItem, i as SidebarToggle, ce as SkeletonBlock, ee as SlidingTabs, R as ToggleSwitch, S as ValueSelect, K as computeActionMenuPlacement, ae as computeRowActionPlacement, p as createRichNodeHtml, m as decodeRichNodePayload, g as encodeRichNodePayload, o as escapeHtml, C as isValidHexColor, l as plainTextToRichHtml, s as randomPreset, f as readRichNode, ye as reorderByDrop, D as restoreFocus, v as sanitizeRichHtml, Z as sanitizeRichTextColor, n as sanitizeRichTextUrl, N as useContainerMorph, fe as useFullscreenViewportHeight, u as useIsMobile, T as useMediaQuery, Ce as useSheetSubpages, be as useSortable };
