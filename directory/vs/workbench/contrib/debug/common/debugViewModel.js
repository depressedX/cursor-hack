import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import './debug.js';
import './debugUtils.js';
define(de[3055], he([1, 0, 6, 112, 396]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*debug*/,
 w /*debugUtils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$2Qc = void 0);
			class E {
				constructor(d) {
					(this.D = d),
						(this.firstSessionStart = !0),
						(this.e = new t.$re()),
						(this.f = new t.$re()),
						(this.g = new t.$re()),
						(this.h = new t.$re()),
						(this.i = new t.$re()),
						(this.j = new t.$re()),
						(this.k = new t.$re()),
						(this.l = new WeakMap()),
						(this.m = new Map()),
						d.bufferChangeEvents(() => {
							(this.n = i.$c5.bindTo(d)),
								(this.o = i.$o5.bindTo(d)),
								(this.p = i.$s5.bindTo(d)),
								(this.q = i.$q5.bindTo(d)),
								(this.r = i.$r5.bindTo(d)),
								(this.s = i.$t5.bindTo(d)),
								(this.t = i.$w5.bindTo(d)),
								(this.u = i.$v5.bindTo(d)),
								(this.v = i.$B5.bindTo(d)),
								(this.w = i.$C5.bindTo(d)),
								(this.x = i.$D5.bindTo(d)),
								(this.y = i.$T5.bindTo(d)),
								(this.z = i.$H5.bindTo(d)),
								(this.A = i.$I5.bindTo(d)),
								(this.B = i.$U5.bindTo(d)),
								(this.C = i.$X5.bindTo(d));
						});
				}
				getId() {
					return "root";
				}
				get focusedSession() {
					return this.b;
				}
				get focusedThread() {
					return this.c;
				}
				get focusedStackFrame() {
					return this.a;
				}
				setFocus(d, m, r, u) {
					const a = this.a !== d,
						h = this.b !== r,
						c = this.c !== m;
					(this.a = d),
						(this.c = m),
						(this.b = r),
						this.D.bufferChangeEvents(() => {
							this.o.set(!!r?.capabilities.supportsLoadedSourcesRequest),
								this.p.set(!!r?.capabilities.supportsStepBack),
								this.s.set(!!r?.capabilities.supportsRestartFrame),
								this.t.set(!!r?.capabilities.supportsStepInTargetsRequest),
								this.u.set(!!r?.capabilities.supportsGotoTargetsRequest),
								this.v.set(!!r?.capabilities.supportsSetVariable),
								this.w.set(!!r?.capabilities.supportsDataBreakpointBytes),
								this.x.set(!!r?.capabilities.supportsSetExpression),
								this.z.set(!!r?.capabilities.supportTerminateDebuggee),
								this.A.set(!!r?.capabilities.supportSuspendDebuggee),
								this.B.set(!!r?.capabilities.supportsDisassembleRequest),
								this.C.set(!!d?.instructionPointerReference);
							const n = !!r && (0, w.$n3)(r);
							this.q.set(n), this.r.set(!!r && !!r.configuration.noDebug);
						}),
						h && this.e.fire(r),
						a
							? this.g.fire({ stackFrame: d, explicit: u, session: r })
							: c && this.f.fire({ thread: m, explicit: u, session: r });
				}
				get onDidFocusSession() {
					return this.e.event;
				}
				get onDidFocusThread() {
					return this.f.event;
				}
				get onDidFocusStackFrame() {
					return this.g.event;
				}
				get onDidChangeVisualization() {
					return this.k.event;
				}
				getSelectedExpression() {
					return this.d;
				}
				setSelectedExpression(d, m) {
					(this.d = d ? { expression: d, settingWatch: m } : void 0),
						this.n.set(!!d),
						this.h.fire(this.d);
				}
				get onDidSelectExpression() {
					return this.h.event;
				}
				get onDidEvaluateLazyExpression() {
					return this.i.event;
				}
				updateViews() {
					this.j.fire();
				}
				get onWillUpdateViews() {
					return this.j.event;
				}
				isMultiSessionView() {
					return !!this.y.get();
				}
				setMultiSessionView(d) {
					this.y.set(d);
				}
				setVisualizedExpression(d, m) {
					const r = this.l.get(d) || d,
						u = this.E(d);
					m
						? (this.l.set(d, m), this.m.set(u, m.treeId))
						: (this.l.delete(d), this.m.delete(u)),
						this.k.fire({ original: r, replacement: m || d });
				}
				getVisualizedExpression(d) {
					return this.l.get(d) || this.m.get(this.E(d));
				}
				async evaluateLazyExpression(d) {
					await d.evaluateLazy(), this.i.fire(d);
				}
				E(d) {
					return JSON.stringify(
						[d.name, d.type, !!d.memoryReference].join("\0"),
					);
				}
			}
			e.$2Qc = E;
		})
