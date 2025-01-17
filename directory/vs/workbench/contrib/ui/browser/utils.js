import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../../external/lexical/lexical/lexical.js';
define(
			de[476],
			he([1, 0, 7, 75, 166, 66, 158]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oac = e.$Nac = e.$Mac = e.$Lac = e.$Kac = void 0),
					(e.$Hac = d),
					(e.$Iac = m),
					(e.$Jac = r),
					(e.$Pac = g),
					(t = mt(t));
				function d(p, o, f = {}) {
					let b,
						s = null;
					return (...l) => {
						const y = () => {
								(b = void 0), !f.leading && s && (p(...s), (s = null));
							},
							$ = f.leading && !b;
						clearTimeout(b), (b = setTimeout(y, o)), $ ? p(...l) : (s = l);
					};
				}
				function m(p) {
					return p.getEditorState().read(() => {
						const o = (0, C.$getSelection)();
						if (!(0, C.$isRangeSelection)(o)) return !1;
						const f = o.anchor,
							b = o.focus;
						if (f.key !== b.key || f.offset !== b.offset) return !1;
						const s = f.getNode();
						if (f.offset !== 0) return !1;
						if (s === (0, C.$getRoot)().getFirstChild()) return !0;
						let l = s.getPreviousSibling();
						for (; l; ) {
							if (l.getTextContent().trim() !== "") return !1;
							l = l.getPreviousSibling();
						}
						return !0;
					});
				}
				function r(p, o) {
					const b = t.getWindow(p).getSelection();
					if (!b || b.rangeCount === 0) return !1;
					try {
						const s = b.getRangeAt(0);
						if (s.collapsed) {
							const l = s.cloneRange();
							l.selectNodeContents(p), l.setStart(s.endContainer, s.endOffset);
							const y = l.toString(),
								$ = p.innerText.trim(),
								v = y.trim(),
								S = v === "",
								I = $.length === $.length - v.length;
							return S && I;
						}
					} catch {}
					return !1;
				}
				const u = () => i.$Bfb.vscodeWindowId !== t.$Ogb()?.vscodeWindowId;
				e.$Kac = u;
				const a = async (p) => {
					const o = await p.getInstalled();
					for (const f of o) if (f.identifier.id === "vscodevim.vim") return !0;
					return !1;
				};
				e.$Lac = a;
				const h = (p) => {
					const o = p.statusbarService.getViewModel();
					let f = !1,
						b = !1;
					for (const s of [
						...o.getEntries(w.StatusbarAlignment.LEFT),
						...o.getEntries(w.StatusbarAlignment.RIGHT),
					])
						if (s.id === "vscodevim.vim.primary") {
							(f = !0),
								["NORMAL"].some((l) => s.container.innerText.includes(l)) &&
									(b = !0);
							break;
						}
					return { didFindVimStatusbar: f, isInNormalMode: b };
				};
				e.$Mac = h;
				const c = (p) => {
					const o = p.getGroups(E.GroupsOrder.MOST_RECENTLY_ACTIVE);
					o.length > 1 && o[1].focus();
				};
				e.$Nac = c;
				const n = (p, o, f = {}) => {
					const b = f.maxTries ?? 10,
						s = f.delayMs ?? 300;
					let l = 0;
					const y = () => {
						if (l >= b) return;
						if ((l++, !o.window.document.hasFocus())) {
							setTimeout(y, s);
							return;
						}
						p();
					};
					y();
				};
				e.$Oac = n;
				function g(p) {
					const o = Date.now(),
						f = Math.floor((o - p) / 1e3);
					return f < 60
						? `${f} seconds ago`
						: f < 3600
							? `${Math.floor(f / 60)} minutes ago`
							: f < 86400
								? `${Math.floor(f / 3600)} hours ago`
								: `${Math.floor(f / 86400)} days ago`;
				}
			},
		),
		