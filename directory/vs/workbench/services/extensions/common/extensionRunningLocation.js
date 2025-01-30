import '../../../../../require.js';
import '../../../../../exports.js';
import './extensionHostKind.js';
define(de[1294], he([1, 0, 517]), function (ce /*require*/,
 e /*exports*/,
 t /*extensionHostKind*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$h2 = e.$g2 = e.$f2 = void 0);
			class i {
				constructor(d) {
					(this.affinity = d), (this.kind = t.ExtensionHostKind.LocalProcess);
				}
				equals(d) {
					return this.kind === d.kind && this.affinity === d.affinity;
				}
				asString() {
					return this.affinity === 0
						? "LocalProcess"
						: `LocalProcess${this.affinity}`;
				}
			}
			e.$f2 = i;
			class w {
				constructor(d) {
					(this.affinity = d), (this.kind = t.ExtensionHostKind.LocalWebWorker);
				}
				equals(d) {
					return this.kind === d.kind && this.affinity === d.affinity;
				}
				asString() {
					return this.affinity === 0
						? "LocalWebWorker"
						: `LocalWebWorker${this.affinity}`;
				}
			}
			e.$g2 = w;
			class E {
				constructor() {
					(this.kind = t.ExtensionHostKind.Remote), (this.affinity = 0);
				}
				equals(d) {
					return this.kind === d.kind;
				}
				asString() {
					return "Remote";
				}
			}
			e.$h2 = E;
		}),
		