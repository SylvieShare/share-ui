import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, _t as O, a as ee, at as k, b as te, bt as ne, c as re, ct as ie, d as A, dt as j, et as M, f as N, ft as P, g as F, gt as I, h as L, ht as R, i as z, it as B, j as V, k as H, l as U, lt as W, m as G, mt as K, n as q, nt as J, o as Y, ot as ae, p as oe, pt as se, q as ce, r as le, rt as ue, s as de, st as fe, t as pe, tt as X, u as me, ut as he, v as ge, vt as _e, w as ve, x as ye, xt as be, y as xe, yt as Se, z as Z } from "./useGuidedTour-03a45KO2.js";
import { computed as Q, onBeforeUnmount as Ce, ref as $ } from "vue";
//#region src/composables/useSortable.js
var we = 4;
function Te(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function Ee(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function De(e) {
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
			if (Math.hypot(t, n) < we) return;
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
		let f = s.value ? String(n(s.value)) : null, p = Te(c, f), m = p.length;
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
	return Ce(() => {
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
var Oe = "cubic-bezier(.2, 0, 0, 1)", ke = 320;
function Ae() {
	let e = $("detail"), t = $(0), n = $(!1), r = 1, i = null, a = Q(() => n.value ? `transform ${ke}ms ${Oe}` : "none"), o = Q(() => ({
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
export { J as ACTION_MENU_GAP, ue as ACTION_MENU_MARGIN, m as AccountMenu, le as ActionButton, X as ActionMenu, X as RowActionMenu, M as ActionMenuItem, M as RowActionItem, w as ActionMenuSubmenu, w as RowActionSubmenu, I as AddButton, te as AppModal, xe as AppModalFrame, p as AppShell, t as AppSidebar, R as AppSlider, E as BasePopover, be as BaseTile, d as ColorPresetPicker, K as CompactCheckbox, D as ConfirmDialog, a as EditorPanel, ve as EditorSection, b as EditorSectionTitle, r as EditorTotal, oe as FormActionButtons, me as FormField, U as FormNumberInput, re as FormSelect, N as FormTextInput, de as FormTextarea, q as GuidedTour, Y as InlineEdit, ge as LoadingIndicator, z as LoadingState, F as ModalShell, G as MorphSheet, Se as MorphTile, ne as MorphTileHeader, se as MultiToggle, ce as PRESET_COLORS, A as PromptDialog, A as TextPromptDialog, B as ROW_ACTION_GAP, k as ROW_ACTION_MARGIN, P as RemoveButton, o as RichContent, g as RichTextEditor, j as SectionLabel, O as SectionList, he as SegmentDonutChart, H as SidebarBrand, h as SidebarGroup, i as SidebarNavItem, V as SidebarToggle, ee as SkeletonBlock, W as SlidingTabs, _e as TileAccentStrip, ie as ToggleSwitch, s as ValueSelect, ae as computeActionMenuPlacement, fe as computeRowActionPlacement, l as createRichNodeHtml, f as decodeRichNodePayload, v as encodeRichNodePayload, Z as escapeHtml, u as isValidHexColor, n as plainTextToRichHtml, T as randomPreset, S as readRichNode, Ee as reorderByDrop, ye as restoreFocus, c as sanitizeRichHtml, x as sanitizeRichTextColor, C as sanitizeRichTextUrl, L as useContainerMorph, y as useFullscreenViewportHeight, pe as useGuidedTour, _ as useIsMobile, e as useMediaQuery, Ae as useSheetSubpages, De as useSortable };
