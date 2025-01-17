import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/characterClassifier.js';
import '../../../common/languages.js';
import './provideSignatureHelp.js';
define(
			de[1608],
			he([1, 0, 15, 29, 6, 3, 38, 654, 74, 1182]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7jc = void 0),
					(m = mt(m));
				var u;
				(function (c) {
					let n;
					(function (o) {
						(o[(o.Default = 0)] = "Default"),
							(o[(o.Active = 1)] = "Active"),
							(o[(o.Pending = 2)] = "Pending");
					})((n = c.Type || (c.Type = {}))),
						(c.Default = { type: n.Default });
					class g {
						constructor(f, b) {
							(this.request = f),
								(this.previouslyActiveHints = b),
								(this.type = n.Pending);
						}
					}
					c.Pending = g;
					class p {
						constructor(f) {
							(this.hints = f), (this.type = n.Active);
						}
					}
					c.Active = p;
				})(u || (u = {}));
				class a extends E.$1c {
					static {
						this.a = 120;
					}
					constructor(n, g, p = a.a) {
						super(),
							(this.b = this.D(new w.$re())),
							(this.onChangedHints = this.b.event),
							(this.g = !1),
							(this.h = u.Default),
							(this.j = []),
							(this.m = this.D(new E.$2c())),
							(this.n = new d.$OL()),
							(this.q = new d.$OL()),
							(this.s = 0),
							(this.c = n),
							(this.f = g),
							(this.r = new t.$Jh(p)),
							this.D(this.c.onDidBlurEditorWidget(() => this.cancel())),
							this.D(this.c.onDidChangeConfiguration(() => this.I())),
							this.D(this.c.onDidChangeModel((o) => this.C())),
							this.D(this.c.onDidChangeModelLanguage((o) => this.C())),
							this.D(this.c.onDidChangeCursorSelection((o) => this.G(o))),
							this.D(this.c.onDidChangeModelContent((o) => this.H())),
							this.D(this.f.onDidChange(this.C, this)),
							this.D(this.c.onDidType((o) => this.F(o))),
							this.I(),
							this.C();
					}
					get t() {
						return this.h;
					}
					set t(n) {
						this.h.type === u.Type.Pending && this.h.request.cancel(),
							(this.h = n);
					}
					cancel(n = !1) {
						(this.t = u.Default), this.r.cancel(), n || this.b.fire(void 0);
					}
					trigger(n, g) {
						const p = this.c.getModel();
						if (!p || !this.f.has(p)) return;
						const o = ++this.s;
						this.j.push(n), this.r.trigger(() => this.w(o), g).catch(i.$4);
					}
					next() {
						if (this.t.type !== u.Type.Active) return;
						const n = this.t.hints.signatures.length,
							g = this.t.hints.activeSignature,
							p = g % n === n - 1,
							o = this.c.getOption(C.EditorOption.parameterHints).cycle;
						if ((n < 2 || p) && !o) {
							this.cancel();
							return;
						}
						this.u(p && o ? 0 : g + 1);
					}
					previous() {
						if (this.t.type !== u.Type.Active) return;
						const n = this.t.hints.signatures.length,
							g = this.t.hints.activeSignature,
							p = g === 0,
							o = this.c.getOption(C.EditorOption.parameterHints).cycle;
						if ((n < 2 || p) && !o) {
							this.cancel();
							return;
						}
						this.u(p && o ? n - 1 : g - 1);
					}
					u(n) {
						this.t.type === u.Type.Active &&
							((this.t = new u.Active({ ...this.t.hints, activeSignature: n })),
							this.b.fire(this.t.hints));
					}
					async w(n) {
						const g =
								this.t.type === u.Type.Active || this.t.type === u.Type.Pending,
							p = this.y();
						if ((this.cancel(!0), this.j.length === 0)) return !1;
						const o = this.j.reduce(h);
						this.j = [];
						const f = {
							triggerKind: o.triggerKind,
							triggerCharacter: o.triggerCharacter,
							isRetrigger: g,
							activeSignatureHelp: p,
						};
						if (!this.c.hasModel()) return !1;
						const b = this.c.getModel(),
							s = this.c.getPosition();
						this.t = new u.Pending(
							(0, t.$zh)((l) => (0, r.$6jc)(this.f, b, s, f, l)),
							p,
						);
						try {
							const l = await this.t.request;
							return n !== this.s
								? (l?.dispose(), !1)
								: !l || !l.value.signatures || l.value.signatures.length === 0
									? (l?.dispose(), this.m.clear(), this.cancel(), !1)
									: ((this.t = new u.Active(l.value)),
										(this.m.value = l),
										this.b.fire(this.t.hints),
										!0);
						} catch (l) {
							return n === this.s && (this.t = u.Default), (0, i.$4)(l), !1;
						}
					}
					y() {
						switch (this.t.type) {
							case u.Type.Active:
								return this.t.hints;
							case u.Type.Pending:
								return this.t.previouslyActiveHints;
							default:
								return;
						}
					}
					get z() {
						return (
							this.t.type === u.Type.Active ||
							this.t.type === u.Type.Pending ||
							this.r.isTriggered()
						);
					}
					C() {
						this.cancel(), this.n.clear(), this.q.clear();
						const n = this.c.getModel();
						if (n)
							for (const g of this.f.ordered(n)) {
								for (const p of g.signatureHelpTriggerCharacters || [])
									if (p.length) {
										const o = p.charCodeAt(0);
										this.n.add(o), this.q.add(o);
									}
								for (const p of g.signatureHelpRetriggerCharacters || [])
									p.length && this.q.add(p.charCodeAt(0));
							}
					}
					F(n) {
						if (!this.g) return;
						const g = n.length - 1,
							p = n.charCodeAt(g);
						(this.n.has(p) || (this.z && this.q.has(p))) &&
							this.trigger({
								triggerKind: m.SignatureHelpTriggerKind.TriggerCharacter,
								triggerCharacter: n.charAt(g),
							});
					}
					G(n) {
						n.source === "mouse"
							? this.cancel()
							: this.z &&
								this.trigger({
									triggerKind: m.SignatureHelpTriggerKind.ContentChange,
								});
					}
					H() {
						this.z &&
							this.trigger({
								triggerKind: m.SignatureHelpTriggerKind.ContentChange,
							});
					}
					I() {
						(this.g = this.c.getOption(C.EditorOption.parameterHints).enabled),
							this.g || this.cancel();
					}
					dispose() {
						this.cancel(!0), super.dispose();
					}
				}
				e.$7jc = a;
				function h(c, n) {
					switch (n.triggerKind) {
						case m.SignatureHelpTriggerKind.Invoke:
							return n;
						case m.SignatureHelpTriggerKind.ContentChange:
							return c;
						case m.SignatureHelpTriggerKind.TriggerCharacter:
						default:
							return n;
					}
				}
			},
		),
		