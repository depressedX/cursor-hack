import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/path.js';
import '../../../base/common/ternarySearchTree.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/network.js';
define(
			de[25],
			he([1, 0, 4, 54, 387, 19, 9, 5, 23]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*path*/,
 w /*ternarySearchTree*/,
 E /*resources*/,
 C /*uri*/,
 d /*instantiation*/,
 m /*network*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cj =
						e.$_i =
						e.$$i =
						e.$0i =
						e.$9i =
						e.$7i =
						e.$6i =
						e.WorkbenchState =
						e.$Zi =
						e.$Yi =
						e.$Vi =
							void 0),
					(e.$Wi = r),
					(e.$Xi = u),
					(e.$1i = a),
					(e.$2i = h),
					(e.$3i = c),
					(e.$4i = g),
					(e.$5i = p),
					(e.$8i = b),
					(e.$aj = s),
					(e.$bj = l),
					(e.$dj = y),
					(e.$ej = $),
					(e.$fj = v),
					(e.$Vi = (0, d.$Mi)("contextService"));
				function r(S) {
					const I = S;
					return typeof I?.id == "string" && C.URI.isUri(I.uri);
				}
				function u(S) {
					return typeof S?.id == "string" && !r(S) && !h(S);
				}
				(e.$Yi = { id: "ext-dev" }), (e.$Zi = { id: "empty-window" });
				function a(S, I) {
					if (typeof S == "string" || typeof S > "u")
						return typeof S == "string"
							? { id: (0, i.$sc)(S) }
							: I
								? e.$Yi
								: e.$Zi;
					const T = S;
					return T.configuration
						? { id: T.id, configPath: T.configuration }
						: T.folders.length === 1
							? { id: T.id, uri: T.folders[0].uri }
							: { id: T.id };
				}
				function h(S) {
					const I = S;
					return typeof I?.id == "string" && C.URI.isUri(I.configPath);
				}
				function c(S) {
					const I = S;
					if (I?.uri) return { id: I.id, uri: C.URI.revive(I.uri) };
					const T = S;
					if (T?.configPath)
						return { id: T.id, configPath: C.URI.revive(T.configPath) };
					if (S?.id) return { id: S.id };
				}
				var n;
				(function (S) {
					(S[(S.EMPTY = 1)] = "EMPTY"),
						(S[(S.FOLDER = 2)] = "FOLDER"),
						(S[(S.WORKSPACE = 3)] = "WORKSPACE");
				})(n || (e.WorkbenchState = n = {}));
				function g(S) {
					const I = S;
					return !!(
						I &&
						typeof I == "object" &&
						typeof I.id == "string" &&
						Array.isArray(I.folders)
					);
				}
				function p(S) {
					const I = S;
					return !!(
						I &&
						typeof I == "object" &&
						C.URI.isUri(I.uri) &&
						typeof I.name == "string" &&
						typeof I.toResource == "function"
					);
				}
				class o {
					constructor(I, T, P, k, L) {
						(this.h = I),
							(this.j = P),
							(this.k = k),
							(this.l = L),
							(this.c = w.$Si.forUris(this.l, () => !0)),
							(this.folders = T);
					}
					update(I) {
						(this.h = I.id),
							(this.k = I.configuration),
							(this.j = I.transient),
							(this.l = I.l),
							(this.folders = I.folders);
					}
					get folders() {
						return this.g;
					}
					set folders(I) {
						(this.g = I), this.n();
					}
					get id() {
						return this.h;
					}
					get transient() {
						return this.j;
					}
					get configuration() {
						return this.k;
					}
					set configuration(I) {
						this.k = I;
					}
					getFolder(I) {
						return (I && this.c.findSubstr(I)) || null;
					}
					n() {
						this.c = w.$Si.forUris(this.l, () => !0);
						for (const I of this.folders) this.c.set(I.uri, I);
					}
					toJSON() {
						return {
							id: this.id,
							folders: this.folders,
							transient: this.transient,
							configuration: this.configuration,
						};
					}
				}
				e.$6i = o;
				class f {
					constructor(I, T) {
						(this.raw = T),
							(this.uri = I.uri),
							(this.index = I.index),
							(this.name = I.name);
					}
					toResource(I) {
						return (0, E.$nh)(this.uri, I);
					}
					toJSON() {
						return { uri: this.uri, name: this.name, index: this.index };
					}
				}
				e.$7i = f;
				function b(S) {
					return new f(
						{ uri: S, index: 0, name: (0, E.$jh)(S) },
						{ uri: S.toString() },
					);
				}
				(e.$9i = "code-workspace"),
					(e.$0i = `.${e.$9i}`),
					(e.$$i = [
						{ name: (0, t.localize)(2493, null), extensions: [e.$9i] },
					]),
					(e.$_i = "workspace.json");
				function s(S, I) {
					return E.$eh.isEqualOrParent(S, I.untitledWorkspacesHome);
				}
				function l(S) {
					let I;
					return (
						C.URI.isUri(S) ? (I = S) : (I = S.configuration),
						I?.scheme === m.Schemas.tmp
					);
				}
				e.$cj = "4064f6ec-cb38-4ad0-af64-ee6467e63c82";
				function y(S) {
					return S.id === e.$cj;
				}
				function $(S, I) {
					return !s(S, I) && !l(S);
				}
				function v(S) {
					return (
						(typeof S == "string" ? (0, i.$tc)(S) : (0, E.$lh)(S)) === e.$0i
					);
				}
			},
		),
		