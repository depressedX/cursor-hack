import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/severity.js';
import '../../../nls.js';
import '../../dialogs/common/dialogs.js';
import '../../instantiation/common/extensions.js';
import '../../notification/common/notification.js';
import './undoRedo.js';
define(
		de[2876],
		he([1, 0, 29, 3, 23, 111, 4, 57, 20, 40, 155]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bvc = void 0),
				(E = xi(E)),
				(C = mt(C));
			const a = !1;
			function h(v) {
				return v.scheme === w.Schemas.file ? v.fsPath : v.path;
			}
			let c = 0;
			class n {
				constructor(S, I, T, P, k, L, D) {
					(this.id = ++c),
						(this.type = u.UndoRedoElementType.Resource),
						(this.actual = S),
						(this.label = S.label),
						(this.confirmBeforeUndo = S.confirmBeforeUndo || !1),
						(this.resourceLabel = I),
						(this.strResource = T),
						(this.resourceLabels = [this.resourceLabel]),
						(this.strResources = [this.strResource]),
						(this.groupId = P),
						(this.groupOrder = k),
						(this.sourceId = L),
						(this.sourceOrder = D),
						(this.isValid = !0);
				}
				setValid(S) {
					this.isValid = S;
				}
				toString() {
					return `[id:${this.id}] [group:${this.groupId}] [${this.isValid ? "  VALID" : "INVALID"}] ${this.actual.constructor.name} - ${this.actual}`;
				}
			}
			var g;
			(function (v) {
				(v[(v.ExternalRemoval = 0)] = "ExternalRemoval"),
					(v[(v.NoParallelUniverses = 1)] = "NoParallelUniverses");
			})(g || (g = {}));
			class p {
				constructor(S, I) {
					(this.resourceLabel = S), (this.reason = I);
				}
			}
			class o {
				constructor() {
					this.a = new Map();
				}
				createMessage() {
					const S = [],
						I = [];
					for (const [, P] of this.a)
						(P.reason === g.ExternalRemoval ? S : I).push(P.resourceLabel);
					const T = [];
					return (
						S.length > 0 && T.push(C.localize(2415, null, S.join(", "))),
						I.length > 0 && T.push(C.localize(2416, null, I.join(", "))),
						T.join(`
`)
					);
				}
				get size() {
					return this.a.size;
				}
				has(S) {
					return this.a.has(S);
				}
				set(S, I) {
					this.a.set(S, I);
				}
				delete(S) {
					return this.a.delete(S);
				}
			}
			class f {
				constructor(S, I, T, P, k, L, D) {
					(this.id = ++c),
						(this.type = u.UndoRedoElementType.Workspace),
						(this.actual = S),
						(this.label = S.label),
						(this.confirmBeforeUndo = S.confirmBeforeUndo || !1),
						(this.resourceLabels = I),
						(this.strResources = T),
						(this.groupId = P),
						(this.groupOrder = k),
						(this.sourceId = L),
						(this.sourceOrder = D),
						(this.removedResources = null),
						(this.invalidatedResources = null);
				}
				canSplit() {
					return typeof this.actual.split == "function";
				}
				removeResource(S, I, T) {
					this.removedResources || (this.removedResources = new o()),
						this.removedResources.has(I) ||
							this.removedResources.set(I, new p(S, T));
				}
				setValid(S, I, T) {
					T
						? this.invalidatedResources &&
							(this.invalidatedResources.delete(I),
							this.invalidatedResources.size === 0 &&
								(this.invalidatedResources = null))
						: (this.invalidatedResources ||
								(this.invalidatedResources = new o()),
							this.invalidatedResources.has(I) ||
								this.invalidatedResources.set(I, new p(S, g.ExternalRemoval)));
				}
				toString() {
					return `[id:${this.id}] [group:${this.groupId}] [${this.invalidatedResources ? "INVALID" : "  VALID"}] ${this.actual.constructor.name} - ${this.actual}`;
				}
			}
			class b {
				constructor(S, I) {
					(this.resourceLabel = S),
						(this.a = I),
						(this.b = []),
						(this.c = []),
						(this.locked = !1),
						(this.versionId = 1);
				}
				dispose() {
					for (const S of this.b)
						S.type === u.UndoRedoElementType.Workspace &&
							S.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					for (const S of this.c)
						S.type === u.UndoRedoElementType.Workspace &&
							S.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					this.versionId++;
				}
				toString() {
					const S = [];
					S.push(`* ${this.a}:`);
					for (let I = 0; I < this.b.length; I++)
						S.push(`   * [UNDO] ${this.b[I].toString()}`);
					for (let I = this.c.length - 1; I >= 0; I--)
						S.push(`   * [REDO] ${this.c[I].toString()}`);
					return S.join(`
`);
				}
				flushAllElements() {
					(this.b = []), (this.c = []), this.versionId++;
				}
				setElementsIsValid(S) {
					for (const I of this.b)
						I.type === u.UndoRedoElementType.Workspace
							? I.setValid(this.resourceLabel, this.a, S)
							: I.setValid(S);
					for (const I of this.c)
						I.type === u.UndoRedoElementType.Workspace
							? I.setValid(this.resourceLabel, this.a, S)
							: I.setValid(S);
				}
				d(S, I) {
					S.type === u.UndoRedoElementType.Workspace
						? S.setValid(this.resourceLabel, this.a, I)
						: S.setValid(I);
				}
				setElementsValidFlag(S, I) {
					for (const T of this.b) I(T.actual) && this.d(T, S);
					for (const T of this.c) I(T.actual) && this.d(T, S);
				}
				pushElement(S) {
					for (const I of this.c)
						I.type === u.UndoRedoElementType.Workspace &&
							I.removeResource(
								this.resourceLabel,
								this.a,
								g.NoParallelUniverses,
							);
					(this.c = []), this.b.push(S), this.versionId++;
				}
				createSnapshot(S) {
					const I = [];
					for (let T = 0, P = this.b.length; T < P; T++) I.push(this.b[T].id);
					for (let T = this.c.length - 1; T >= 0; T--) I.push(this.c[T].id);
					return new u.$HN(S, I);
				}
				restoreSnapshot(S) {
					const I = S.elements.length;
					let T = !0,
						P = 0,
						k = -1;
					for (let D = 0, M = this.b.length; D < M; D++, P++) {
						const N = this.b[D];
						T && (P >= I || N.id !== S.elements[P]) && ((T = !1), (k = 0)),
							!T &&
								N.type === u.UndoRedoElementType.Workspace &&
								N.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					}
					let L = -1;
					for (let D = this.c.length - 1; D >= 0; D--, P++) {
						const M = this.c[D];
						T && (P >= I || M.id !== S.elements[P]) && ((T = !1), (L = D)),
							!T &&
								M.type === u.UndoRedoElementType.Workspace &&
								M.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					}
					k !== -1 && (this.b = this.b.slice(0, k)),
						L !== -1 && (this.c = this.c.slice(L + 1)),
						this.versionId++;
				}
				getElements() {
					const S = [],
						I = [];
					for (const T of this.b) S.push(T.actual);
					for (const T of this.c) I.push(T.actual);
					return { past: S, future: I };
				}
				getClosestPastElement() {
					return this.b.length === 0 ? null : this.b[this.b.length - 1];
				}
				getSecondClosestPastElement() {
					return this.b.length < 2 ? null : this.b[this.b.length - 2];
				}
				getClosestFutureElement() {
					return this.c.length === 0 ? null : this.c[this.c.length - 1];
				}
				hasPastElements() {
					return this.b.length > 0;
				}
				hasFutureElements() {
					return this.c.length > 0;
				}
				splitPastWorkspaceElement(S, I) {
					for (let T = this.b.length - 1; T >= 0; T--)
						if (this.b[T] === S) {
							I.has(this.a) ? (this.b[T] = I.get(this.a)) : this.b.splice(T, 1);
							break;
						}
					this.versionId++;
				}
				splitFutureWorkspaceElement(S, I) {
					for (let T = this.c.length - 1; T >= 0; T--)
						if (this.c[T] === S) {
							I.has(this.a) ? (this.c[T] = I.get(this.a)) : this.c.splice(T, 1);
							break;
						}
					this.versionId++;
				}
				moveBackward(S) {
					this.b.pop(), this.c.push(S), this.versionId++;
				}
				moveForward(S) {
					this.c.pop(), this.b.push(S), this.versionId++;
				}
				rebase(S, I, T, P, k, L, D) {
					for (const M of [...this.b])
						M.type === u.UndoRedoElementType.Resource &&
							M.actual.type === u.UndoRedoElementType.Resource &&
							M.actual.rebase(S, I, T, !0, P, k, L, D);
					for (const M of [...this.c])
						M.type === u.UndoRedoElementType.Resource &&
							M.actual.type === u.UndoRedoElementType.Resource &&
							M.actual.rebase(S, I, T, !1, P, k, L, D);
				}
			}
			class s {
				constructor(S) {
					(this.editStacks = S), (this.a = []);
					for (let I = 0, T = this.editStacks.length; I < T; I++)
						this.a[I] = this.editStacks[I].versionId;
				}
				isValid() {
					for (let S = 0, I = this.editStacks.length; S < I; S++)
						if (this.a[S] !== this.editStacks[S].versionId) return !1;
					return !0;
				}
			}
			const l = new b("", "");
			l.locked = !0;
			let y = class {
				constructor(S, I) {
					(this.c = S), (this.d = I), (this.a = new Map()), (this.b = []);
				}
				registerUriComparisonKeyComputer(S, I) {
					return (
						this.b.push([S, I]),
						{
							dispose: () => {
								for (let T = 0, P = this.b.length; T < P; T++)
									if (this.b[T][1] === I) {
										this.b.splice(T, 1);
										return;
									}
							},
						}
					);
				}
				getUriComparisonKey(S) {
					for (const I of this.b)
						if (I[0] === S.scheme) return I[1].getComparisonKey(S);
					return S.toString();
				}
				e(S) {
					console.log("------------------------------------"),
						console.log(`AFTER ${S}: `);
					const I = [];
					for (const T of this.a) I.push(T[1].toString());
					console.log(
						I.join(`
`),
					);
				}
				pushElement(S, I = u.$IN.None, T = u.$JN.None) {
					if (S.type === u.UndoRedoElementType.Resource) {
						const P = h(S.resource),
							k = this.getUriComparisonKey(S.resource);
						this.f(new n(S, P, k, I.id, I.nextOrder(), T.id, T.nextOrder()));
					} else {
						const P = new Set(),
							k = [],
							L = [];
						for (const D of S.resources) {
							const M = h(D),
								N = this.getUriComparisonKey(D);
							P.has(N) || (P.add(N), k.push(M), L.push(N));
						}
						k.length === 1
							? this.f(
									new n(
										S,
										k[0],
										L[0],
										I.id,
										I.nextOrder(),
										T.id,
										T.nextOrder(),
									),
								)
							: this.f(
									new f(S, k, L, I.id, I.nextOrder(), T.id, T.nextOrder()),
								);
					}
					a && this.e("pushElement");
				}
				f(S) {
					for (let I = 0, T = S.strResources.length; I < T; I++) {
						const P = S.resourceLabels[I],
							k = S.strResources[I];
						let L;
						this.a.has(k)
							? (L = this.a.get(k))
							: ((L = new b(P, k)), this.a.set(k, L)),
							L.pushElement(S);
					}
				}
				getLastElement(S) {
					const I = this.getUriComparisonKey(S);
					if (this.a.has(I)) {
						const T = this.a.get(I);
						if (T.hasFutureElements()) return null;
						const P = T.getClosestPastElement();
						return P ? P.actual : null;
					}
					return null;
				}
				g(S, I) {
					const T = S.actual.split(),
						P = new Map();
					for (const k of T) {
						const L = h(k.resource),
							D = this.getUriComparisonKey(k.resource),
							M = new n(k, L, D, 0, 0, 0, 0);
						P.set(M.strResource, M);
					}
					for (const k of S.strResources) {
						if (I && I.has(k)) continue;
						this.a.get(k).splitPastWorkspaceElement(S, P);
					}
				}
				h(S, I) {
					const T = S.actual.split(),
						P = new Map();
					for (const k of T) {
						const L = h(k.resource),
							D = this.getUriComparisonKey(k.resource),
							M = new n(k, L, D, 0, 0, 0, 0);
						P.set(M.strResource, M);
					}
					for (const k of S.strResources) {
						if (I && I.has(k)) continue;
						this.a.get(k).splitFutureWorkspaceElement(S, P);
					}
				}
				removeElements(S) {
					const I = typeof S == "string" ? S : this.getUriComparisonKey(S);
					this.a.has(I) && (this.a.get(I).dispose(), this.a.delete(I)),
						a && this.e("removeElements");
				}
				setElementsValidFlag(S, I, T) {
					const P = this.getUriComparisonKey(S);
					this.a.has(P) && this.a.get(P).setElementsValidFlag(I, T),
						a && this.e("setElementsValidFlag");
				}
				hasElements(S) {
					const I = this.getUriComparisonKey(S);
					if (this.a.has(I)) {
						const T = this.a.get(I);
						return T.hasPastElements() || T.hasFutureElements();
					}
					return !1;
				}
				createSnapshot(S) {
					const I = this.getUriComparisonKey(S);
					return this.a.has(I)
						? this.a.get(I).createSnapshot(S)
						: new u.$HN(S, []);
				}
				restoreSnapshot(S) {
					const I = this.getUriComparisonKey(S.resource);
					if (this.a.has(I)) {
						const T = this.a.get(I);
						T.restoreSnapshot(S),
							!T.hasPastElements() &&
								!T.hasFutureElements() &&
								(T.dispose(), this.a.delete(I));
					}
					a && this.e("restoreSnapshot");
				}
				getElements(S) {
					const I = this.getUriComparisonKey(S);
					return this.a.has(I)
						? this.a.get(I).getElements()
						: { past: [], future: [] };
				}
				k(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestPastElement();
						L &&
							L.sourceId === S &&
							(!I || L.sourceOrder > I.sourceOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				canUndo(S) {
					if (S instanceof u.$JN) {
						const [, T] = this.k(S.id);
						return !!T;
					}
					const I = this.getUriComparisonKey(S);
					return this.a.has(I) ? this.a.get(I).hasPastElements() : !1;
				}
				l(S, I) {
					(0, t.$4)(S);
					for (const T of I.strResources) this.removeElements(T);
					this.d.error(S);
				}
				m(S) {
					for (const I of S.editStacks)
						if (I.locked) throw new Error("Cannot acquire edit stack lock");
					for (const I of S.editStacks) I.locked = !0;
					return () => {
						for (const I of S.editStacks) I.locked = !1;
					};
				}
				n(S, I, T, P, k) {
					const L = this.m(T);
					let D;
					try {
						D = I();
					} catch (M) {
						return L(), P.dispose(), this.l(M, S);
					}
					return D
						? D.then(
								() => (L(), P.dispose(), k()),
								(M) => (L(), P.dispose(), this.l(M, S)),
							)
						: (L(), P.dispose(), k());
				}
				async o(S) {
					if (typeof S.actual.prepareUndoRedo > "u") return i.$1c.None;
					const I = S.actual.prepareUndoRedo();
					return typeof I > "u" ? i.$1c.None : I;
				}
				p(S, I) {
					if (
						S.actual.type !== u.UndoRedoElementType.Workspace ||
						typeof S.actual.prepareUndoRedo > "u"
					)
						return I(i.$1c.None);
					const T = S.actual.prepareUndoRedo();
					return T
						? (0, i.$Uc)(T)
							? I(T)
							: T.then((P) => I(P))
						: I(i.$1c.None);
				}
				q(S) {
					const I = [];
					for (const T of S.strResources) I.push(this.a.get(T) || l);
					return new s(I);
				}
				s(S, I, T, P) {
					if (I.canSplit())
						return this.g(I, T), this.d.warn(P), new $(this.A(S, 0, !0));
					for (const k of I.strResources) this.removeElements(k);
					return this.d.warn(P), new $();
				}
				t(S, I, T, P) {
					if (I.removedResources)
						return this.s(
							S,
							I,
							I.removedResources,
							C.localize(
								2417,
								null,
								I.label,
								I.removedResources.createMessage(),
							),
						);
					if (P && I.invalidatedResources)
						return this.s(
							S,
							I,
							I.invalidatedResources,
							C.localize(
								2418,
								null,
								I.label,
								I.invalidatedResources.createMessage(),
							),
						);
					const k = [];
					for (const D of T.editStacks)
						D.getClosestPastElement() !== I && k.push(D.resourceLabel);
					if (k.length > 0)
						return this.s(
							S,
							I,
							null,
							C.localize(2419, null, I.label, k.join(", ")),
						);
					const L = [];
					for (const D of T.editStacks) D.locked && L.push(D.resourceLabel);
					return L.length > 0
						? this.s(S, I, null, C.localize(2420, null, I.label, L.join(", ")))
						: T.isValid()
							? null
							: this.s(S, I, null, C.localize(2421, null, I.label));
				}
				u(S, I, T) {
					const P = this.q(I),
						k = this.t(S, I, P, !1);
					return k ? k.returnValue : this.w(S, I, P, T);
				}
				v(S) {
					if (!S.groupId) return !1;
					for (const [, I] of this.a) {
						const T = I.getClosestPastElement();
						if (T) {
							if (T === S) {
								const P = I.getSecondClosestPastElement();
								if (P && P.groupId === S.groupId) return !0;
							}
							if (T.groupId === S.groupId) return !0;
						}
					}
					return !1;
				}
				async w(S, I, T, P) {
					if (I.canSplit() && !this.v(I)) {
						let D;
						(function (A) {
							(A[(A.All = 0)] = "All"),
								(A[(A.This = 1)] = "This"),
								(A[(A.Cancel = 2)] = "Cancel");
						})(D || (D = {}));
						const { result: M } = await this.c.prompt({
							type: E.default.Info,
							message: C.localize(2422, null, I.label),
							buttons: [
								{
									label: C.localize(2423, null, T.editStacks.length),
									run: () => D.All,
								},
								{ label: C.localize(2424, null), run: () => D.This },
							],
							cancelButton: { run: () => D.Cancel },
						});
						if (M === D.Cancel) return;
						if (M === D.This) return this.g(I, null), this.A(S, 0, !0);
						const N = this.t(S, I, T, !1);
						if (N) return N.returnValue;
						P = !0;
					}
					let k;
					try {
						k = await this.o(I);
					} catch (D) {
						return this.l(D, I);
					}
					const L = this.t(S, I, T, !0);
					if (L) return k.dispose(), L.returnValue;
					for (const D of T.editStacks) D.moveBackward(I);
					return this.n(
						I,
						() => I.actual.undo(),
						T,
						k,
						() => this.z(I.groupId, P),
					);
				}
				x(S, I, T) {
					if (!I.isValid) {
						S.flushAllElements();
						return;
					}
					if (S.locked) {
						const P = C.localize(2425, null, I.label);
						this.d.warn(P);
						return;
					}
					return this.p(
						I,
						(P) => (
							S.moveBackward(I),
							this.n(
								I,
								() => I.actual.undo(),
								new s([S]),
								P,
								() => this.z(I.groupId, T),
							)
						),
					);
				}
				y(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestPastElement();
						L &&
							L.groupId === S &&
							(!I || L.groupOrder > I.groupOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				z(S, I) {
					if (!S) return;
					const [, T] = this.y(S);
					if (T) return this.A(T, 0, I);
				}
				undo(S) {
					if (S instanceof u.$JN) {
						const [, I] = this.k(S.id);
						return I ? this.A(I, S.id, !1) : void 0;
					}
					return typeof S == "string"
						? this.A(S, 0, !1)
						: this.A(this.getUriComparisonKey(S), 0, !1);
				}
				A(S, I = 0, T) {
					if (!this.a.has(S)) return;
					const P = this.a.get(S),
						k = P.getClosestPastElement();
					if (!k) return;
					if (k.groupId) {
						const [D, M] = this.y(k.groupId);
						if (k !== D && M) return this.A(M, I, T);
					}
					if ((k.sourceId !== I || k.confirmBeforeUndo) && !T)
						return this.B(S, I, k);
					try {
						return k.type === u.UndoRedoElementType.Workspace
							? this.u(S, k, T)
							: this.x(P, k, T);
					} finally {
						a && this.e("undo");
					}
				}
				async B(S, I, T) {
					if (
						(
							await this.c.confirm({
								message: C.localize(2426, null, T.label),
								primaryButton: C.localize(2427, null),
								cancelButton: C.localize(2428, null),
							})
						).confirmed
					)
						return this.A(S, I, !0);
				}
				C(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestFutureElement();
						L &&
							L.sourceId === S &&
							(!I || L.sourceOrder < I.sourceOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				canRedo(S) {
					if (S instanceof u.$JN) {
						const [, T] = this.C(S.id);
						return !!T;
					}
					const I = this.getUriComparisonKey(S);
					return this.a.has(I) ? this.a.get(I).hasFutureElements() : !1;
				}
				D(S, I, T, P) {
					if (I.canSplit())
						return this.h(I, T), this.d.warn(P), new $(this.K(S));
					for (const k of I.strResources) this.removeElements(k);
					return this.d.warn(P), new $();
				}
				E(S, I, T, P) {
					if (I.removedResources)
						return this.D(
							S,
							I,
							I.removedResources,
							C.localize(
								2429,
								null,
								I.label,
								I.removedResources.createMessage(),
							),
						);
					if (P && I.invalidatedResources)
						return this.D(
							S,
							I,
							I.invalidatedResources,
							C.localize(
								2430,
								null,
								I.label,
								I.invalidatedResources.createMessage(),
							),
						);
					const k = [];
					for (const D of T.editStacks)
						D.getClosestFutureElement() !== I && k.push(D.resourceLabel);
					if (k.length > 0)
						return this.D(
							S,
							I,
							null,
							C.localize(2431, null, I.label, k.join(", ")),
						);
					const L = [];
					for (const D of T.editStacks) D.locked && L.push(D.resourceLabel);
					return L.length > 0
						? this.D(S, I, null, C.localize(2432, null, I.label, L.join(", ")))
						: T.isValid()
							? null
							: this.D(S, I, null, C.localize(2433, null, I.label));
				}
				F(S, I) {
					const T = this.q(I),
						P = this.E(S, I, T, !1);
					return P ? P.returnValue : this.G(S, I, T);
				}
				async G(S, I, T) {
					let P;
					try {
						P = await this.o(I);
					} catch (L) {
						return this.l(L, I);
					}
					const k = this.E(S, I, T, !0);
					if (k) return P.dispose(), k.returnValue;
					for (const L of T.editStacks) L.moveForward(I);
					return this.n(
						I,
						() => I.actual.redo(),
						T,
						P,
						() => this.J(I.groupId),
					);
				}
				H(S, I) {
					if (!I.isValid) {
						S.flushAllElements();
						return;
					}
					if (S.locked) {
						const T = C.localize(2434, null, I.label);
						this.d.warn(T);
						return;
					}
					return this.p(
						I,
						(T) => (
							S.moveForward(I),
							this.n(
								I,
								() => I.actual.redo(),
								new s([S]),
								T,
								() => this.J(I.groupId),
							)
						),
					);
				}
				I(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestFutureElement();
						L &&
							L.groupId === S &&
							(!I || L.groupOrder < I.groupOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				J(S) {
					if (!S) return;
					const [, I] = this.I(S);
					if (I) return this.K(I);
				}
				redo(S) {
					if (S instanceof u.$JN) {
						const [, I] = this.C(S.id);
						return I ? this.K(I) : void 0;
					}
					return typeof S == "string"
						? this.K(S)
						: this.K(this.getUriComparisonKey(S));
				}
				K(S) {
					if (!this.a.has(S)) return;
					const I = this.a.get(S),
						T = I.getClosestFutureElement();
					if (T) {
						if (T.groupId) {
							const [P, k] = this.I(T.groupId);
							if (T !== P && k) return this.K(k);
						}
						try {
							return T.type === u.UndoRedoElementType.Workspace
								? this.F(S, T)
								: this.H(I, T);
						} finally {
							a && this.e("redo");
						}
					}
				}
				rebaseStack(S, I, T, P, k, L, D, M) {
					const N = this.getUriComparisonKey(S);
					if (!this.a.has(N)) return;
					this.a.get(N).rebase(I, T, P, k, L, D, M);
				}
			};
			(e.$bvc = y), (e.$bvc = y = Ne([j(0, d.$GO), j(1, r.$4N)], y));
			class $ {
				constructor(S) {
					this.returnValue = S;
				}
			}
			(0, m.$lK)(u.$GN, y, m.InstantiationType.Delayed);
		},
	),
		