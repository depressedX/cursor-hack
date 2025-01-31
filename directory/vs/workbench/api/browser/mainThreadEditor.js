import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../editor/common/config/editorOptions.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/core/selection.js';
import '../../../editor/common/editorCommon.js';
import '../../../editor/contrib/snippet/browser/snippetController2.js';
import '../common/extHost.protocol.js';
import '../../../base/common/arrays.js';
import '../../../editor/contrib/editorState/browser/editorState.js';
import '../../../editor/contrib/snippet/browser/snippetParser.js';
define(
			de[1820],
			he([1, 0, 6, 3, 38, 17, 104, 98, 254, 88, 24, 439, 389]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*editorOptions*/,
 E /*range*/,
 C /*selection*/,
 d /*editorCommon*/,
 m /*snippetController2*/,
 r /*extHost.protocol*/,
 u /*arrays*/,
 a /*editorState*/,
 h /*snippetParser*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6mc = e.$5mc = void 0);
				class c {
					static readFromEditor(p, o, f) {
						const b = c.c(p, f),
							s = c.d(p, o, f),
							l = c.f(p, f);
						return new c(b, s, l);
					}
					static c(p, o) {
						let f = null;
						return (
							o && (f = o.getSelections()),
							!f && p && (f = p.selections),
							f || (f = [new C.$kL(1, 1, 1, 1)]),
							f
						);
					}
					static d(p, o, f) {
						if (o.isDisposed()) {
							if (p) return p.options;
							throw new Error("No valid properties");
						}
						let b, s;
						if (f) {
							const y = f.getOptions(),
								$ = y.get(w.EditorOption.lineNumbers);
							(b = y.get(w.EditorOption.cursorStyle)), (s = $.renderType);
						} else
							p
								? ((b = p.options.cursorStyle), (s = p.options.lineNumbers))
								: ((b = w.TextEditorCursorStyle.Line),
									(s = w.RenderLineNumbersType.On));
						const l = o.getOptions();
						return {
							insertSpaces: l.insertSpaces,
							tabSize: l.tabSize,
							indentSize: l.indentSize,
							originalIndentSize: l.originalIndentSize,
							cursorStyle: b,
							lineNumbers: s,
						};
					}
					static f(p, o) {
						return o ? o.getVisibleRanges() : [];
					}
					constructor(p, o, f) {
						(this.selections = p), (this.options = o), (this.visibleRanges = f);
					}
					generateDelta(p, o) {
						const f = { options: null, selections: null, visibleRanges: null };
						return (
							(!p || !c.g(p.selections, this.selections)) &&
								(f.selections = {
									selections: this.selections,
									source: o ?? void 0,
								}),
							(!p || !c.j(p.options, this.options)) &&
								(f.options = this.options),
							(!p || !c.h(p.visibleRanges, this.visibleRanges)) &&
								(f.visibleRanges = this.visibleRanges),
							f.selections || f.options || f.visibleRanges ? f : null
						);
					}
					static g(p, o) {
						return (0, u.$yb)(p, o, (f, b) => f.equalsSelection(b));
					}
					static h(p, o) {
						return (0, u.$yb)(p, o, (f, b) => f.equalsRange(b));
					}
					static j(p, o) {
						return (p && !o) || (!p && o)
							? !1
							: !p && !o
								? !0
								: p.tabSize === o.tabSize &&
									p.indentSize === o.indentSize &&
									p.insertSpaces === o.insertSpaces &&
									p.cursorStyle === o.cursorStyle &&
									p.lineNumbers === o.lineNumbers;
					}
				}
				e.$5mc = c;
				class n {
					constructor(p, o, f, b, s, l, y) {
						(this.j = new i.$Zc()),
							(this.m = new i.$Zc()),
							(this.c = p),
							(this.d = o),
							(this.k = null),
							(this.n = null),
							(this.l = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.o = new t.$re()),
							this.j.add(
								this.d.onDidChangeOptions(($) => {
									this.p(null);
								}),
							),
							this.setCodeEditor(f),
							this.p(null);
					}
					dispose() {
						this.j.dispose(), (this.k = null), this.m.dispose();
					}
					p(p) {
						this.q(c.readFromEditor(this.n, this.d, this.k), p);
					}
					q(p, o) {
						const f = p.generateDelta(this.n, o);
						(this.n = p), f && this.o.fire(f);
					}
					getId() {
						return this.c;
					}
					getModel() {
						return this.d;
					}
					getCodeEditor() {
						return this.k;
					}
					hasCodeEditor(p) {
						return this.k === p;
					}
					setCodeEditor(p) {
						if (
							!this.hasCodeEditor(p) &&
							(this.m.clear(), (this.k = p), this.k)
						) {
							this.m.add(
								this.k.onDidChangeModel(() => {
									this.setCodeEditor(null);
								}),
							),
								this.m.add(
									this.k.onDidFocusEditorWidget(() => {
										this.l.onGainedFocus();
									}),
								),
								this.m.add(
									this.k.onDidBlurEditorWidget(() => {
										this.l.onLostFocus();
									}),
								);
							let o = null;
							this.m.add(
								this.f.onIsCaughtUpWithContentChanges((s) => {
									if (s.toString() === this.d.uri.toString()) {
										const l = o;
										(o = null), this.p(l);
									}
								}),
							);
							const f = () => this.k && this.k.getModel() === this.d,
								b = (s) => {
									this.f.isCaughtUpWithContentChanges(this.d.uri)
										? ((o = null), this.p(s))
										: (o = s);
								};
							this.m.add(
								this.k.onDidChangeCursorSelection((s) => {
									f() && b(s.source);
								}),
							),
								this.m.add(
									this.k.onDidChangeConfiguration((s) => {
										f() && b(null);
									}),
								),
								this.m.add(
									this.k.onDidLayoutChange(() => {
										f() && b(null);
									}),
								),
								this.m.add(
									this.k.onDidScrollChange(() => {
										f() && b(null);
									}),
								),
								this.p(null);
						}
					}
					isVisible() {
						return !!this.k;
					}
					getProperties() {
						return this.n;
					}
					get onPropertiesChanged() {
						return this.o.event;
					}
					setSelections(p) {
						if (this.k) {
							this.k.setSelections(p);
							return;
						}
						const o = p.map(C.$kL.liftSelection);
						this.q(new c(o, this.n.options, this.n.visibleRanges), null);
					}
					r(p) {
						const o = this.g.getCreationOptions(
							this.d.getLanguageId(),
							this.d.uri,
							this.d.isForSimpleWidget,
						);
						if (p.tabSize === "auto" || p.insertSpaces === "auto") {
							let b = o.insertSpaces,
								s = o.tabSize;
							p.insertSpaces !== "auto" &&
								typeof p.insertSpaces < "u" &&
								(b = p.insertSpaces),
								p.tabSize !== "auto" &&
									typeof p.tabSize < "u" &&
									(s = p.tabSize),
								this.d.detectIndentation(b, s);
							return;
						}
						const f = {};
						typeof p.insertSpaces < "u" && (f.insertSpaces = p.insertSpaces),
							typeof p.tabSize < "u" && (f.tabSize = p.tabSize),
							typeof p.indentSize < "u" && (f.indentSize = p.indentSize),
							this.d.updateOptions(f);
					}
					setConfiguration(p) {
						if ((this.r(p), !!this.k)) {
							if (p.cursorStyle) {
								const o = (0, w.cursorStyleToString)(p.cursorStyle);
								this.k.updateOptions({ cursorStyle: o });
							}
							if (typeof p.lineNumbers < "u") {
								let o;
								switch (p.lineNumbers) {
									case w.RenderLineNumbersType.On:
										o = "on";
										break;
									case w.RenderLineNumbersType.Relative:
										o = "relative";
										break;
									case w.RenderLineNumbersType.Interval:
										o = "interval";
										break;
									default:
										o = "off";
								}
								this.k.updateOptions({ lineNumbers: o });
							}
						}
					}
					setDecorations(p, o) {
						this.k && this.k.setDecorationsByType("exthost-api", p, o);
					}
					setDecorationsFast(p, o) {
						if (!this.k) return;
						const f = [];
						for (let b = 0, s = Math.floor(o.length / 4); b < s; b++)
							f[b] = new E.$iL(
								o[4 * b],
								o[4 * b + 1],
								o[4 * b + 2],
								o[4 * b + 3],
							);
						this.k.setDecorationsByTypeFast(p, f);
					}
					revealRange(p, o) {
						if (this.k)
							switch (o) {
								case r.TextEditorRevealType.Default:
									this.k.revealRange(p, d.ScrollType.Smooth);
									break;
								case r.TextEditorRevealType.InCenter:
									this.k.revealRangeInCenter(p, d.ScrollType.Smooth);
									break;
								case r.TextEditorRevealType.InCenterIfOutsideViewport:
									this.k.revealRangeInCenterIfOutsideViewport(
										p,
										d.ScrollType.Smooth,
									);
									break;
								case r.TextEditorRevealType.AtTop:
									this.k.revealRangeAtTop(p, d.ScrollType.Smooth);
									break;
								default:
									console.warn(`Unknown revealType: ${o}`);
									break;
							}
					}
					isFocused() {
						return this.k ? this.k.hasTextFocus() : !1;
					}
					matches(p) {
						return p ? p.getControl() === this.k : !1;
					}
					applyEdits(p, o, f) {
						if (this.d.getVersionId() !== p || !this.k) return !1;
						typeof f.setEndOfLine < "u" && this.d.pushEOL(f.setEndOfLine);
						const b = o.map((s) => ({
							range: E.$iL.lift(s.range),
							text: s.text,
							forceMoveMarkers: s.forceMoveMarkers,
						}));
						return (
							f.undoStopBefore && this.k.pushUndoStop(),
							this.k.executeEdits("MainThreadTextEditor", b),
							f.undoStopAfter && this.k.pushUndoStop(),
							!0
						);
					}
					async insertSnippet(p, o, f, b) {
						if (!this.k || !this.k.hasModel()) return !1;
						let s;
						if (h.$Izb.guessNeedsClipboard(o)) {
							const v = new a.$Mzb(
								this.k,
								a.CodeEditorStateFlag.Value | a.CodeEditorStateFlag.Position,
							);
							if (((s = await this.h.readText()), !v.validate(this.k)))
								return !1;
						}
						if (this.k.getModel().getVersionId() !== p) return !1;
						const y = m.$aDb.get(this.k);
						if (!y) return !1;
						this.k.focus();
						const $ = f.map((v) => ({ range: E.$iL.lift(v), template: o }));
						return (
							y.apply($, {
								overwriteBefore: 0,
								overwriteAfter: 0,
								undoStopBefore: b.undoStopBefore,
								undoStopAfter: b.undoStopAfter,
								clipboardText: s,
							}),
							!0
						);
					}
				}
				e.$6mc = n;
			},
		)
