import { $ as e, A as t, At as n, B as r, Bt as i, C as a, Ct as o, D as s, Dt as c, E as l, Et as u, F as d, Ft as f, G as p, H as m, Ht as h, I as g, It as _, J as v, K as y, L as b, Lt as x, M as S, Mt as C, N as w, Nt as T, O as E, Ot as D, P as O, Pt as k, Q as A, R as j, Rt as M, S as N, St as P, T as F, Tt as ee, U as te, Ut as ne, V as re, Vt as ie, W as ae, X as oe, Y as se, Z as ce, _ as le, _t as I, a as L, at as R, b as z, bt as B, c as V, ct as H, d as U, dt as W, et as ue, f as de, ft as fe, g as pe, gt as me, h as he, ht as G, i as ge, it as _e, j as ve, jt as ye, k as be, kt as xe, l as Se, lt as Ce, m as we, mt as K, n as Te, nt as Ee, o as De, ot as Oe, p as ke, pt as Ae, q as je, r as Me, rt as Ne, s as Pe, st as Fe, t as Ie, tt as Le, u as Re, ut as q, v as ze, vt as Be, w as Ve, wt as He, x as Ue, xt as We, y as Ge, yt as Ke, z as qe, zt as Je } from "./StarRating-DiIkJ0YR.js";
import { computed as J, nextTick as Y, onBeforeUnmount as Ye, onScopeDispose as Xe, ref as X, shallowRef as Ze, toValue as Qe, watch as Z } from "vue";
//#region src/internal/sortableGhost.js
var $e = 0;
function Q(e, t) {
	let n = getComputedStyle(e);
	for (let e of n) e.startsWith("--") && t.style.setProperty(e, n.getPropertyValue(e));
	for (let e of [
		"color",
		"font-family",
		"font-size",
		"font-style",
		"font-weight",
		"line-height",
		"letter-spacing",
		"text-align",
		"text-transform",
		"direction"
	]) t.style.setProperty(e, n.getPropertyValue(e));
}
var et = /* @__PURE__ */ new Set([
	"for",
	"list",
	"headers",
	"aria-labelledby",
	"aria-describedby",
	"aria-controls",
	"aria-owns",
	"aria-activedescendant",
	"aria-flowto",
	"aria-details",
	"aria-errormessage"
]);
function tt(e, t, n) {
	return (t === "href" || t === "xlink:href") && e.startsWith("#") ? n.has(e.slice(1)) ? `#${n.get(e.slice(1))}` : e : et.has(t) ? e.replace(/\S+/g, (e) => n.get(e) || e) : e.replace(/url\(\s*(['"]?)#([^\s'"\)]+)\1\s*\)/g, (e, t, r) => n.has(r) ? `url(${t}#${n.get(r)}${t})` : e);
}
function $(e) {
	let t = e.cloneNode(!0), n = [t, ...t.querySelectorAll("*")], r = /* @__PURE__ */ new Map();
	for (let e of n) {
		if (!e.id) continue;
		let t;
		do
			t = `share-sortable-ghost-${++$e}`;
		while (document.getElementById(t));
		r.set(e.id, t), e.id = t;
	}
	for (let e of n) for (let t of Array.from(e.attributes)) {
		if (t.name === "id") continue;
		let n = tt(t.value, t.name, r);
		n !== t.value && e.setAttributeNS(t.namespaceURI, t.name, n);
	}
	return Q(e, t), t;
}
//#endregion
//#region src/internal/sortableListPreview.js
function nt(e, { getKey: t, sourceItem: n, removeSource: r, insertAt: i }) {
	if (!n || !r && i == null) return e;
	let a = t(n), o = e.filter((e) => t(e) !== a);
	if (i == null) return o;
	let s = Math.max(0, Math.min(i, o.length));
	return [
		...o.slice(0, s),
		n,
		...o.slice(s)
	];
}
//#endregion
//#region src/composables/useSortable.js
var rt = 4, it = 8;
function at(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function ot(e, t, n, r, i = "list", a = "exact") {
	if (i === "grid") {
		if (a === "nearest") {
			let r = e.getBoundingClientRect();
			if (t < r.left || t >= r.right || n < r.top || n >= r.bottom) return -1;
		}
		let i = Array.from(e.querySelectorAll("[data-sortable-slot]")).filter((t) => t.closest("[data-sortable-container]") === e), o = i.find((e) => {
			let r = e.getBoundingClientRect();
			return t >= r.left && t < r.right && n >= r.top && n < r.bottom;
		});
		if (!o && a === "nearest") {
			let e = Infinity, a = !1, s = -1;
			for (let c of i) {
				let i = Number(c.getAttribute("data-sortable-slot"));
				if (!Number.isInteger(i) || i < 0) continue;
				let l = c.getBoundingClientRect(), u = Math.max(l.left - t, 0, t - l.right), d = Math.max(l.top - n, 0, n - l.bottom), f = u * u + d * d, p = c.getAttribute("data-sortable-key") === r || Array.from(c.querySelectorAll("[data-sortable-key]")).some((e) => e.getAttribute("data-sortable-key") === r);
				(f < e || f === e && (a && !p || a === p && i > s)) && (o = c, e = f, a = p, s = i);
			}
		}
		if (!o) return -1;
		let s = Number(o.getAttribute("data-sortable-slot"));
		return Number.isInteger(s) && s >= 0 ? s : -1;
	}
	let o = at(e, r), s = o.findIndex((e) => n < e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2);
	return s < 0 ? o.length : s;
}
function st(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function ct(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = Number.isFinite(e.activationDelay) ? Math.max(0, e.activationDelay) : 0, o = X(!1), s = X(null), c = X(null), l = X(-1), u = X(null), f = X(-1), p = X(!1), m = null, h = 0, g = 0, _ = null, v = null, y = 0, b = null, x = null;
	function S(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0 || _ || o.value) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (_ = {
			x: e.clientX,
			y: e.clientY,
			pointerId: e.pointerId,
			pointerType: e.pointerType,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, v?.(), a || (v = d()), document.addEventListener("pointermove", C), document.addEventListener("pointerup", A), document.addEventListener("pointercancel", A), window.addEventListener("keydown", j, !0), window.addEventListener("blur", E), a ? (document.addEventListener("touchmove", w, { passive: !1 }), document.addEventListener("contextmenu", T, !0), x = setTimeout(() => {
			if (x = null, !_?.sourceEl.isConnected) {
				M();
				return;
			}
			v = d(), D();
		}, a)) : e.preventDefault());
	}
	function C(e) {
		if (!(_?.pointerId && e.pointerId && _.pointerId !== e.pointerId)) {
			if (!o.value) {
				if (!_) return;
				let t = e.clientX - _.x, n = e.clientY - _.y;
				if (a) {
					Math.hypot(t, n) > it && M(!0);
					return;
				}
				if (Math.hypot(t, n) < rt) return;
				D();
			}
			O(e.clientX, e.clientY), k(e.clientX, e.clientY);
		}
	}
	function w(e) {
		if (e.touches.length !== 1) {
			M();
			return;
		}
		o.value && _?.pointerType === "touch" && e.cancelable && e.preventDefault();
	}
	function T(e) {
		(_ || o.value) && e.preventDefault();
	}
	function E() {
		M();
	}
	function D() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: a } = _, d = e.getBoundingClientRect();
		h = t - d.left, g = n - d.top;
		let p = $(e), v = p;
		if (e.tagName === "TR") {
			let t = Array.from(e.children).map((e) => e.getBoundingClientRect().width);
			Array.from(p.children).forEach((e, n) => {
				e.style.width = t[n] + "px", e.style.minWidth = t[n] + "px", e.style.maxWidth = t[n] + "px";
			});
			let n = document.createElement("table"), r = document.createElement("tbody");
			r.appendChild(p), n.appendChild(r), n.style.borderCollapse = "separate", n.style.tableLayout = "fixed", v = n, Q(e, v);
		}
		Object.assign(v.style, {
			position: "fixed",
			top: "0",
			left: "0",
			width: d.width + "px",
			height: d.height + "px",
			pointerEvents: "none",
			zIndex: "99999",
			margin: "0",
			transition: "none",
			opacity: "0.92",
			boxShadow: "var(--shadow-lg)",
			cursor: "grabbing",
			transformOrigin: "top left"
		}), v.classList.add("sortable-ghost"), v.setAttribute("aria-hidden", "true"), v.inert = !0, document.body.appendChild(v), m = v, s.value = i, c.value = r, l.value = a, u.value = i, f.value = a, o.value = !0, document.body.classList.add("sortable-dragging"), O(t, n);
	}
	function O(e, t) {
		m && (m.style.transform = `translate3d(${e - h}px, ${t - g}px, 0)`);
	}
	function k(e, r) {
		let a = document.elementsFromPoint(e, r), o = null, l = null;
		for (let e of a) {
			let n = e.getAttribute && e.getAttribute("data-sortable-container");
			if (n && t[n]) {
				let r = t[n];
				if (r.accepts && !r.accepts(c.value, s.value, n)) continue;
				o = e, l = n;
				break;
			}
		}
		if (u.value = null, f.value = -1, !l) return;
		let d = c.value ? String(n(c.value)) : null, p = ot(o, e, r, d, t[l].layout, t[l].hitTest);
		p < 0 || i && !i({
			item: c.value,
			fromGroup: s.value,
			toGroup: l,
			toIndex: p
		}) || (u.value = l, f.value = p);
	}
	function A(e) {
		if (_?.pointerId && e?.pointerId && _.pointerId !== e.pointerId) return;
		if (e?.type === "pointercancel") {
			M();
			return;
		}
		if (!o.value) {
			M();
			return;
		}
		let t = {
			item: c.value,
			fromGroup: s.value,
			fromIndex: l.value,
			toGroup: u.value,
			toIndex: f.value
		};
		M(), t.toGroup != null && r?.(t);
	}
	function j(e) {
		e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), M());
	}
	function M(e = !1) {
		let t = o.value || e;
		clearTimeout(x), x = null, document.removeEventListener("pointermove", C), document.removeEventListener("pointerup", A), document.removeEventListener("pointercancel", A), window.removeEventListener("keydown", j, !0), window.removeEventListener("blur", E), document.removeEventListener("touchmove", w), document.removeEventListener("contextmenu", T, !0), m &&= (m.remove(), null), document.body.classList.remove("sortable-dragging"), o.value = !1, s.value = null, c.value = null, l.value = -1, u.value = null, f.value = -1, _ = null, v?.(), v = null, t && (y = Date.now() + 250, p.value = !0, clearTimeout(b), b = setTimeout(() => {
			p.value = !1, b = null;
		}, 250));
	}
	function N() {
		return Date.now() < y;
	}
	function P(e) {
		return o.value && c.value && n(c.value) === n(e);
	}
	function F(e) {
		let r = t[e];
		if (!r) return [];
		let i = r.items.value;
		return r.layout === "grid" || !o.value ? i : nt(i, {
			getKey: n,
			sourceItem: c.value,
			removeSource: s.value === e,
			insertAt: u.value === e ? f.value : null
		});
	}
	return Ye(() => {
		M(), clearTimeout(b), p.value = !1;
	}), {
		dragging: o,
		sourceItem: c,
		sourceGroup: s,
		targetGroup: u,
		targetIndex: f,
		suppressNextClick: p,
		startDrag: S,
		shouldSuppressClick: N,
		isSource: P,
		displayItems: F
	};
}
//#endregion
//#region src/composables/useSheetSubpages.js
var lt = "cubic-bezier(.2, 0, 0, 1)", ut = 320;
function dt() {
	let e = X("detail"), t = X(0), n = X(!1), r = 1, i = null, a = J(() => n.value ? `transform ${ut}ms ${lt}` : "none"), o = J(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = J(() => ({
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
function ft(e, t, n, r) {
	let i = [0];
	for (let a of e) i.push(i.at(-1) + (r.get(t(a)) || Math.max(1, n(a))));
	return i;
}
function pt(e, t, n, r = 6) {
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
function mt(e, t, { key: n, estimateSize: r = () => 70, threshold: i = 80, overscan: a = 6 } = {}) {
	let o = Ze(/* @__PURE__ */ new Map()), s = X(0), c = X(0), l = X(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = J(() => Qe(e) || []), p = J(() => ft(f.value, n, r, o.value)), m = J(() => new Map(f.value.map((e, t) => [n(e), t]))), h = J(() => f.value.length > i), g = J(() => h.value ? pt(p.value, s.value, c.value || 600, a) : {
		start: 0,
		end: f.value.length
	}), _ = J(() => {
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
	}), v = J(() => p.value.at(-1) - (_.value.length ? p.value[_.value.at(-1).index + 1] : 0)), y, b, x, S, C;
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
	return Z(t, (e) => {
		k(), x = e, e?.addEventListener("scroll", T, { passive: !0 }), e?.addEventListener("focusin", E), e?.addEventListener("focusout", D), e && b?.observe(e), Y(w);
	}, {
		immediate: !0,
		flush: "post"
	}), Z(m, (e) => {
		o.value = new Map([...o.value].filter(([t]) => e.has(t))), e.has(l.value) || (l.value = null), Y(w);
	}), Xe(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: J(() => p.value.at(-1))
	};
}
//#endregion
export { me as ACTION_MENU_GAP, I as ACTION_MENU_MARGIN, je as AccountMenu, we as ActionButton, G as ActionMenu, G as RowActionMenu, K as ActionMenuItem, K as RowActionItem, q as ActionMenuSubmenu, q as RowActionSubmenu, ye as AddButton, O as AppDrawer, ve as AppModal, t as AppModalFrame, y as AppShell, ae as AppSidebar, n as AppSlider, M as AvatarFrame, W as BasePopover, _ as BaseTile, Je as BlurBackdrop, ne as ChoiceCard, Oe as ColorPresetPicker, xe as CompactCheckbox, E as ConfirmDialog, Pe as ContentRow, Me as DatePicker, V as DetailSection, r as EditorPanel, j as EditorSection, qe as EditorSectionTitle, b as EditorTotal, x as FitContent, ge as FloatingTooltip, Ve as FormActionButtons, Ue as FormField, z as FormNumberInput, Ge as FormSelect, a as FormTextInput, ze as FormTextarea, de as GuidedTour, He as IconNavigation, Se as IconPicker, ke as IconToggleButton, le as InlineEdit, be as LoadingIndicator, he as LoadingState, s as ModalShell, F as MorphSheet, k as MorphTile, f as MorphTileHeader, D as MultiToggle, De as OptionList, Fe as PRESET_COLORS, N as PromptDialog, N as TextPromptDialog, Be as ROW_ACTION_GAP, Ke as ROW_ACTION_MARGIN, c as RemoveButton, se as RichContent, v as RichTextEditor, L as SearchMultiSelect, u as SectionLabel, C as SectionList, ee as SegmentDonutChart, te as SidebarBrand, m as SidebarGroup, re as SidebarNavItem, p as SidebarToggle, pe as SkeletonBlock, o as SlidingTabs, Ie as StarRating, Re as StatBar, T as TileAccentStrip, Te as TimelineGroup, P as ToggleSwitch, R as ValueSelect, i as applyBackdropBlur, ie as backdropBlurStyle, h as blurFilter, B as computeActionMenuPlacement, We as computeRowActionPlacement, oe as createRichNodeHtml, ce as decodeRichNodePayload, A as encodeRichNodePayload, e as escapeHtml, g as isSortableGestureActive, H as isValidHexColor, ue as plainTextToRichHtml, Ce as randomPreset, Le as readRichNode, st as reorderByDrop, S as restoreFocus, Ee as sanitizeRichHtml, Ne as sanitizeRichTextColor, _e as sanitizeRichTextUrl, l as useContainerMorph, w as useFullscreenViewportHeight, U as useGuidedTour, fe as useIsMobile, Ae as useMediaQuery, dt as useSheetSubpages, ct as useSortable, mt as useVirtualList };
