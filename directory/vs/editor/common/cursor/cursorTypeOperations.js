import '../../../../require.js';
import '../../../../exports.js';
import '../commands/shiftCommand.js';
import '../commands/surroundSelectionCommand.js';
import '../cursorCommon.js';
import './cursorTypeEditOperations.js';
define(
			de[949],
			he([1, 0, 771, 1527, 346, 948]),
			function (ce /*require*/,
 e /*exports*/,
 t /*shiftCommand*/,
 i /*surroundSelectionCommand*/,
 w /*cursorCommon*/,
 E /*cursorTypeEditOperations*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_tb = e.$$tb = void 0);
				class C {
					static indent(r, u, a) {
						if (u === null || a === null) return [];
						const h = [];
						for (let c = 0, n = a.length; c < n; c++)
							h[c] = new t.$Rtb(
								a[c],
								{
									isUnshift: !1,
									tabSize: r.tabSize,
									indentSize: r.indentSize,
									insertSpaces: r.insertSpaces,
									useTabStops: r.useTabStops,
									autoIndent: r.autoIndent,
								},
								r.languageConfigurationService,
							);
						return h;
					}
					static outdent(r, u, a) {
						const h = [];
						for (let c = 0, n = a.length; c < n; c++)
							h[c] = new t.$Rtb(
								a[c],
								{
									isUnshift: !0,
									tabSize: r.tabSize,
									indentSize: r.indentSize,
									insertSpaces: r.insertSpaces,
									useTabStops: r.useTabStops,
									autoIndent: r.autoIndent,
								},
								r.languageConfigurationService,
							);
						return h;
					}
					static shiftIndent(r, u, a) {
						return (0, E.$8tb)(r, u, a);
					}
					static unshiftIndent(r, u, a) {
						return (0, E.$9tb)(r, u, a);
					}
					static paste(r, u, a, h, c, n) {
						return E.$3tb.getEdits(r, u, a, h, c, n);
					}
					static tab(r, u, a) {
						return E.$6tb.getCommands(r, u, a);
					}
					static compositionType(r, u, a, h, c, n, g, p) {
						return E.$4tb.getEdits(r, u, a, h, c, n, g, p);
					}
					static compositionEndWithInterceptors(r, u, a, h, c, n) {
						if (!h) return null;
						let g = null;
						for (const s of h)
							if (g === null) g = s.insertedText;
							else if (g !== s.insertedText) return null;
						if (!g || g.length !== 1) return null;
						const p = g;
						let o = !1;
						for (const s of h)
							if (s.deletedText.length !== 0) {
								o = !0;
								break;
							}
						if (o) {
							if (!(0, E.$0tb)(u, p) || !u.surroundingPairs.hasOwnProperty(p))
								return null;
							const s = (0, w.$Dsb)(p);
							for (const $ of h)
								if (
									$.deletedSelectionStart !== 0 ||
									$.deletedSelectionEnd !== $.deletedText.length ||
									/^[ \t]+$/.test($.deletedText) ||
									(s && (0, w.$Dsb)($.deletedText))
								)
									return null;
							const l = [];
							for (const $ of c) {
								if (!$.isEmpty()) return null;
								l.push($.getPosition());
							}
							if (l.length !== h.length) return null;
							const y = [];
							for (let $ = 0, v = l.length; $ < v; $++)
								y.push(
									new i.$Ttb(l[$], h[$].deletedText, u.surroundingPairs[p]),
								);
							return new w.$Csb(w.EditOperationType.TypingOther, y, {
								shouldPushStackElementBefore: !0,
								shouldPushStackElementAfter: !1,
							});
						}
						const f = E.$Wtb.getEdits(u, a, c, n, p);
						if (f !== void 0) return f;
						const b = E.$Xtb.getEdits(u, a, c, p, !0, !1);
						return b !== void 0 ? b : null;
					}
					static typeWithInterceptors(r, u, a, h, c, n, g) {
						const p = E.$2tb.getEdits(a, h, c, g, r);
						if (p !== void 0) return p;
						const o = E.$Utb.getEdits(a, h, c, g, r);
						if (o !== void 0) return o;
						const f = E.$Vtb.getEdits(u, a, h, c, n, g);
						if (f !== void 0) return f;
						const b = E.$Xtb.getEdits(a, h, c, g, !1, r);
						if (b !== void 0) return b;
						const s = E.$Ytb.getEdits(a, h, c, g, r);
						if (s !== void 0) return s;
						const l = E.$Ztb.getEdits(u, a, h, c, g, r);
						return l !== void 0 ? l : E.$1tb.getEdits(u, c, g);
					}
					static typeWithoutInterceptors(r, u, a, h, c) {
						return E.$5tb.getEdits(r, h, c);
					}
				}
				e.$$tb = C;
				class d {
					constructor(r, u, a, h, c, n) {
						(this.deletedText = r),
							(this.deletedSelectionStart = u),
							(this.deletedSelectionEnd = a),
							(this.insertedText = h),
							(this.insertedSelectionStart = c),
							(this.insertedSelectionEnd = n);
					}
				}
				e.$_tb = d;
			},
		)
