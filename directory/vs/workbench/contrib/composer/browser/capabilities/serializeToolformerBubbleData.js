import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/bufbuild/protobuf.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
define(de[3033], he([1, 0, 86, 124]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*tools_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parseToolformerBubbleDataMap = C),
				(e.stringifyToolformerBubbleDataMap = d);
			function w(m) {
				return m;
			}
			function E(m) {
				const r = m.tool,
					{ params: u, result: a } = (() => {
						switch (r) {
							case i.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2:
								return {
									params: m.params ? i.$Sz.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Uz.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.READ_SEMSEARCH_FILES:
								return {
									params: m.params ? i.$ty.fromJsonString(m.params) : void 0,
									result: m.result ? i.$vy.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.READ_FILE_FOR_IMPORTS:
								return {
									params: m.params ? i.$Cy.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Dy.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.FILE_SEARCH:
								return {
									params: m.params ? i.$Ux.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Xx.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.EDIT_FILE:
								return {
									params: m.params ? i.$Px.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Qx.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.LIST_DIR:
								return {
									params: m.params ? i.$Zx.fromJsonString(m.params) : void 0,
									result: m.result ? i.$1x.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.READ_FILE:
								return {
									params: m.params ? i.$4x.fromJsonString(m.params) : void 0,
									result: m.result ? i.$5x.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.RIPGREP_SEARCH:
								return {
									params: m.params ? i.$7x.fromJsonString(m.params) : void 0,
									result: m.result ? i.$ey.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.SEMANTIC_SEARCH_FULL:
								return {
									params: m.params ? i.$yy.fromJsonString(m.params) : void 0,
									result: m.result ? i.$zy.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.CREATE_FILE:
								return {
									params: m.params ? i.$Fy.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Gy.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.DELETE_FILE:
								return {
									params: m.params ? i.$Hy.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Iy.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.REAPPLY:
								return {
									params: m.params ? i.$Cx.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Dx.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.PARALLEL_APPLY:
								return {
									params: m.params ? i.$Nz.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Pz.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.UNSPECIFIED:
								return { params: void 0, result: void 0 };
							case i.ClientSideToolV2.GET_RELATED_FILES:
								return {
									params: m.params ? i.$Ex.fromJsonString(m.params) : void 0,
									result: m.result ? i.$Fx.fromJsonString(m.result) : void 0,
								};
							case i.ClientSideToolV2.RUN_TERMINAL_COMMAND:
								return {
									params: m.params ? i.$Ky.fromJsonString(m.params) : void 0,
									result: m.result ? i.$My.fromJsonString(m.result) : void 0,
								};
							default:
								throw new Error(`Parsing unknown tool: ${r}`);
						}
					})();
				return {
					...m,
					params: u,
					result: a,
					error: m.error ? i.$Kx.fromJsonString(m.error) : void 0,
				};
			}
			function C(m) {
				const r = JSON.parse(m);
				return Object.fromEntries(Object.entries(r).map(([u, a]) => [u, E(a)]));
			}
			function d(m) {
				function r(u) {
					if (u instanceof t.Message) return u.toJsonString();
					if (Array.isArray(u)) return u.map((a) => r(a));
					if (u !== null && typeof u == "object") {
						const a = {};
						for (const h in u) h in u && (a[h] = r(u[h]));
						return a;
					}
					return u;
				}
				return JSON.stringify(r(m));
			}
		})
