import { $ as e, A as t, At as n, B as r, C as i, Ct as a, D as o, Dt as s, E as c, Et as l, F as u, Ft as d, G as f, H as p, I as m, J as h, K as g, L as _, Lt as v, M as y, Mt as b, N as x, Nt as S, O as C, Ot as w, P as T, Pt as E, Q as D, R as O, Rt as k, S as A, St as j, T as M, Tt as ee, U as te, V as ne, W as re, X as ie, Y as ae, Z as oe, _ as N, _t as P, a as F, at as I, b as L, bt as R, c as z, ct as B, d as V, dt as H, et as U, f as W, ft as G, g as K, gt as q, h as se, ht as ce, i as le, it as ue, j as de, jt as fe, k as pe, kt as me, l as he, lt as ge, m as _e, mt as ve, n as ye, nt as be, o as xe, ot as Se, p as Ce, pt as J, q as we, r as Te, rt as Ee, s as De, st as Oe, t as ke, tt as Ae, u as je, ut as Me, v as Ne, vt as Pe, w as Fe, wt as Ie, x as Le, xt as Re, y as ze, yt as Be, z as Ve, zt as He } from "./StarRating-B7ONxg2I.js";
import { computed as Y, nextTick as X, onBeforeUnmount as Ue, onScopeDispose as Z, ref as Q, shallowRef as We, toValue as Ge, watch as $ } from "vue";
//#region src/composables/useSortable.js
var Ke = 4;
function qe(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function Je(e, t, n, r, i = "list") {
	if (i === "grid") {
		let r = Array.from(e.querySelectorAll("[data-sortable-slot]")).filter((t) => t.closest("[data-sortable-container]") === e).find((e) => {
			let r = e.getBoundingClientRect();
			return t >= r.left && t < r.right && n >= r.top && n < r.bottom;
		});
		if (!r) return -1;
		let i = Number(r.getAttribute("data-sortable-slot"));
		return Number.isInteger(i) && i >= 0 ? i : -1;
	}
	let a = qe(e, r), o = a.findIndex((e) => n < e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2);
	return o < 0 ? a.length : o;
}
function Ye(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function Xe(e) {
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
		}, document.addEventListener("pointermove", y), document.addEventListener("pointerup", C), document.addEventListener("pointercancel", C), window.addEventListener("keydown", w, !0), e.preventDefault());
	}
	function y(e) {
		if (!a.value) {
			if (!h) return;
			let t = e.clientX - h.x, n = e.clientY - h.y;
			if (Math.hypot(t, n) < Ke) return;
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
		if (l.value = null, u.value = -1, !d) return;
		let f = s.value ? String(n(s.value)) : null, p = Je(c, e, r, f, t[d].layout);
		p < 0 || i && !i({
			item: s.value,
			fromGroup: o.value,
			toGroup: d,
			toIndex: p
		}) || (l.value = d, u.value = p);
	}
	function C(e) {
		if (e?.type === "pointercancel") {
			T();
			return;
		}
		if (!a.value) {
			T();
			return;
		}
		let t = {
			item: s.value,
			fromGroup: o.value,
			fromIndex: c.value,
			toGroup: l.value,
			toIndex: u.value
		};
		T(), t.toGroup != null && r?.(t);
	}
	function w(e) {
		e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), T());
	}
	function T() {
		let e = a.value;
		document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", C), document.removeEventListener("pointercancel", C), window.removeEventListener("keydown", w, !0), f &&= (f.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, s.value = null, c.value = -1, l.value = null, u.value = -1, h = null, e && (g = Date.now() + 250, d.value = !0, clearTimeout(_), _ = setTimeout(() => {
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
		if (r.layout === "grid" || !a.value) return i;
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
	return Ue(() => {
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
var Ze = "cubic-bezier(.2, 0, 0, 1)", Qe = 320;
function $e() {
	let e = Q("detail"), t = Q(0), n = Q(!1), r = 1, i = null, a = Y(() => n.value ? `transform ${Qe}ms ${Ze}` : "none"), o = Y(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = Y(() => ({
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
//#region src/lib/virtualListLayout.js
function et(e, t, n, r) {
	let i = [0];
	for (let a of e) i.push(i.at(-1) + (r.get(t(a)) || Math.max(1, n(a))));
	return i;
}
function tt(e, t, n, r = 6) {
	let i = e.length - 1;
	if (!i) return {
		start: 0,
		end: 0
	};
	let a = (t) => {
		let n = 0, r = i;
		for (; n < r;) {
			let i = n + r >>> 1;
			e[i + 1] <= t ? n = i + 1 : r = i;
		}
		return Math.min(n, i - 1);
	}, o = Math.max(0, Math.min(t, e[i] - n));
	return {
		start: Math.max(0, a(o) - r),
		end: Math.min(i, a(o + n) + r + 1)
	};
}
//#endregion
//#region src/composables/useVirtualList.js
function nt(e, t, { key: n, estimateSize: r = () => 70, threshold: i = 80, overscan: a = 6 } = {}) {
	let o = We(/* @__PURE__ */ new Map()), s = Q(0), c = Q(0), l = Q(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = Y(() => Ge(e) || []), p = Y(() => et(f.value, n, r, o.value)), m = Y(() => new Map(f.value.map((e, t) => [n(e), t]))), h = Y(() => f.value.length > i), g = Y(() => h.value ? tt(p.value, s.value, c.value || 600, a) : {
		start: 0,
		end: f.value.length
	}), _ = Y(() => {
		let { start: e, end: t } = g.value, r = Array.from({ length: t - e }, (t, n) => e + n), i = m.value.get(l.value);
		i != null && (i < e || i >= t) && r.push(i), r.sort((e, t) => e - t);
		let a = 0;
		return r.map((e) => {
			let t = f.value[e], r = p.value[e] - a;
			return a = p.value[e + 1], {
				item: t,
				key: n(t),
				index: e,
				gap: r
			};
		});
	}), v = Y(() => p.value.at(-1) - (_.value.length ? p.value[_.value.at(-1).index + 1] : 0)), y, b, x, S, C;
	function w() {
		if (!x) return;
		let e = x.clientWidth;
		C != null && e > 0 && e !== C && (o.value = /* @__PURE__ */ new Map()), e > 0 && (C = e), c.value = x.clientHeight, s.value = Math.max(0, x.scrollTop - (parseFloat(getComputedStyle(x).paddingTop) || 0));
	}
	function T() {
		S ??= requestAnimationFrame(() => {
			S = null, w();
		});
	}
	function E(e) {
		l.value = null;
		for (let [t, n] of u) if (n.contains(e.target)) {
			l.value = t;
			break;
		}
	}
	function D(e) {
		x?.contains(e.relatedTarget) || (l.value = null);
	}
	function O(e, t) {
		let n = t?.$el || t, r = u.get(e);
		r !== n && (r && (y?.unobserve(r), u.delete(e)), n?.nodeType === 1 && (u.set(e, n), d.set(n, e), y?.observe(n)));
	}
	typeof ResizeObserver < "u" && (y = new ResizeObserver((e) => {
		let t = new Map(o.value), n = !1;
		for (let { target: r } of e) {
			let e = r.getBoundingClientRect();
			if (!e.height) continue;
			let i = getComputedStyle(r), a = e.height + (parseFloat(i.marginTop) || 0) + (parseFloat(i.marginBottom) || 0), o = d.get(r);
			o != null && Math.abs((t.get(o) || 0) - a) > .5 && (t.set(o, a), n = !0);
		}
		n && (o.value = t);
	}), b = new ResizeObserver(w));
	function k() {
		x?.removeEventListener("scroll", T), x?.removeEventListener("focusin", E), x?.removeEventListener("focusout", D), b?.disconnect();
	}
	return $(t, (e) => {
		k(), x = e, e?.addEventListener("scroll", T, { passive: !0 }), e?.addEventListener("focusin", E), e?.addEventListener("focusout", D), e && b?.observe(e), X(w);
	}, {
		immediate: !0,
		flush: "post"
	}), $(m, (e) => {
		o.value = new Map([...o.value].filter(([t]) => e.has(t))), e.has(l.value) || (l.value = null), X(w);
	}), Z(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: Y(() => p.value.at(-1))
	};
}
//#endregion
export { ve as ACTION_MENU_GAP, ce as ACTION_MENU_MARGIN, f as AccountMenu, _e as ActionButton, J as ActionMenu, J as RowActionMenu, G as ActionMenuItem, G as RowActionItem, B as ActionMenuSubmenu, B as RowActionSubmenu, me as AddButton, T as AppDrawer, de as AppModal, t as AppModalFrame, re as AppShell, p as AppSidebar, w as AppSlider, ge as BasePopover, E as BaseTile, d as BlurBackdrop, ue as ColorPresetPicker, s as CompactCheckbox, C as ConfirmDialog, De as ContentRow, Te as DatePicker, z as DetailSection, O as EditorPanel, m as EditorSection, _ as EditorSectionTitle, u as EditorTotal, le as FloatingTooltip, Fe as FormActionButtons, Le as FormField, L as FormNumberInput, ze as FormSelect, i as FormTextInput, Ne as FormTextarea, W as GuidedTour, j as IconNavigation, he as IconPicker, Ce as IconToggleButton, N as InlineEdit, pe as LoadingIndicator, se as LoadingState, o as ModalShell, M as MorphSheet, b as MorphTile, S as MorphTileHeader, l as MultiToggle, xe as OptionList, I as PRESET_COLORS, A as PromptDialog, A as TextPromptDialog, q as ROW_ACTION_GAP, P as ROW_ACTION_MARGIN, ee as RemoveButton, we as RichContent, g as RichTextEditor, F as SearchMultiSelect, Ie as SectionLabel, n as SectionList, a as SegmentDonutChart, ne as SidebarBrand, r as SidebarGroup, Ve as SidebarNavItem, te as SidebarToggle, K as SkeletonBlock, Re as SlidingTabs, ke as StarRating, je as StatBar, fe as TileAccentStrip, ye as TimelineGroup, R as ToggleSwitch, Ee as ValueSelect, v as applyBackdropBlur, k as backdropBlurStyle, He as blurFilter, Pe as computeActionMenuPlacement, Be as computeRowActionPlacement, h as createRichNodeHtml, ae as decodeRichNodePayload, ie as encodeRichNodePayload, oe as escapeHtml, Se as isValidHexColor, D as plainTextToRichHtml, Oe as randomPreset, e as readRichNode, Ye as reorderByDrop, y as restoreFocus, U as sanitizeRichHtml, Ae as sanitizeRichTextColor, be as sanitizeRichTextUrl, c as useContainerMorph, x as useFullscreenViewportHeight, V as useGuidedTour, Me as useIsMobile, H as useMediaQuery, $e as useSheetSubpages, Xe as useSortable, nt as useVirtualList };
