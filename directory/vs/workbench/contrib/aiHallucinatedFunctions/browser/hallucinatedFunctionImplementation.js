import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/uuid.js';
define(de[2972], he([1, 0, 13, 47]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*uuid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Mcc = void 0);
			class w {
				constructor(C, d, m) {
					(this.source = C),
						(this.taskUuid = d),
						(this.delegate = m),
						(this.uuid = (0, i.$9g)()),
						(this.a = (0, t.createSignal)(void 0)),
						(this.b = (0, t.createSignal)(void 0)),
						(this.c = (0, t.createSignal)(void 0)),
						(this.d = (0, t.createSignal)(void 0)),
						(this.e = (0, t.createSignal)(!1)),
						(this.g = (0, t.createSignal)("none")),
						(this.h = (0, t.createSignal)("none")),
						(this.i = (0, t.createSignal)(void 0)),
						(this.j = (0, t.createSignal)("none")),
						(this.k = (0, t.createSignal)(!1)),
						(this.l = (0, t.createSignal)(void 0)),
						(this.m = (0, t.createSignal)(void 0)),
						(this.n = (0, t.createSignal)(void 0));
				}
				getPlan() {
					return (0, t.untrack)(() => this.a[0]());
				}
				getPlanReactive() {
					return this.a[0]();
				}
				setPlan(C) {
					this.a[1](C);
				}
				getPlanGenerationUUID() {
					return (0, t.untrack)(() => this.b[0]());
				}
				getPlanGenerationUUIDReactive() {
					return this.b[0]();
				}
				setPlanGenerationUUID(C) {
					this.b[1](C);
				}
				getImplementationGenerationUUID() {
					return (0, t.untrack)(() => this.c[0]());
				}
				getImplementationGenerationUUIDReactive() {
					return this.c[0]();
				}
				setImplementationGenerationUUID(C) {
					this.c[1](C);
				}
				getReflectionGenerationUUID() {
					return (0, t.untrack)(() => this.d[0]());
				}
				getReflectionGenerationUUIDReactive() {
					return this.d[0]();
				}
				setReflectionGenerationUUID(C) {
					this.d[1](C);
				}
				getIsEditable() {
					return (0, t.untrack)(() => this.e[0]());
				}
				getIsEditableReactive() {
					return this.e[0]();
				}
				f(C) {
					this.e[1](C);
				}
				setHasBeenShown() {
					this.getImplementationStatus() === "finished" && this.f(!0);
				}
				getPlanStatus() {
					return (0, t.untrack)(() => this.g[0]());
				}
				getPlanStatusReactive() {
					return this.g[0]();
				}
				setPlanStatus(C) {
					this.g[1](C);
				}
				getReflectionStatus() {
					return (0, t.untrack)(() => this.h[0]());
				}
				getReflectionStatusReactive() {
					return this.h[0]();
				}
				setReflectionStatus(C) {
					this.h[1](C);
				}
				getImplementation() {
					return (0, t.untrack)(() => this.i[0]());
				}
				getImplementationReactive() {
					return this.i[0]();
				}
				setImplementation(C) {
					this.i[1](C);
				}
				getImplementationStatus() {
					return (0, t.untrack)(() => this.j[0]());
				}
				getImplementationStatusReactive() {
					return this.j[0]();
				}
				setImplementationStatus(C) {
					this.j[1](C), C === "finished" && this.delegate.onDidFinish();
				}
				getIsRejected() {
					return (0, t.untrack)(() => this.k[0]());
				}
				getIsRejectedReactive() {
					return this.k[0]();
				}
				setIsRejected(C) {
					this.k[1](C);
				}
				getLints() {
					return (0, t.untrack)(() => this.l[0]());
				}
				getLintsReactive() {
					return this.l[0]();
				}
				setLints(C) {
					this.l[1](C);
				}
				getReflection() {
					return (0, t.untrack)(() => this.m[0]());
				}
				getReflectionReactive() {
					return this.m[0]();
				}
				setReflection(C) {
					this.m[1](C);
				}
				getReflectionDecision() {
					return (0, t.untrack)(() => this.n[0]());
				}
				getReflectionDecisionReactive() {
					return this.n[0]();
				}
				setReflectionDecision(C) {
					this.n[1](C);
				}
			}
			e.$Mcc = w;
		})
