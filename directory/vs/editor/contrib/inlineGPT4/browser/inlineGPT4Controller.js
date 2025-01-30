import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editorContextKeys.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../workbench/services/ai/browser/aiService.js';
import '../../../browser/services/inlineGPT4Service.js';
import '../../../common/model.js';
import '../../../../base/common/event.js';
import '../../../common/core/position.js';
import './loading/inlineGPT4LoadingVZ.js';
import './hint/inlineGPT4HintViewZone.js';
import './cancel/inlineGPT4CancelVZ.js';
define(
			de[1344],
			he([1, 0, 3, 71, 5, 45, 118, 2874, 64, 6, 48, 2754, 2753, 2752]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorContextKeys*/,
 w /*instantiation*/,
 E /*reactiveStorageService*/,
 C /*aiService*/,
 d /*inlineGPT4Service*/,
 m /*model*/,
 r /*event*/,
 u /*position*/,
 a /*inlineGPT4LoadingVZ*/,
 h /*inlineGPT4HintViewZone*/,
 c /*inlineGPT4CancelVZ*/) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8dc = void 0);
				let g = class extends t.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.inlineGPT4Controller";
					}
					static get(o) {
						return o.getContribution(n.ID);
					}
					acceptSuggestion() {
						this.inlineGPT4Service.acceptCompletion(this.w), this.s.set(!1);
					}
					rejectSuggestion() {
						this.inlineGPT4Service.rejectCompletion(this.w), this.s.set(!1);
					}
					cancel() {
						this.a?.cancel(), this.t.set(!1);
						for (const o of this.u.values()) o();
						this.u.clear();
					}
					acceptPartialSuggestion() {
						new Error("Method not implemented.");
					}
					rejectPartialSuggestion() {
						throw new Error("Method not implemented.");
					}
					copilotLineAccepted() {
						this.c++,
							(this.f = !0),
							this.b !== void 0 && clearTimeout(this.b),
							(this.b = setTimeout(() => {
								this.c = 0;
							}, 7500)),
							r.Event.once(this.w.onDidChangeModelContent)((s) => {
								this.f = !1;
							});
						const o = this.w.getPosition();
						if (!o) return;
						let f = !1;
						if (o.lineNumber !== this.w.getModel()?.getLineCount()) {
							const s = this.w.getModel()?.getLineContent(o.lineNumber + 1);
							f = !(s && s.length > 0);
						} else f = !0;
						const b = o.lineNumber === this.g + 1;
						this.g = o.lineNumber;
					}
					triggerDiscoveryVZ() {
						const o = this.w.getPosition();
						if (o) {
							for (const [f, b] of this.h)
								if (o.lineNumber - 1 <= f || f <= o.lineNumber + 1) return;
							this.j(o), this.setupOnetimeDiscoveryVZListeners(o);
						}
					}
					j(o) {
						const f = this.w.getPosition();
						if (!f || f.lineNumber !== o.lineNumber || this.h.has(o.lineNumber))
							return;
						const s = this.y.createInstance(h.$3dc, this.w).getDomNode(),
							l = {
								afterLineNumber: o.lineNumber,
								afterColumn: 80,
								afterColumnAffinity: m.PositionAffinity.Right,
								heightInPx: 0,
								domNode: s,
								suppressMouseDown: !0,
								onDomNodeTop: (y) => {},
							};
						this.w.changeViewZones((y) => {
							const $ = y.addZone(l);
							this.h.set(o.lineNumber, { id: $, vz: l });
						});
					}
					setupOnetimeDiscoveryVZListeners(o) {
						const f = r.Event.chain(this.w.onDidChangeModelContent, (l) =>
							l.filter((y) =>
								y.changes.some(
									($) =>
										!!$.text.startsWith(`
`),
								),
							),
						);
						this.D(
							r.Event.once(f)(() => {
								const l = new u.$hL(o.lineNumber + 1, 1);
								o.lineNumber === this.g &&
									(this.j(l), this.setupOnetimeDiscoveryVZListeners(l));
							}),
						);
						const b = new Date().getTime(),
							s = r.Event.chain(this.w.onDidChangeCursorPosition, (l) =>
								l.filter((y) => {
									const $ = new Date().getTime();
									return !(
										y.position.lineNumber === o.lineNumber && $ - b < 2e3
									);
								}),
							);
						this.D(
							r.Event.once(s)(() => {
								this.m(o);
							}),
						);
					}
					m(o) {
						if (o) {
							const f = this.h.get(o.lineNumber);
							if (!f) return;
							this.w.changeViewZones((b) => {
								b.removeZone(f.id);
							}),
								this.h.delete(o.lineNumber);
						} else
							this.w.changeViewZones((f) => {
								for (const [b, s] of this.h) f.removeZone(s.id);
							}),
								this.h.clear();
						this.b !== void 0 && clearTimeout(this.b);
					}
					async triggerExplicitly() {}
					triggerGPT4LoadingViewZone(o) {
						const f = this.w.getPosition();
						if (!f) return;
						const s = this.y.createInstance(a.$Ydc, this.w).getDomNode();
						this.w.changeViewZones((l) => {
							const y = l.addZone({
								afterLineNumber: f.lineNumber,
								afterColumnAffinity: m.PositionAffinity.Left,
								heightInPx: 12,
								domNode: s,
								suppressMouseDown: !0,
								onDomNodeTop: ($) => {},
							});
							this.n.set(o, y);
						});
					}
					cancelGPT4LoadingViewZone(o) {
						if (!this.w.getPosition()) return;
						const b = this.n.get(o);
						b &&
							this.w.changeViewZones((s) => {
								s.removeZone(b);
							});
					}
					attachGPT4LoadingVZListeners(o) {
						const f = r.Event.chain(this.w.onDidChangeCursorPosition, (s) =>
								s.filter((l) => !this.t.get()),
							),
							b = { current: void 0 };
						b.current = r.Event.once(f)((s) => {
							o(), b.current?.dispose();
						});
					}
					triggerGPT4CancelViewZone(o, f, b) {
						const s = () => {
								this.cancel();
							},
							l = b.contentWidth,
							$ = this.y.createInstance(c.$7dc, this.w, s, l).getDomNode();
						this.w.changeViewZones((v) => {
							const S = v.addZone({
								afterLineNumber: f.lineNumber - 1,
								afterColumnAffinity: m.PositionAffinity.Right,
								heightInPx: 1,
								domNode: $,
								suppressMouseDown: !0,
								onDomNodeTop: (I) => {},
							});
							this.q.set(o, S);
						});
					}
					cancelGPT4CancelViewZone(o) {
						const f = this.q.get(o);
						f &&
							this.w.changeViewZones((b) => {
								b.removeZone(f);
							});
					}
					attachGPT4CancelVZListeners(o) {
						const f = this.w.onDidChangeModelContent((b) => {
							o();
						});
						this.D(f);
					}
					constructor(o, f, b, s, l) {
						super(),
							(this.w = o),
							(this.y = f),
							(this.z = b),
							(this.aiService = s),
							(this.inlineGPT4Service = l),
							(this.a = null),
							(this.b = null),
							(this.c = 0),
							(this.f = !1),
							(this.g = 0),
							(this.h = new Map()),
							(this.n = new Map()),
							(this.q = new Map()),
							(this.u = new Map()),
							(this.r = this.D(this.z.createScoped(this))),
							(this.s = i.EditorContextKeys.hasGPT4InlineCompletion.bindTo(
								this.w.contextKeyService,
							)),
							(this.t = i.EditorContextKeys.hasGPT4ActivelyGenerating.bindTo(
								this.w.contextKeyService,
							));
					}
				};
				(e.$8dc = g),
					(e.$8dc =
						g =
						n =
							Ne([j(1, w.$Li), j(2, E.$0zb), j(3, C.$Nfc), j(4, d.$Udc)], g));
			},
		),
		