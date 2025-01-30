import '../../../../../require.js';
import '../../../../../exports.js';
define(de[259], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$k4 = e.TestPosition = e.TestIdPathParts = void 0);
			var t;
			(function (E) {
				E.Delimiter = "\0";
			})(t || (e.TestIdPathParts = t = {}));
			var i;
			(function (E) {
				(E[(E.IsSame = 0)] = "IsSame"),
					(E[(E.Disconnected = 1)] = "Disconnected"),
					(E[(E.IsChild = 2)] = "IsChild"),
					(E[(E.IsParent = 3)] = "IsParent");
			})(i || (e.TestPosition = i = {}));
			class w {
				static fromExtHostTestItem(C, d, m = C.parent) {
					if (C._isRoot) return new w([d]);
					const r = [C.id];
					for (let u = m; u && u.id !== d; u = u.parent) r.push(u.id);
					return r.push(d), new w(r.reverse());
				}
				static isRoot(C) {
					return !C.includes(t.Delimiter);
				}
				static root(C) {
					const d = C.indexOf(t.Delimiter);
					return d === -1 ? C : C.slice(0, d);
				}
				static fromString(C) {
					return new w(C.split(t.Delimiter));
				}
				static join(C, d) {
					return new w([...C.path, d]);
				}
				static joinToString(C, d) {
					return C.toString() + t.Delimiter + d;
				}
				static parentId(C) {
					const d = C.lastIndexOf(t.Delimiter);
					return d === -1 ? void 0 : C.slice(0, d);
				}
				static localId(C) {
					const d = C.lastIndexOf(t.Delimiter);
					return d === -1 ? C : C.slice(d + t.Delimiter.length);
				}
				static isChild(C, d) {
					return d[C.length] === t.Delimiter && d.startsWith(C);
				}
				static compare(C, d) {
					return C === d
						? i.IsSame
						: w.isChild(C, d)
							? i.IsChild
							: w.isChild(d, C)
								? i.IsParent
								: i.Disconnected;
				}
				static getLengthOfCommonPrefix(C, d) {
					if (C === 0) return 0;
					let m = 0;
					for (; m < C - 1; ) {
						for (let r = 1; r < C; r++) {
							const u = d(r - 1),
								a = d(r);
							if (u.path[m] !== a.path[m]) return m;
						}
						m++;
					}
					return m;
				}
				constructor(C, d = C.length) {
					if (((this.path = C), (this.d = d), C.length === 0 || d < 1))
						throw new Error("cannot create test with empty path");
				}
				get rootId() {
					return new w(this.path, 1);
				}
				get parentId() {
					return this.d > 1 ? new w(this.path, this.d - 1) : void 0;
				}
				get localId() {
					return this.path[this.d - 1];
				}
				get controllerId() {
					return this.path[0];
				}
				get isRoot() {
					return this.d === 1;
				}
				*idsFromRoot() {
					for (let C = 1; C <= this.d; C++) yield new w(this.path, C);
				}
				*idsToRoot() {
					for (let C = this.d; C > 0; C--) yield new w(this.path, C);
				}
				compare(C) {
					if (typeof C == "string") return w.compare(this.toString(), C);
					for (let d = 0; d < C.d && d < this.d; d++)
						if (C.path[d] !== this.path[d]) return i.Disconnected;
					return C.d > this.d
						? i.IsChild
						: C.d < this.d
							? i.IsParent
							: i.IsSame;
				}
				toJSON() {
					return this.toString();
				}
				toString() {
					if (!this.c) {
						this.c = this.path[0];
						for (let C = 1; C < this.d; C++)
							(this.c += t.Delimiter), (this.c += this.path[C]);
					}
					return this.c;
				}
			}
			e.$k4 = w;
		}),
		